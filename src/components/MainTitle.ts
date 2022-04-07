class MainTitle extends HTMLElement {
   shadow: ShadowRoot;
   constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
   }

   static get styles() {
      return `
         :host {
            color: #4083ff;
            font-size: 22px;
            font-weight: bold;
            line-height: 1.25;
         }`;
   }

   connectedCallback() {
      this.render();
   }

   render() {
      this.shadow.innerHTML = `
      <style>${MainTitle.styles}</style>
      <h1>${this.textContent}</h1>`;
   }
}
customElements.define("title-comp", MainTitle);
