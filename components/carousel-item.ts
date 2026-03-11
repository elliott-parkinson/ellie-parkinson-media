class CarouselItem extends HTMLElement {
  connectedCallback() {
    this.setAttribute("role", "group");
  }
}

customElements.define("carousel-item", CarouselItem);

