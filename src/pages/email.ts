import { Router } from "@vaadin/router";
import { state } from "../state";

class EmailPage extends HTMLElement {
   shadow: ShadowRoot;
   constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
   }

   static get styles() {
      return `
         :host {
            color: white;
         } 
         .cont {
            background-color: #313131;
            max-width: 500px;
            margin: 0 auto;
            border-radius: 4px;
            padding: 41px 20px 55px;
         }
         .input-email {
            background-color: #4f4f4e;
            border-radius: 4px;
            color: white;
            border-top: none;
            border-right: none;
            border-left: none;
            border-image: initial;
            padding: 10px;
            margin: 30px 50px;
            font-size: 18px;
            line-height: 1.4;
         }
         .button-email {
            cursor: pointer;
            background-color: #4083ff;
            padding: 12px 30px;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            font-weight: bold;
            margin: 0 auto;
         }
         .button-email:hover {
            background-color: #222;
         }
         .form-cont {
            display: grid;
         }`;
   }

   connectedCallback() {
      this.render();
   }

   render() {
      this.shadow.innerHTML = `
      <style>${EmailPage.styles}</style>
      <div class="cont">
         <title-comp>Ingresar</title-comp>
         <text-comp>Para continuar ingrese su email</text-comp>
         <form class="form-cont">
            <input class="input-email" type="email" placeholder="Email" />
            <button class="button-email">Ingresar</button>
         </form>
      </div>
      `;

      this.shadow.querySelector("form")?.addEventListener("submit", async (e) => {
         e.preventDefault();
         const emailValue = this.shadow.querySelector("input")?.value;
         if (!emailValue) {
            return alert("Ingrese un email");
         }
         if (emailValue) {
            const res = await state.findOrCreateUser(emailValue);

            if (res) {
               alert("Correo enviado a su correo");
               Router.go("/login");
               console.log(res);
            } else {
               alert("Error al enviar el correo");
            }
         }
      });
   }
}
customElements.define("email-page", EmailPage);
