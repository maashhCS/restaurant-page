import { loadHomePage } from "./homepage";
import { loadTabs } from "./tabs";

window.addEventListener('load', ()=> {
    loadTabs();
    loadHomePage();
})