import './TeamList.css';

import Team from '../Team/Team';

function TeamList({teams}) {
    return (
        <div className="team-list">
            {teams.map( (e) => (
                <Team 
                    key = {e.id}
                    name = {e.name}
                    description = {e.description}
                    color = {e.color}
                    members = {e.members}
                />
            ))}
        </div>
    );
}

export default TeamList;