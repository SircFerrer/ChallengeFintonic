import React from "react";
import "../stylesheets/Question.scss"
function Question(props) {
  const { category, type, difficulty, question } = props.question;

  return (
    <>
      <td className="content">1</td>
      <td className="content">{category}</td>
      <td className="content">{type}</td>
      <td className="content">{difficulty}</td>
      <td className="content">{question}</td>
      <td className="content__color">Cristina</td>
    </>
  );
}

export default Question;
