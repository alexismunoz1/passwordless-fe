import "./style.css";
import "./components/MainHeader";
import "./components/MainTitle";
import "./components/MainText";
import "./pages/email";
import "./pages/login";
import "./pages/home";
import { initRouter } from "./router";

function main() {
   const app = document.querySelector("#app");
   initRouter(app);
}
main();
