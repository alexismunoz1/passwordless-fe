class MainText extends HTMLElement {
   shadow: ShadowRoot;
   constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
   }

   static get styles() {
      return `
        * {
            font-size: 16px;
            line-height: 1.4;
            font-weight: normal;
        }`;
   }

   connectedCallback() {
      this.render();
   }

   render() {
      this.shadow.innerHTML = `
         <style>${MainText.styles}</style>
         <p>${this.textContent}</p>`;
   }
}
customElements.define("text-comp", MainText);
