// components/timeline-search.ts
var FilterSearch = class extends HTMLElement {
  input;
  targetElement = null;
  static get observedAttributes() {
    return [
      "for"
    ];
  }
  connectedCallback() {
    this.bindInput();
    this.resolveTarget();
  }
  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === "for") {
      this.resolveTarget();
    }
  }
  bindInput(element) {
    this.input = this.getElementsByTagName("input")[0];
    if (element) this.input = element;
    if (!this.input) return;
    this.input.style.display = "";
    this.input.addEventListener("input", this.handleSearch.bind(this));
  }
  resolveTarget() {
    const targetId = this.getAttribute("for");
    this.targetElement = targetId ? document.getElementById(targetId) : null;
  }
  handleSearch() {
    if (!this.targetElement) return;
    const term = this.input.value.toLowerCase();
    Array.from(this.targetElement.children).forEach((child) => {
      const text = child.textContent?.toLowerCase() || "";
      child.style.display = text.includes(term) ? "" : "none";
    });
  }
};
customElements.define("filter-search", FilterSearch);

// components/carousel-item.ts
var CarouselItem = class extends HTMLElement {
  connectedCallback() {
    this.setAttribute("role", "group");
  }
};
customElements.define("carousel-item", CarouselItem);

// components/carousel-list.ts
var CarouselList = class _CarouselList extends HTMLElement {
  viewport;
  track;
  items = [];
  currentIndex = 0;
  paginationButtons = [];
  isDragging = false;
  dragStartX = 0;
  dragDeltaX = 0;
  onResize = () => this.update();
  static stylesInjected = false;
  connectedCallback() {
    this.injectStyles();
    this.setupStructure();
    window.addEventListener("resize", this.onResize);
    this.update();
  }
  disconnectedCallback() {
    window.removeEventListener("resize", this.onResize);
  }
  injectStyles() {
    if (_CarouselList.stylesInjected) return;
    const style = document.createElement("style");
    style.textContent = `
      carousel-list {
        --carousel-nav-bg: rgba(0, 0, 0, 0.6);
        --carousel-nav-fg: #fff;
        --carousel-dot: rgba(0, 0, 0, 0.35);
        --carousel-dot-active: #0b57d0;
        --carousel-radius: 0.5rem;
        --carousel-nav-gap: 0.7rem;

        display: grid;
        grid-template-columns: minmax(0, 1fr);
        grid-template-rows: auto auto;
        width: 100%;
        align-items: center;
        row-gap: 0.75rem;
      }

      carousel-list.has-navigation {
        grid-template-columns: auto minmax(0, 1fr) auto;
        column-gap: var(--carousel-nav-gap);
      }

      carousel-list .carousel-viewport {
        overflow: hidden;
        width: 100%;
        touch-action: pan-y;
        border-radius: var(--carousel-radius);
        grid-column: 1;
        grid-row: 1;
      }

      carousel-list.has-navigation .carousel-viewport {
        grid-column: 2;
      }

      carousel-list .carousel-track {
        display: flex;
        width: 100%;
        transition: transform 240ms ease;
        will-change: transform;
      }

      carousel-list.dragging .carousel-track {
        transition: none;
      }

      carousel-item {
        flex: 0 0 100%;
        width: 100%;
        display: block;
      }

      carousel-item > img,
      carousel-item img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: var(--carousel-radius);
      }

      carousel-list .carousel-nav {
        border: 0;
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 0.8em;
        background: var(--carousel-nav-bg);
        color: var(--carousel-nav-fg);
        font-size: 1.25rem;
        line-height: 1;
        cursor: pointer;
      }

      carousel-list .carousel-nav.prev {
        grid-column: 1;
        grid-row: 1;
      }

      carousel-list .carousel-nav.next {
        grid-column: 3;
        grid-row: 1;
      }

      carousel-list .carousel-pagination {
        position: static;
        display: flex;
        justify-content: center;
        gap: 0.4rem;
        margin-top: 0;
        grid-column: 1 / -1;
        grid-row: 2;
        width: 100%;
      }

      carousel-list .carousel-pagination button {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 0.5em;
        border: 0;
        background: var(--carousel-dot);
        cursor: pointer;
        padding: 0;
      }

      carousel-list .carousel-pagination button[aria-current="true"] {
        background: var(--carousel-dot-active);
      }
    `;
    document.head.appendChild(style);
    _CarouselList.stylesInjected = true;
  }
  setupStructure() {
    const existingViewport = this.querySelector(":scope > .carousel-viewport");
    if (existingViewport) {
      this.viewport = existingViewport;
      this.track = existingViewport.querySelector(":scope > .carousel-track");
    } else {
      this.items = Array.from(this.querySelectorAll(":scope > carousel-item"));
      this.viewport = document.createElement("div");
      this.viewport.className = "carousel-viewport";
      this.track = document.createElement("div");
      this.track.className = "carousel-track";
      this.items.forEach((item) => this.track.appendChild(item));
      this.viewport.appendChild(this.track);
      this.replaceChildren(this.viewport);
      this.classList.toggle("has-navigation", this.hasAttribute("navigation"));
      this.classList.toggle("has-pagination", this.hasAttribute("pagination"));
      if (this.hasAttribute("navigation")) {
        this.addNavigation();
      }
      if (this.hasAttribute("pagination")) {
        this.addPagination();
      }
      this.attachDragging();
    }
    this.items = Array.from(this.track.querySelectorAll(":scope > carousel-item"));
  }
  addNavigation() {
    const prev = document.createElement("button");
    prev.type = "button";
    prev.className = "carousel-nav prev";
    prev.setAttribute("aria-label", "Previous slide");
    prev.textContent = "\u2039";
    const next = document.createElement("button");
    next.type = "button";
    next.className = "carousel-nav next";
    next.setAttribute("aria-label", "Next slide");
    next.textContent = "\u203A";
    prev.addEventListener("click", () => this.goTo(this.currentIndex - 1));
    next.addEventListener("click", () => this.goTo(this.currentIndex + 1));
    this.append(prev, next);
  }
  addPagination() {
    const pagination = document.createElement("div");
    pagination.className = "carousel-pagination";
    this.paginationButtons = [];
    this.items.forEach((_item, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", `Go to slide ${index + 1}`);
      button.addEventListener("click", () => this.goTo(index));
      this.paginationButtons.push(button);
      pagination.appendChild(button);
    });
    this.appendChild(pagination);
  }
  attachDragging() {
    if (!this.hasAttribute("mouse-dragging")) return;
    this.viewport.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      this.isDragging = true;
      this.dragStartX = event.clientX;
      this.dragDeltaX = 0;
      this.classList.add("dragging");
      this.viewport.setPointerCapture(event.pointerId);
    });
    this.viewport.addEventListener("pointermove", (event) => {
      if (!this.isDragging) return;
      this.dragDeltaX = event.clientX - this.dragStartX;
      const offset = -(this.currentIndex * this.viewport.clientWidth) + this.dragDeltaX;
      this.track.style.transform = `translateX(${offset}px)`;
    });
    const endDrag = (pointerId) => {
      if (!this.isDragging) return;
      this.isDragging = false;
      this.classList.remove("dragging");
      const threshold = Math.max(40, this.viewport.clientWidth * 0.15);
      if (this.dragDeltaX <= -threshold) {
        this.goTo(this.currentIndex + 1);
      } else if (this.dragDeltaX >= threshold) {
        this.goTo(this.currentIndex - 1);
      } else {
        this.update();
      }
      if (this.viewport.hasPointerCapture(pointerId)) {
        this.viewport.releasePointerCapture(pointerId);
      }
    };
    this.viewport.addEventListener("pointerup", (event) => endDrag(event.pointerId));
    this.viewport.addEventListener("pointercancel", (event) => endDrag(event.pointerId));
    this.viewport.addEventListener("pointerleave", (event) => {
      if (event.buttons === 0) endDrag(event.pointerId);
    });
  }
  goTo(index) {
    const max = this.items.length - 1;
    if (max < 0) return;
    if (this.hasAttribute("loop")) {
      if (index < 0) {
        this.currentIndex = max;
      } else if (index > max) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = index;
      }
    } else {
      this.currentIndex = Math.min(Math.max(index, 0), max);
    }
    this.update();
  }
  update() {
    const width = this.viewport?.clientWidth ?? 0;
    if (width > 0) {
      const offset = -(this.currentIndex * width);
      this.track.style.transform = `translateX(${offset}px)`;
    } else {
      this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }
    this.paginationButtons.forEach((button, index) => {
      if (index === this.currentIndex) {
        button.setAttribute("aria-current", "true");
      } else {
        button.removeAttribute("aria-current");
      }
    });
  }
};
if (!customElements.get("carousel-list")) {
  customElements.define("carousel-list", CarouselList);
}

// src/main.ts
console.log("loaded: with carousel");
