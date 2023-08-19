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
    <link rel="stylesheet" href="https://otakuteca.com/images/books/cover/64df40023b028.jpg">
    <custom-message message="Lectormanga" img="https://otakuteca.com/images/books/cover/64df40023b028.jpg"></custom-message>
    
    <my-counter></my-counter>
    `;
  }
}

customElements.define("app-container", AppContainer);