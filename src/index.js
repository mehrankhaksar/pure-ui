import "./index.css";

import Tooltip from "./ui/tooltip/tooltip";
import Accordion from "./ui/accordion/accordion";
import Tab from "./ui/tab/tab";

const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

const accordions = document.querySelectorAll(".accordion");
accordions.forEach((accordion) => {
  const instance = new Accordion(accordion);
  instance.init();
});

const tabs = new Tab(document.querySelector(".tabs"));
tabs.init();
