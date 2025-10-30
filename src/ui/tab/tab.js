import "./tab.css";

class Tab {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll(".tab");
    this.contents = container.querySelectorAll(".content");
  }

  init() {
    this.tabs.forEach((tab) =>
      tab.addEventListener("click", (e) => {
        this.toggleTab(e);
        this.toggleContents(e);
      })
    );
  }

  toggleTab(e) {
    this.tabs.forEach((tab) => tab.classList.remove("active"));
    e.currentTarget.classList.add("active");
  }

  toggleContents(e) {
    this.contents.forEach((content) => content.classList.remove("active"));

    const target = e.currentTarget.getAttribute("data-target");
    const targetEl = this.container.querySelector(`#${target}`);
    if (targetEl) targetEl.classList.add("active");
  }
}

export default Tab;
