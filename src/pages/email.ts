import { state } from "../state";

class EmailPage extends HTMLElement {
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
      <style>${EmailPage.styles}</style>
      <h1>Ingresar</h1>
      <p>Para continuar ingrese su email</p>
      <form class>
         <input class="input-mail" type="email" placeholder="Email" />
         <button class="button-mail">Ingresar</button>
      </form>
      `;

      this.shadow.querySelector("form")?.addEventListener("submit", (e) => {
         e.preventDefault();
         const emailValue = this.shadow.querySelector("input")?.value;
         if (emailValue) {
            state.findOrCreateUser(emailValue).then((user) => {
               console.log(user);
            });
            state.testApi().then((data) => {
               console.log(data);
            });
         }
      });
   }
}
customElements.define("email-page", EmailPage);
