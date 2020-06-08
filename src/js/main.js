import NavigationMenu from "./Navigation";
import TabPanel from "./TabPanel";

window.onload = function () {
    new NavigationMenu();
    new TabPanel(document.querySelector('.tab-panel'));
}
