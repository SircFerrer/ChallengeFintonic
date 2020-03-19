import React from 'react';
import "../stylesheets/Body.scss"
import QuestionTable from "./QuestionTable"
import Pages from './Pages';



function Body(props){
    
    

    return (
        <div className="body">
            <h1 className="body__title">browse questions</h1>
            <QuestionTable questions={props}/>
            <Pages/>
            
        </div>
    )
}

export default Body;
