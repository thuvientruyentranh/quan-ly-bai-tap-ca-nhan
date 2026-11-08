
import { account } from "./services/appwrite.js";

// Kiểm tra kết nối Appwrite
async function checkAppwriteConnection() {
    try {
        // Kiểm tra thông tin tài khoản hiện tại
        const user = await account.get();

        console.log("Kết nối Appwrite thành công!");
        console.log("Thông tin người dùng:", user);

    } catch (error) {

        if (error.code === 401) {
            console.log("Appwrite đã phản hồi!");
            console.log("Hiện tại chưa có tài khoản đăng nhập.");
        } else {
            console.error("Lỗi kết nối Appwrite:", error);
        }
    }
}

// Chạy kiểm tra
checkAppwriteConnection();
