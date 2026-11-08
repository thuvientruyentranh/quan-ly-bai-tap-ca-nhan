
import { Client, Account } from "appwrite";

// Khởi tạo kết nối Appwrite
const client = new Client();

// Cấu hình Endpoint và Project ID
client
    .setEndpoint("https://sgp.cloud.appwrite.io/v1")
    .setProject("6ae9b389001f48e7b2f2");

// Khởi tạo dịch vụ quản lý tài khoản
const account = new Account(client);

// Xuất các đối tượng để sử dụng ở những file khác
export { client, account };
