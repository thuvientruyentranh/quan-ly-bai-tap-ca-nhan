
import { createNavbar } from "./navbar.js";

export function createHeader(user) {

    // Tạo phần header
    const header = document.createElement("header");
    header.className = "site-header";

    // Tạo logo
    const logo = document.createElement("div");
    logo.className = "logo";
    logo.textContent = "EduTask";

    // Tạo thanh điều hướng
    const navbar = createNavbar(user);

    // Ghép các thành phần
    header.appendChild(logo);
    header.appendChild(navbar);

    return header;
}
