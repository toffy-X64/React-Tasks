import './Member.css';

function Member({name, role, avatar, skills}) {
    return (
        <div className="team-member">
            <div className="team-member-avatar">
                {avatar}
            </div>
            <div className="team-member-name">{name}</div>
            <div className="team-member-role">{role}</div>

            <div className="team-member-skills">
                {skills.map( (skill, index) => (
                    <div className="team-member-skill" key = {index}>
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Member;