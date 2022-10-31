import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddGoals.module.css";

function AddGoals(props) {
  const [newGoal, setnewGoal] = useState("");

  function addGoalHandler(event) {
    event.preventDefault();
    if (newGoal.trim().length === 0) {
      return;
    }
    props.onGoalAdd(newGoal);
    setnewGoal("");
  }
  function onGoalChangeHandler(event) {
    setnewGoal(event.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addGoalHandler}>
        <label htmlFor="newgoal">New Goal</label>
        <input
          id="newgoal"
          type="text"
          value={newGoal}
          onChange={onGoalChangeHandler}
        ></input>
        <Button type="submit">Add Goal</Button>
      </form>
    </Card>
  );
}

export default AddGoals;
