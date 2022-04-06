import "./style.css";
import "./pages/email";
import "./pages/login";
import "./pages/home";
import { initRouter } from "./router";

const app = document.querySelector("#app");

function main() {
   initRouter(app);
}
main();
