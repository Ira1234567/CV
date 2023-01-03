import React, {useState} from "react"

const SkillsBlock = (props) => {
    const [chosenValue, setChosenValue] = useState('show');
    const skillsClickHandler = () => {
        if(chosenValue === 'show') {
            setChosenValue('hide');
        } else {
            setChosenValue('show');
        } 
        
    }
    if(chosenValue === 'show') {
        return (
            <div>
                <h2>{props.type}</h2>
                <ul>
                    {props.skillsList.map( el =>
                        <li key={el}>{el}</li>
                    )}
                </ul>
                <button onClick={skillsClickHandler}><span className="material-symbols-outlined">expand_less</span></button>
            </div>
        )
    } else {
        return (
            <div>
                <h2>{props.type}</h2>
                <button onClick={skillsClickHandler}><span className="material-symbols-outlined">expand_more</span></button>
            </div>
        ) 
    }
    }

export default SkillsBlock