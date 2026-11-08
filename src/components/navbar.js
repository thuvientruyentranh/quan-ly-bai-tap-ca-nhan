
export function createNavbar(user) {

    // Tạo thẻ nav
    const nav = document.createElement("nav");
    nav.className = "navbar-nav";

    // Hàm tạo liên kết
    function createLink(text, href, active = false) {
        const link = document.createElement("a");

        link.textContent = text;
        link.href = href;

        if (active) {
            link.classList.add("active");
        }

        return link;
    }

    // Trang chủ
    nav.appendChild(
        createLink("Trang chủ", "home.html", true)
    );

    // Nếu đã đăng nhập
    if (user) {

        const username = document.createElement("span");
        username.className = "user-name";
        username.textContent = "Xin chào, " + (user.name || user.email);

        nav.appendChild(username);

        // Nút đăng xuất
        const logoutButton = document.createElement("button");
        logoutButton.id = "logout-btn";
        logoutButton.className = "btn btn-primary";
        logoutButton.textContent = "Đăng xuất";

        nav.appendChild(logoutButton);

    } else {

        // Nếu chưa đăng nhập
        nav.appendChild(
            createLink("Đăng nhập", "login.html")
        );

        nav.appendChild(
            createLink("Đăng ký", "register.html")
        );
    }

    return nav;
}
