import "./AddHabit.scss";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utilities/config";

function AddHabit() {
  const [newHabit, setNewHabit] = useState({
    name: "",
    description: "",
    goal: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setNewHabit({ ...newHabit, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${baseUrl}/user/1/habits`, newHabit);
      console.log("New habit created:", response.data);
      // Handle successful submission (e.g., redirect, show success message)
    } catch (error) {
      console.error("Error creating habit:", error);
      // Handle error (e.g., display error message to the user)
    }
  };

  return (
    <section className="add-habit">
      <h2 className="add-habit__title">add a habit</h2>
      <form className="add-habit__form" onSubmit={handleSubmit}>
        <label className="add-habit__label">name:</label>
        <input
          className="add-habit__input"
          type="text"
          name="name"
          value={newHabit.habit_name}
          onChange={handleChange}
        />

        <label className="add-habit__label">description:</label>
        <input
          className="add-habit__input"
          type="text"
          name="description"
          value={newHabit.description}
          onChange={handleChange}
        />

        <label className="add-habit__label">goal:</label>
        <select
          className="add-habit__input"
          name="goal"
          value={newHabit.goal_frequency}
          onChange={handleChange}
        >
          <option value="">select goal</option>
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
