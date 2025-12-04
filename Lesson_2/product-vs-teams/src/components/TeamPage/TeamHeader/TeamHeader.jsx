import './TeamHeader.css';

function TeamHeader({title = 'Team-header'}) {
    return (
        <div className='team-header'>
            <h1>{title}</h1>
        </div>
    );
}

export default TeamHeader;