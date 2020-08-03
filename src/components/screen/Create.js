import React, {useState}from 'react';
import * as data from '../../data.json';
import {useHistory} from 'react-router-dom';

function Create() {
    const [company, SetCompany] = useState('');
    const [logo, SetLogo] = useState('');
    const [position, SetPosition] = useState('')
    const [role, SetRole] = useState('')
    const [level, SetLevel] = useState('')
    const [contract, SetContract] = useState('')
    const [location, SetLocation] = useState('')
    const [languages, SetLanguages] = useState('')
    const [tools, SetTools] = useState('')
    let history = useHistory()

    let newItem = {}

    const handleSubmit =() =>{
       
        newItem.id = data.default.length + 1;
        newItem.company = company;
        newItem.logo = logo;
        newItem.new = true;
        newItem.feature = false;
        newItem.position = position;
        newItem.role = role;
        newItem.postedAt = 'today';
        newItem.level = level;
        newItem.contract = contract;
        newItem.location = location;
        newItem.languages = languages.split(',');
        newItem.tools = tools.split(',');
        
        data.default.push(newItem);

        history.push('/dashboard');
    }
    return (
        <div>
            <label>Company:</label>
            <input type='text' value={company} onChange={(e=>SetCompany(e.target.value))}/>
            <label>Logo</label>
            <input type='file'value={logo}  onChange={(e=>SetLogo(e.target.value))}/>
            <label>Position:</label>
            <input type='text'value={position} onChange={(e=>SetPosition(e.target.value))}/>       
            <label>Role:</label>
            <input type='text' value={role} onChange={(e=>SetRole(e.target.value))}/>
            <label>Level:</label>
            <input type='text'value={level} onChange={(e=>SetLevel(e.target.value))}/>
            <label>Contract:</label>
            <input type='text'value={contract} onChange={(e=>SetContract(e.target.value))}/>
            <label>Location:</label>
            <input type='text' value={location} onChange={(e=>SetLocation(e.target.value))}/>
            <label>Languages:</label>
            <input type='text' value={languages} onChange={(e=>SetLanguages(e.target.value))}/>
            <label>Tools:</label>
            <input type='text'value={tools} onChange={(e=>SetTools(e.target.value))}/>
            <button onClick={handleSubmit}>Submit</button>   
        </div>
    )
}

export default Create