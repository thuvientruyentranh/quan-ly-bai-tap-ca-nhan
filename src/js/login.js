
import {
    loginUser,
    getCurrentUser
} from "../services/authService.js";

// Lấy các phần tử HTML
const form = document.getElementById("login-form");
const message = document.getElementById("login-message");
const button = document.getElementById("login-btn");

// Xử lý đăng nhập
form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {

        button.disabled = true;
        button.textContent = "Đang kiểm tra...";

        // BƯỚC 1: Kiểm tra Session hiện tại
        let currentUser = null;

        try {
            currentUser = await getCurrentUser();
        } catch (error) {

            // 401 nghĩa là chưa có phiên đăng nhập
            if (error.code !== 401) {
                throw error;
            }
        }

        // BƯỚC 2: Nếu đã đăng nhập
        if (currentUser) {

            if (currentUser.email === email) {

                message.style.color = "green";
                message.textContent = "Bạn đã đăng nhập tài khoản này!";

                setTimeout(() => {
                    window.location.href = "home.html";
                }, 1000);

            } else {

                message.style.color = "red";
                message.textContent =
                    "Bạn đang đăng nhập bằng tài khoản " +
                    currentUser.email +
                    ". Vui lòng đăng xuất trước khi đổi tài khoản.";
            }

            return;
        }

        // BƯỚC 3: Nếu chưa đăng nhập thì tạo Session mới
        button.textContent = "Đang đăng nhập...";

        const session = await loginUser(email, password);

        console.log("Đăng nhập thành công:", session);

        message.style.color = "green";
        message.textContent = "Đăng nhập thành công!";

        // BƯỚC 4: Chuyển về trang chủ
        setTimeout(() => {
            window.location.href = "home.html";
        }, 1000);

    } catch (error) {

        console.error("Mã lỗi:", error.code);
        console.error("Loại lỗi:", error.type);
        console.error("Nội dung lỗi:", error.message);

        message.style.color = "red";

        if (error.code === 401) {
            message.textContent =
                "Email hoặc mật khẩu không chính xác!";
        } else {
            message.textContent =
                error.message || "Đăng nhập thất bại!";
        }

    } finally {

        button.disabled = false;
        button.textContent = "Đăng Nhập";
    }
});
