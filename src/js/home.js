
import { logoutUser } from "../services/authService.js";
import { createHeader } from "../components/header.js";
import { requireAuth } from "../services/authGruard.js";

// Khởi tạo trang chủ
async function initHome() {

    // BƯỚC 1: Kiểm tra đăng nhập
    const user = await requireAuth();

    // Nếu chưa đăng nhập thì dừng chương trình
    if (!user) {
        return;
    }

    console.log("Người dùng hiện tại:", user);

    // BƯỚC 2: Hiển thị thông tin tài khoản
    const headerContainer =
        document.getElementById("header-container");

    headerContainer.replaceChildren(createHeader(user));

    // BƯỚC 3: Xử lý đăng xuất
    const logoutButton =
        document.getElementById("logout-btn");

    if (logoutButton) {

        logoutButton.addEventListener("click", async function() {

            try {

                logoutButton.disabled = true;
                logoutButton.textContent = "Đang đăng xuất...";

                // Hủy Session trên Appwrite
                await logoutUser();

                alert("Đăng xuất thành công!");

                // Quay về trang index
                window.location.replace("/index.html");

            } catch (error) {

                console.error("Lỗi đăng xuất:", error);

                alert("Đăng xuất thất bại: " + error.message);

                logoutButton.disabled = false;
                logoutButton.textContent = "Đăng xuất";
            }
        });
    }
}

// Chạy chương trình
initHome();
