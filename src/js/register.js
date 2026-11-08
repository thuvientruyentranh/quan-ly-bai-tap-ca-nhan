
import { registerUser } from "../services/authService.js";

// Lấy các phần tử HTML
const form = document.getElementById("register-form");
const message = document.getElementById("register-message");
const button = document.getElementById("register-btn");

// Xử lý khi người dùng nhấn Đăng ký
form.addEventListener("submit", async function(event) {

    event.preventDefault();

    // Lấy dữ liệu từ form
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Kiểm tra dữ liệu
    if (fullname === "") {
        message.textContent = "Vui lòng nhập họ và tên!";
        return;
    }

    if (password.length < 8) {
        message.textContent = "Mật khẩu phải có ít nhất 8 ký tự!";
        return;
    }

    try {
        // Khóa nút trong lúc xử lý
        button.disabled = true;
        button.textContent = "Đang đăng ký...";

        // Gọi Appwrite tạo tài khoản
        const user = await registerUser(
            fullname,
            email,
            password
        );

        console.log("Đăng ký thành công:", user);

        message.textContent = "Đăng ký thành công! Đang chuyển đến trang đăng nhập...";

        message.style.color = "green";

        form.reset();

        // Chuyển sang trang đăng nhập
        setTimeout(function() {
            window.location.href = "login.html";
        }, 1500);

    } catch (error) {

        console.error("Lỗi đăng ký:", error);

        message.style.color = "red";

        if (error.code === 409) {
            message.textContent = "Email này đã được sử dụng!";
        } else {
            message.textContent = error.message || "Đăng ký thất bại!";
        }

    } finally {
        button.disabled = false;
        button.textContent = "Đăng Ký";
    }

});
