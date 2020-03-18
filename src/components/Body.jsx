import React from 'react';
import "../stylesheets/Body.scss"
import QuestionTable from "./QuestionTable"



function Body(props){
    console.log(props);
    

    return (
        <div className="body">
            <h1 className="body__title">browse questions</h1>
            <QuestionTable questions={props}/>
            
        </div>
    )
}

export default Body;
