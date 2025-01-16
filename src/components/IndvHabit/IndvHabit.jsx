import "./IndvHabit.scss";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import edit from "../../assets/icons/edit.svg";
import remove from "../../assets/icons/remove.svg";
// import HabitDetails from "../HabitDetails/HabitDetails";
import HabitGraph from "../HabitGraph/HabitGraph";
import DeleteHabit from "../DeleteHabit/DeleteHabit";
import { baseUrl } from "../../utilities/config.js";

function IndvHabit() {
  const { id } = useParams();
  const [habit, setHabit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHabit = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${baseUrl}/user/1/habits/${id}`);
      const data = response.data;
      setHabit(data[0]);
    } catch (err) {
      console.error("Error fetching habit:", err.message);
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHabit();
  }, [id]);

  return (
    <section className="indvHabit">
      <div className="indvHabit__banner">
        <div className="indvHabit__icon-container">
          <Link to={`/edit/${id}`}>
            <img className="indvHabit__icon" src={edit} alt="Edit" />
          </Link>
          <DeleteHabit>
            {({ showModal, setShowModal }) => (
              <img
                className="indvHabit__icon"
                src={remove}
                alt="Delete"
                onClick={() => setShowModal(true)}
              />
            )}
          </DeleteHabit>
        </div>
        {habit && <h2 className="indvHabit__title">{habit.habit_name}</h2>}{" "}
        <div className="indvHabit__icon-container"></div>
      </div>
      <div className="habit-details">
        {loading && <div>loading...</div>}
        {error && <div className="error">Error: {error}</div>}
        {habit && (
          <>
            <h3 className="habit-details__subtitle">Description:</h3>
            <p className="habit-details__text">{habit.description}</p>
            <h3 className="habit-details__subtitle">Goal Frequency:</h3>
            <p className="habit-details__text">
              {habit.goal_frequency} days a week
            </p>
          </>
        )}
      </div>
    </section>
  );
}

export default IndvHabit;
