
// customElements.define( name, constructor, options );

class Guenda extends HTMLElement {
    constructor() {
      super();
      let shadow = this.attachShadow({mode: 'open'});
      //this.shadowRoot.innerHTML = "<h1>CIAO SONO GUENDALINA E' STO BENE :)</h1>";
      

      let header = document.createElement('header');
    //  header.style.backgroundColor = "#BB8090";
    // header.style.color = "#BB67ff";
    header.setAttribute('class', 'ilmioheader');
      //header.className = 'ilmioheader'; // = "ilmioheader";
       header.innerHTML = "<h1 class='ilmioheader'>CUSTOM ELEMENT HTML</ h1>"

      let paragrafo = document.createElement('p');
      paragrafo.style.backgroundColor = "red";
      paragrafo.style.color = "yellow";

      paragrafo.innerHTML = "ciao sono l'elemento html di Guendalina";


      const linkElem = document.createElement('link');
      linkElem.setAttribute('rel', 'stylesheet');
      linkElem.setAttribute('href', 'style.css');
      

      shadow.appendChild(header);
      shadow.appendChild(paragrafo);
      shadow.appendChild(linkElem);
    }
  }
  

window.customElements.define('guenda-lina', Guenda);

//extens HTMLElement

