import * as components from "./components/index.js";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); 
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <custom-message message="Lectormanga"></custom-message>
    <link rel="stylesheet" href="https://lectormanga.com/library/manga/79077/boruto-two-blue-vortex">
    <my-counter></my-counter>
    `;
  }
}

customElements.define("app-container", AppContainer);