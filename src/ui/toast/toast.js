import "./toast.css";

class Toast {
  constructor() {
    this.element = document.createElement("div");
  }
  init() {
    this.element.classList.add("toast");
    document.querySelector("body").appendChild(this.element);
  }
  showToast(message) {
    this.element.textContent = message;
    this.element.classList.add("active");
    setTimeout(() => {
      this.element.classList.remove("active");
    }, 3000);
  }
}

export { Toast as default };
