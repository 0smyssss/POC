import { Controller } from "https://unpkg.com/@hotwired/stimulus"

export default class extends Controller {
  connect() {
    alert("🔥 XSS from external Stimulus Controller");
    document.body.style.backgroundColor = "red";
  }
}
