class PictureModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const picture = this.querySelector('picture');
    const clonedPicture = picture.cloneNode(true);

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          cursor: pointer;
        }
        dialog {
          border: none;
          padding: 0;
          background: transparent;
        }
        .backdrop {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
        .modal-content  {
            max-width: 90%;
            max-height: 90%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          cursor: default;
        }
          .modal-content picture {
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          .modal-content picture img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
      </style>
      <slot></slot>
      <dialog closedby-"any">
          <div class="modal-content"></div>
      </dialog>
    `;

    const dialog = this.shadowRoot.querySelector('dialog');
    const modalContent = this.shadowRoot.querySelector('.modal-content');
    modalContent.appendChild(clonedPicture);

    this.addEventListener('click', () => {
      dialog.showModal();
    });

    dialog.addEventListener('click', () => {
        console.log('dialog clicked', dialog)
        dialog?.removeAttribute("open");
        console.log('open', dialog?.hasAttribute("open"))
      dialog?.close();
    });
    this.shadowRoot.querySelector('picture').addEventListener('click', () => {
        console.log('picture clicked', dialog)
      dialog?.close();
    });
  }
}

customElements.define('picture-modal', PictureModal);