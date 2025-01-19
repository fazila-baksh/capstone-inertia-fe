import "./AddHabit.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../utilities/config";

function AddHabit() {
  const [addStatus, setAddStatus] = useState(false);
  const [newHabit, setNewHabit] = useState({
    habit_name: "",
    description: "",
    goal_frequency: "",
  });

  useEffect(() => {
    setAddStatus(false);
  }, []);

  const handleChange = (event) => {
    setNewHabit({ ...newHabit, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updateNewHabit = {
      ...newHabit,
      goal_frequency: Number(newHabit.goal_frequency),
    };

    try {
      await axios.post(`${baseUrl}/user/1/habits/add`, updateNewHabit);
      setNewHabit({
        habit_name: "",
        description: "",
        goal_frequency: "",
      });
      setAddStatus(true);
    } catch (error) {
      console.error("Error creating habit:", error);
    }
  };

  return (
    <section className="add-habit">
      <h2 className="add-habit__title">add a habit</h2>
      {!addStatus ? "" : <h3>sent!</h3>}
      <form className="add-habit__form" onSubmit={handleSubmit}>
        <label htmlFor="habit_name" className="add-habit__label">
          name:
        </label>
        <input
          id="habit_name"
          className="add-habit__input"
          type="text"
          name="habit_name"
          value={newHabit.habit_name}
          onChange={handleChange}
          required
        />

        <label htmlFor="description" className="add-habit__label">
          description:
        </label>
        <input
          id="description"
          className="add-habit__input"
          type="text"
          name="description"
          value={newHabit.description}
          onChange={handleChange}
        />

        <label htmlFor="goal_frequency" className="add-habit__label">
          goal:
        </label>
        <select
          id="goal_frequency"
          className="add-habit__input"
          name="goal_frequency"
          value={newHabit.goal_frequency}
          onChange={handleChange}
        >
          <option value="" disabled>
            select goal
          </option>
          <option value="1">1 time per week</option>
          <option value="2">2 times per week</option>
          <option value="3">3 times per week</option>
          <option value="4">4 times per week</option>
          <option value="5">5 times per week</option>
          <option value="6">6 times per week</option>
          <option value="7">7 times per week</option>
        </select>

        <button className="add-habit__btn" type="submit">
          submit
        </button>
      </form>
    </section>
  );
}

export default AddHabit;
