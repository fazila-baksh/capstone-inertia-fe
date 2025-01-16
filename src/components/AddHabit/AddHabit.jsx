import { useState, useEffect } from "react";
import axios from "axios";
import "./AddHabit.scss";

function AddHabit({ habitData, onSubmit }) {
  const [habitName, setHabitName] = useState(habitData?.habit_name || "");
  const [description, setDescription] = useState(habitData?.description || "");
  const [goal, setGoal] = useState(habitData?.goal_frequency || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (habitData) {
      setHabitName(habitData.habit_name);
      setDescription(habitData.description);
      setGoal(habitData.goal_frequency);
    }
  }, [habitData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const newHabit = {
      habit_name: habitName,
      description: description,
      goal_frequency: goal,
    };

    try {
      await onSubmit(newHabit);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("An error occurred while creating the habit.");
      setLoading(false);
    }
  };

  return (
    <section className="add-habit">
      <h2 className="add-habit__title">
        {habitData ? "Edit Habit" : "Add a Habit"}
      </h2>
      <form className="add-habit__form" onSubmit={handleSubmit}>
        <label className="add-habit__label">Name:</label>
        <input
          className="add-habit__input"
          type="text"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
        />

        <label className="add-habit__label">Description:</label>
        <input
          className="add-habit__input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className="add-habit__label">Goal:</label>
        <select
          className="add-habit__input"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        >
          <option className="add-habit__option" value="">
            Select Goal
          </option>
          <option className="add-habit__option" value="1">
            1 time per week
          </option>
          <option className="add-habit__option" value="2">
            2 times per week
          </option>
          <option className="add-habit__option" value="3">
            3 times per week
          </option>
          <option className="add-habit__option" value="4">
            4 times per week
          </option>
          <option className="add-habit__option" value="5">
            5 times per week
          </option>
          <option className="add-habit__option" value="6">
            6 times per week
          </option>
          <option className="add-habit__option" value="7">
            7 times per week
          </option>
        </select>

        {error && <div className="add-habit__error">{error}</div>}

        <button className="add-habit__btn" type="submit" disabled={loading}>
          {loading ? "Saving..." : habitData ? "Update Habit" : "Add Habit"}
        </button>
      </form>
    </section>
  );
}

export default AddHabit;
