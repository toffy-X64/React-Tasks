import { useState } from 'react';
import './UserProfileForm.css';

function UserProfileForm({countries}) {
    const defaultCountry = countries[0] || 'Ukraine';

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState(defaultCountry)

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleClear = () => {
        setName('');
        setAge('');
        setCountry(defaultCountry);
    };

    return (
        <div className='user-profile-form-wrapper'>
            <h2 className='user-profile-form-title'>User Profile Form</h2>

            <form className="user-profile-form" onSubmit={handleSubmit}>
                <span>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" id='name' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
                    <p>Name: {name}</p>
                </span>

                <span>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" placeholder='Age' value={age} onChange={e => setAge(e.target.value)} />
                    <p>Age: {age}</p>
                </span>

                <span>
                    <label htmlFor="country">Country</label>
                    <select id="contry" value={country} onChange={e => setCountry(e.target.value)}>
                        {countries.map( (e, index) => (
                            <option value={e} key={index}>{e}</option>
                        ))}
                    </select>
                    <p>Country: {country}</p>
                </span>

                <button className='user-profile-form-clear-btn' onClick={handleClear}>Clear form</button>

                <div className="summary-wrapper">
                    <h4 className="summary-title">Summary</h4>
                    <p className="summary-content">Hello, <strong>{name}</strong> from <strong>{country}</strong>! You are <strong>{age}</strong> years old.</p>
                </div>
            </form>
        </div>
    );
}

export default UserProfileForm;