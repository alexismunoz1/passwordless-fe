class LoginPage extends HTMLElement {
   shadow: ShadowRoot;
   constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
   }

   static get styles() {
      return `
            :host {
               color: blue;
            }`;
   }

   connectedCallback() {
      this.render();
   }

   render() {
      this.shadow.innerHTML = `
        <style>${LoginPage.styles}</style>
        <h1>Login</h1>`;
   }
}
customElements.define("login-page", LoginPage);
