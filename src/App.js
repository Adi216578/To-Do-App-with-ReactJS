import React, { useState } from "react";
import AddGoals from "./components/Goals/AddGoals";
import GoalList from "./components/Goals/GoalList";

function App() {
  const [goalList, setgoalList] = useState([]);
  const [iszero, setiszero] = useState(true);

  function AddGoalHandler(title) {
    setiszero(false);
    setgoalList((prevList) => {
      return [{ title: title, id: Math.random().toString() }, ...prevList];
    });
  }
  function deleteGoalHandler(index) {
    if (goalList.length === 1) {
      setiszero(true);
    }
    var list = goalList;
    list.splice(index, 1);

    setgoalList([...list]);
  }
  return (
    <>
      <AddGoals onGoalAdd={AddGoalHandler} />

      {!iszero && <GoalList goals={goalList} onDelete={deleteGoalHandler} />}
    </>
  );
}

export default App;
