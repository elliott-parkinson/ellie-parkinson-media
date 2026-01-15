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

// src/main.ts
console.log("loaded");
