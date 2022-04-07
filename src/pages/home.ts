class HomePage extends HTMLElement {
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
            max-width: 536px;
            margin: 0 auto 40px auto;
            border-radius: 4px;
            padding: 30px 30px 55px;
         }
         .perfil-image {
            border-radius: 50%;
            border: 2px solid #4083ff;
            height: 100px;
            margin-right: 15px;
         }
         .cont-misredes {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #444;
            padding: 15px;
            border-radius: 4px;
            margin-top: 30px;
         }
         @media (max-width: 536px) {
            .cont-misredes {
               flex-direction: column;
            }
            .cont-perfil {
               margin-bottom: 20px;
            }   
         }
         .cont-perfil {
            display: flex;
            flex-direction: row;
         }
         .cont-icons {

         }
         .icons {
            height: 60px;
         }
         .nombre {
            text-align: left;
            font-size: 24px;
            font-weight: bold;
            margin: auto;
         }
         .dev {
            font-size: 14px;
            font-weight: bold;
            color: #4083ff;
         }
         `;
   }

   connectedCallback() {
      this.render();
   }

   render() {
      this.shadow.innerHTML = `
         <style>${HomePage.styles}</style>
         <div class="cont">
            <title-comp>Bienvenidx!</title-comp>
            <img src="https://qph.fs.quoracdn.net/main-qimg-5a7c674b60f10fe1a442954af7dd0de2-lq" style="width: 100%; border-radius: 4px;
            border: 2px solid #333;">
            <div class="cont-misredes">
               <div class="cont-perfil">
                  <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBe77VXluSDQ/profile-displayphoto-shrink_200_200/0/1648574516277?e=1654732800&v=beta&t=ETClUSXg_vo33DRhjdEc5yOPA2NRAzAWH3AmIzdVLsI" 
                  class="perfil-image">
                  <p class="nombre">Muñoz Alexis<br /><span class="dev">Fullstack Dev</span></p>
               </div>
               <div class="cont-icons">
                  <a href="https://github.com/alexismunoz1" target="”_blank”">
                     <img class="icons" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" style="margin-right: 15px; cursor: pointer;">
                  </a>
                  <a href="https://www.linkedin.com/in/alexis-munoz-fullstack-dev/" target="”_blank”">
                     <img class="icons" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" style="cursor: pointer;">
                  </a>
               </div>
            </div>
         </div>
        `;
   }
}
customElements.define("home-page", HomePage);
