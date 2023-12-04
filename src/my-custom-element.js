
    class MyCustomElement extends HTMLElement {
      connectedCallback() {
        this.innerHTML = `
          <div class="my-custom-element">
            <p>Hello from My Custom Element!</p>
            <input type="text">
          </div>
        `;
      }
    }

    // Define the custom element tag
    customElements.define('my-custom-element', MyCustomElement);