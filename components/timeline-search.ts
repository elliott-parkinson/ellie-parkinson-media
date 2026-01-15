import { html } from "npm:lit-html";

class FilterSearch extends HTMLElement {
  private input!: HTMLInputElement;
  private targetElement: HTMLElement | null = null;

  static get observedAttributes() {
    return ['for'];
  }

  connectedCallback() {
    this.bindInput();
    this.resolveTarget();
  }
  

  attributeChangedCallback( name: string, _oldValue: string, newValue: string) {
    if (name === 'for') {
      this.resolveTarget();
    }
  }

  public bindInput(element?: HTMLInputElement) {
    this.input = this.getElementsByTagName("input")[0];
    if (element) this.input = element;
    if (!this.input) return;
    this.input.style.display = ''
    this.input.addEventListener('input', this.handleSearch.bind(this));
  }

  private resolveTarget() {
    const targetId = this.getAttribute('for');
    this.targetElement = targetId ? document.getElementById(targetId) : null;
  }

  private handleSearch() {
    if (!this.targetElement) return;

    const term = this.input.value.toLowerCase();

    Array.from(this.targetElement.children).forEach(child => {
      const text = child.textContent?.toLowerCase() || '';
      child.style.display = text.includes(term) ? '' : 'none';
    });
  }
}

// Define the custom element
customElements.define('filter-search', FilterSearch);