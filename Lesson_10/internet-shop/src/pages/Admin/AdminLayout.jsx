import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <main className="page">
            <div className="container">
                <h1>Панель управління</h1>
                <Outlet />
            </div>
        </main>
    );
}

export default AdminLayout;