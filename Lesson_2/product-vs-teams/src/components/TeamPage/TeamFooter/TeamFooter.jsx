function TeamFooter({contacts = 'Default-contacts'}) {
    return (
        <div className='team-footer'>
            <h3>&copy; {contacts}</h3>
        </div>
    );
}

export default TeamFooter;