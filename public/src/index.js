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
    <link rel="stylesheet" href="./src/index.css">
    <section class="FirstSection">
      <custom-message message="Lectormanga"></custom-message>
    </section>
    <section class="SecondSection">
    <custom-message message="Mi programación"></custom-message>
      <custom-message message="Populares"></custom-message>
    </section>
    <section class="thirdSection">
    <custom-message message="Perdidos en la nube" img="https://otakuteca.com/images/books/cover/616f1dbebe7d1.jpg"></custom-message>
    <custom-message message="Konbini Goto Kara Tasuketa Jimi Tenin ga, <br>
    Onaji Kurasu no Ubude Kawaii Gyarudatta"img="https://otakuteca.com/images/books/cover/6462f67ac43f9.jpg"></custom-message>
    <custom-message message="Obtuve un Objeto Mítico" img="https://otakuteca.com/images/books/cover/62a5fef76c721.jpg"></custom-message>
    <custom-message message="Magenai Kan Dashi Terukedo Zenzen Chokkaku ni Magaru Onna" img="https://otakuteca.com/images/books/cover/62890a2e48c4a.jpg"></custom-message> 
    </section>
    <Section class="sixSection">
    <custom-message message="El Príncipe problematico" img="https://otakuteca.com/images/books/cover/63af0a0250961.jpg"></custom-message>
    <custom-message message="El Irregular de la Real Academia Mágica" img="https://otakuteca.com/images/books/cover/620aaa680673f.jpg"></custom-message>
    <custom-message message="Kill blue" img="https://otakuteca.com/images/books/cover/6479699b4d563.jpg"></custom-message>
    <custom-message message="Cheat skill "shisha sosei" ga kakusei shite inishieno maougun wo fukkatsu sasete shimaimashita ~dare mo shinasenai saikyou hiiro~" img="https://otakuteca.com/images/books/cover/5fe2685026ce0.jpg"></custom-message>
    </Section>
    <section class="sevenSection">
    <custom-message message="La Novia del Dragón" img="https://otakuteca.com/images/books/cover/5d2b5c017b435.jpg"></custom-message>
    <custom-message message="Dai 3 Ouji Wa Slow Life o Goshomou" img="https://otakuteca.com/images/books/cover/6445fadb1298d.jpg"></custom-message>
    <custom-message message="¿Por qué estás obsesionado con tu esposa falsa?" img="https://otakuteca.com/images/books/cover/64c8359070573.jpg"></custom-message>
    <custom-message message="My lady is inside and outside of the glass case" img="https://otakuteca.com/images/books/cover/64e2a083302f5.jpg"></custom-message>
    </section>
    <section class="fourSection">
    <custom-message message="Trending"></custom-message>
    </section>
    <section class="fiveSection">
    <custom-message message="Magenai Kan Dashi Terukedo Zenzen Chokkaku ni Magaru Onna" img="https://otakuteca.com/images/books/cover/62890a2e48c4a.jpg"></custom-message>
    <custom-message message="Chiyu Mahou no Machigatta Tsukaikata - Senjou o Kakeru Kaifuku Youin" img="https://otakuteca.com/images/books/cover/5d05b7be375fa.jpg"></custom-message>
    <custom-message message="Mi Esclava Sexual Necesita Ser Arreglada" img="https://otakuteca.com/images/books/cover/64af94dac7e7b.jpg"></custom-message>
    <custom-message message="Me desperté pilotando la nave espacial más poderosa, así que me hice mercenario espacial" img="https://otakuteca.com/images/books/cover/642b74e7a3b47.jpg"></custom-message>
    </section>
    <section class ="eight">
    <custom-message message="Tensei Majou no Yuusha Gakuen Musou" img="https://otakuteca.com/images/books/cover/64e2f9e14012b.jpg"></custom-message>
    <custom-message message="Mugen no Skill Getter" img="https://otakuteca.com/images/books/cover/61a3c9b994024.jpg"></custom-message>
    <custom-message message="Sachiko, la estudiante de primer año que intentó ingresar durante 15 años a la universidad." img="https://otakuteca.com/images/books/cover/64e34b3730490.jpg"></custom-message>
    <custom-message message="Zettai ni Damage wo Ukenai Skill wo Moratta node, Boukensha to shite Musou shite miru" img="https://otakuteca.com/images/books/cover/5ef99d2e547a7.jpg"></custom-message>
    </section>`;
  }
}

customElements.define("app-container", AppContainer);