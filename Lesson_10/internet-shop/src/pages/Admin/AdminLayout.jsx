import { Outlet } from "react-router-dom";
import AdminNavBar from "@components/Admin/AdminNavBar/AdminNavBar";

const AdminLayout = () => {
    return (
        <main className="page">
            <div className="container">
                <h1>Панель управління</h1>
                <AdminNavBar />
                <Outlet />
            </div>
        </main>
    );
}

export default AdminLayout;