import "./AdminPanel.scss";

const AdminPanel = ({ users, toggleBan }) => {
    return (
        <div className="panel">
            <h2>Адмін-панель</h2>
 
            <div className="grid">
                {/* Заголовки колонок */}
                <div className="headerRow">
                    <div className="headerItem">Email</div>
                    <div className="headerItem">Роль</div>
                    <div className="headerItem">Статус</div>
                    <div className="headerItem">Дія</div>
                </div>
 
                {/* Рендер рядків */}
                {users.map((u) => (
                    <div className="userRow" key={u.id}>
                        <div className="cell">{u.email}</div>
                        <div className="cell">{u.role}</div>
 
                        <div
                            className={`cell ${u.isBlocked ? "blocked" : "active"}`}
                        >
                            {u.isBlocked ? "Заблокований" : "Активний"}
                        </div>
 
                        <div className="cell">
                            <button
                                className="actionBtn"
                                onClick={() => toggleBan(u.id)}
                                disabled={u.role === "admin"}
                            >
                                {u.isBlocked ? "Unlock" : "Lock"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
 
export default AdminPanel;