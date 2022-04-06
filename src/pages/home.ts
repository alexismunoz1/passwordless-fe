class HomePage extends HTMLElement {
   shadow: ShadowRoot;
   constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
   }

   static get styles() {
      return `
           * {
              color: blue;
           }`;
   }

   connectedCallback() {
      this.render();
   }

   render() {
      this.shadow.innerHTML = `
        <style>${HomePage.styles}</style>
        <h1>Home</h1>
        <p>Welcome to the home page!</p>`;
   }
}
customElements.define("home-page", HomePage);
