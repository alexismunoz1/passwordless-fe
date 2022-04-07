import { state } from "../state";
import { Router } from "@vaadin/router";
class LoginPage extends HTMLElement {
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
         .input-code {
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
            text-align: center;
            letter-spacing: 5px;
            line-height: 1.4;
         }
         .button-code {
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
         .button-code:hover {
            background-color: #222;
         }        
         .form-cont {
            display: grid;
         }
         .text-mail {
            color: #7db988;
            font-weight: bold;
         }
         .corregir-email {
            color: #4083ff;
            font-weight: bold;
            font-size: 16px;
            margin: 0 auto;
            margin-top: 30px;
            cursor: pointer;
         }`;
   }

   connectedCallback() {
      this.render();
   }

   render() {
      const currenEmail = state.getState();

      this.shadow.innerHTML = `
         <style>${LoginPage.styles}</style>
            <div class="cont">
            <title-comp>Ingresar</title-comp>
            <p>Te enviamos tu codigo a <span class="text-mail">${currenEmail.email}</span></p>
            <form class="form-cont">
                <input class="input-code" type="text" placeholder="Codigo" />
                <button class="button-code">Continuar</button>
            </form>
            <p class="corregir-email">Corregir email</p>
         </div>`;

      this.shadow.querySelector("form")?.addEventListener("submit", async (e) => {
         e.preventDefault();
         const codeValue = this.shadow.querySelector("input")?.value;

         if (!codeValue) {
            return alert("Ingrese un codigo");
         }

         if (codeValue) {
            const res = await state.login(currenEmail.email, codeValue);
            if (res.token) {
               Router.go("/home");
            } else {
               alert("Codigo incorrecto");
            }
         }
      });

      this.shadow.querySelector(".corregir-email")?.addEventListener("click", () => {
         state.setState({ email: "" });
         Router.go("/");
      });
   }
}
customElements.define("login-page", LoginPage);
