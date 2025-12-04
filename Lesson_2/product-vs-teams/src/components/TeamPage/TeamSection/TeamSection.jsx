import './TeamSection.css';

import TeamHeader from '../TeamHeader/TeamHeader';
import TeamFooter from '../TeamFooter/TeamFooter';
import TeamList from '../TeamList/TeamList';

import { teams } from '../../../mocks/dataArrays';

function TeamPage() {
    const teamInfo = {
        name: 'Google IT Team',
        contacts: 't.me/toffyX64'
    };

    return (
        <section className="team-section">
            <div className="container team__container">
                <TeamHeader title = {teamInfo.name} />
                <TeamList teams = {teams} />
                <TeamFooter contacts = {teamInfo.contacts} />
            </div>
        </section>
    );
}

export default TeamPage;