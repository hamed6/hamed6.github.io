import React, { useState } from "react";
import "../index.css";

const ButtonFeedback = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const StatisticMessage = (props) => {
  const { good, bad, neutral } = props;
  if ((good === 0) & (bad === 0) & (neutral === 0)) {
    return <h2>No feedback Yet!</h2>;
  } else {
    return (
      <div>
        <label>Neutral: {neutral}</label>
        <br></br>
        <label>Bad: {bad}</label>
        <br></br>
        <label>Good: {good}</label>
      </div>
    );
  }
};

const Feedback = () => {
  const [good, setStateGood] = useState(0);
  const [bad, setStateBad] = useState(0);
  const [neutral, setStateNeutral] = useState(0);

  return (
    <div>
      <h2> Give feedback</h2>
      <ButtonFeedback onClick={() => setStateGood(good + 1)} text="Good" />
      <ButtonFeedback onClick={() => setStateBad(bad + 1)} text="Bad" />
      <ButtonFeedback
        onClick={() => setStateNeutral(neutral + 1)}
        text="Neutral"
      />

      <h2> Statistic</h2>
      <StatisticMessage bad={bad} good={good} neutral={neutral} />
    </div>
  );
};

export default Feedback;
