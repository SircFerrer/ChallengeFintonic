import React from 'react';

function Question(props){
    
    const {category, type, difficulty, question}= props.question

    return (
        <>
           <td>{category}</td>
           <td>{type}</td>
           <td>{difficulty}</td>
           <td>{question}</td>
            
        </>
    )
}

export default Question;