import React from 'react';
import "./DescriptionInput.css";

const DescriptionInput = ({ description, setDescription }) => {
    let desc = description;
    return (
        <div>
            <label>Déscription
                <input className='DescriptionInput'
                    value={description}
                    onChange={(event) => { setDescription(event.target.value) }}
                ></input>
            </label>
        </div>
    );
};

export default DescriptionInput;