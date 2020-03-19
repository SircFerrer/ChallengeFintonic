import React from "react";
import Question from "./Question";
import "../stylesheets/QuestionTable.scss"

function QuestionTable(props) {
  console.log(props.questions);

  return (
    <table className="table">
      <tbody>

      <tr className="table__title">
        <th className="table__title__item">ID</th>
        <th className="table__title__item">Category</th>
        <th className="table__title__item">Type</th>
        <th className="table__title__item">Difficulty</th>
        <th className="table__title__item">Question/Statement</th>
        <th className="table__title__item">Created By</th>
      </tr>

      {props.questions.questions.map(question => {
        return (
          <tr>
            <Question question={question} />
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}

export default QuestionTable;
