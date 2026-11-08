
import { ID } from "appwrite";
import { account } from "./appwrite.js";

// ĐĂNG KÝ TÀI KHOẢN
export async function registerUser(fullname, email, password) {
    return await account.create({
        userId: ID.unique(),
        email: email,
        password: password,
        name: fullname
    });
}

// ĐĂNG NHẬP
export async function loginUser(email, password) {
    return await account.createEmailPasswordSession({
        email: email,
        password: password
    });
}

// LẤY THÔNG TIN NGƯỜI DÙNG
export async function getCurrentUser() {
    return await account.get();
}

// ĐĂNG XUẤT
export async function logoutUser() {
    return await account.deleteSession({
        sessionId: "current"
    });
}
