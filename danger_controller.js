import { Controller } from "https://unpkg.com/@hotwired/stimulus@3.2.2/dist/stimulus.js"

export default class extends Controller {
  connect() {
    alert("🔥 XSS from external Stimulus Controller");
    document.body.style.backgroundColor = "red";
  }
}
