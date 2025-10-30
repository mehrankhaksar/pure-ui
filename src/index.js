import "./index.css";

import Tooltip from "./ui/tooltip/tooltip";
import Accordion from "./ui/accordion/accordion";

const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

const accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion) => {
  const instance = new Accordion(accordion);
  instance.init();
});
