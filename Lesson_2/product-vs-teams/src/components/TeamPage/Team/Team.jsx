import './Team.css';

import Member from '../Member/Member';

function Team({name, description, color, members}) {
    return (
        <div className="team-wrapper" style={{ borderLeft: `6px solid ${color}` }}>
            <h4 className="team-title">{name}</h4>
            <div className="team-description">{description}</div>

            <div className="team-members">
                {members.map( (e) => (
                    <Member 
                        key = {e.id}
                        name = {e.name}
                        role = {e.role}
                        avatar = {e.avatar}
                        skills = {e.skills}
                    />
                ))}
            </div>
        </div>
    );
}

export default Team;