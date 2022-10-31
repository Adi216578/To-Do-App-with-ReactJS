import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./GoalList.module.css";

function GoalList(props) {
  function onDeletegoal(index) {
    props.onDelete(index);
  }
  return (
    <Card className={classes.goals}>
      <ul>
        {props.goals.map((goal, index) => (
          <div key={goal.id}>
            <li>{goal.title}</li>
            <Button onClick={() => onDeletegoal(index)}>Delete</Button>
          </div>
        ))}
      </ul>
    </Card>
  );
}

export default GoalList;
