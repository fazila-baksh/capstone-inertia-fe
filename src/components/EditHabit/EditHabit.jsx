import { useParams } from "react-router";
import "./EditHabit.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utilities/config";

function EditHabit() {
  const { id } = useParams();
  const [editHabit, setEditHabit] = useState({
    name: "",
    description: "",
    goal: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHabitData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/user/1/habits/${id}`);
        setEditHabit(response.data);
      } catch (error) {
        console.log(error);
        setError("error fetching habit");
      }
    };
    fetchHabitData();
  }, [id]);

  const handleChange = (e) => {
    setEditHabit({ ...editHabit, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${baseUrl}/user/1/habits/${id}`, editHabit);
    } catch (error) {
      console.log(error);
      setError("Error updating habit");
    }
  };

  return (
    <section className="edit-habit">
      <h2 className="edit-habit__title">edit your habit</h2>
      <form className="edit-habit__form" onSubmit={handleSubmit}>
        <label className="edit-habit__label">name:</label>
        <input
          className="edit-habit__input"
          type="text"
          name="name"
          value={editHabit.habit_name}
          onChange={handleChange}
        />

        <label className="edit-habit__label">description:</label>
        <input
          className="edit-habit__input"
          type="text"
          name="description"
          value={editHabit.description}
          onChange={handleChange}
        />

        <label className="edit-habit__label">goal:</label>
        <select
          className="edit-habit__input"
          name="goal"
          value={editHabit.goal_frequency}
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

        <button className="edit-habit__btn" type="submit">
          update habit
        </button>
      </form>
    </section>
  );
}

export default EditHabit;
