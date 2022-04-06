import { Router } from "@vaadin/router";

export function initRouter(rootEl: any) {
   const router = new Router(rootEl);
   router.setRoutes([
      { path: "/", component: "email-page" },
      { path: "/home", component: "home-page" },
      { path: "/login", component: "login-page" },
   ]);
}
