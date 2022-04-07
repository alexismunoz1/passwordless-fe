class Header extends HTMLElement {
   shadow: ShadowRoot;
   constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
   }

   static get styles() {
      return `
         * {
            height: 80px;
            background-color: #f7c74b;
         }`;
   }

   connectedCallback() {
      this.render();
   }

   render() {
      this.shadow.innerHTML = `
       <style>${Header.styles}</style>
       <div></div>`;
   }
}
customElements.define("header-comp", Header);
