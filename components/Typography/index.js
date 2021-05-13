// Create a class for the element
class Typography extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        // With mode === closed, you cannot access to the shadow dom from outside
        const shadow = this.attachShadow({ mode: 'closed' });
        // Get tag type
        const tag = this.getAttribute('component') || 'span';
        const wrapper = document.createElement(tag);
        // Take attribute content and put it inside the tag
        const text = this.getAttribute('data-text');
        wrapper.textContent = text;
        // Create some CSS to apply to the shadow dom
        const style = document.createElement('style');
        style.textContent = `
        h1 {
          font-size: 3rem;
          font-weight: 700;
        }
        p {
            font-size: 1.2rem;
            font-weight: 400;
        }
      `;

        // Attach the created elements to the shadow dom
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
}

// Define the new element (name must contain hyphens)
customElements.define('web-typography', Typography);