import { useParams } from "react-router";
import "./EditHabit.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utilities/config";

function EditHabit() {
  const { id } = useParams();
  const [editStatus, setEditStatus] = useState(false);
  const [editHabit, setEditHabit] = useState({
    habit_name: "",
    description: "",
    goal_frequency: "",
  });

  useEffect(() => {
    setEditStatus(false);
  }, []);

  useEffect(() => {
    const fetchHabitData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/user/1/habits/${id}`);
        setEditHabit({
          ...editHabit,
          habit_name: response.data.habit_name,
          description: response.data.description,
          goal_frequency: response.data.goal_frequency,
        });
      } catch (error) {
        console.error("Error getting habit:", error);
      }
    };
    fetchHabitData();
  }, [id]);

  const handleChange = (event) => {
    setEditHabit({ ...editHabit, [event.target.name]: event.target.value });
    setEditStatus(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updateEditHabit = {
      ...editHabit,
      goal_frequency: Number(editHabit.goal_frequency),
    };
    try {
      await axios.put(`${baseUrl}/user/1/habits/${id}/edit`, updateEditHabit);
      setEditStatus(true);
    } catch (error) {
      console.error("Error updating habit", error);
    }
  };

  return (
    <section className="edit-habit">
      <h2 className="edit-habit__title">edit your habit</h2>
      {!editStatus ? "" : <h3>sent!</h3>}
      <form className="edit-habit__form" onSubmit={handleSubmit}>
        <label htmlFor="habit_name" className="edit-habit__label">
          name:
        </label>
        <input
          id="habit_name"
          className="edit-habit__input"
          type="text"
          name="habit_name"
          value={editHabit.habit_name}
          onChange={handleChange}
          required
        />

        <label htmlFor="description" className="edit-habit__label">
          description:
        </label>
        <input
          id="description"
          className="edit-habit__input"
          type="text"
          name="description"
          value={editHabit.description}
          onChange={handleChange}
        />

        <label htmlFor="goal_frequency" className="edit-habit__label">
          goal:
        </label>
        <select
          id="goal_frequency"
          className="edit-habit__input"
          name="goal_frequency"
          value={editHabit.goal_frequency}
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

        <button className="edit-habit__btn" type="submit">
          update habit
        </button>
      </form>
    </section>
  );
}

export default EditHabit;
