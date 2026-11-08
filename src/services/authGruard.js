
import { getCurrentUser } from "../services/authService.js";

// Bảo vệ trang yêu cầu đăng nhập
export async function requireAuth() {

    try {

        // Lấy thông tin tài khoản từ Appwrite
        const user = await getCurrentUser();

        // Nếu có tài khoản hợp lệ, trả về thông tin
        return user;

    } catch (error) {

        console.error("Kiểm tra đăng nhập thất bại:", error);

        // Chuyển người dùng chưa đăng nhập về trang login
        window.location.replace("./login.html");

        return null;
    }
}
