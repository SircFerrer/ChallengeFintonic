import React from 'react';
import Question from './Question';

function QuestionTable(props){
    console.log(props.questions);
    

    return (
        <table className="cards">
            <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Type</th>
                <th>Difficulty</th>
                <th>Question/Statement</th>


            </tr>
          {props.questions.questions.map(question => {
            return (
              <tr className="cards__cardContainer">
                <Question question={question} />
              </tr>
            );
          })}
        </table>
      );
}

export default QuestionTable;
