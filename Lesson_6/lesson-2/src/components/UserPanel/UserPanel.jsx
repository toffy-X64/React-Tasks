import { useState } from "react";
import  "./UserPanel.scss";
 
const UserPanel = ({ currentUser }) => {
    const [feedback, setFeedback] = useState("");
 
    const handleSend = () => {
        if (!feedback.trim()) {
            alert("Будь ласка, введіть відгук.");
            return;
        }
 
        alert("Ваш фідбек:\n\n" + feedback);
        setFeedback("");
    };
 
    return (
        <div className="userPanel">
            <h2>Профіль користувача</h2>
 
            <p><strong>Email:</strong> {currentUser.email}</p>
            <p><strong>Роль:</strong> {currentUser.role}</p>
 
            <div className="feedbackBox">
                <h3>Залишити фідбек</h3>
 
                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Напишіть ваш відгук..."
                />
 
                <button onClick={handleSend}>Send feedback</button>
            </div>
        </div>
    );
};
 
export default UserPanel;