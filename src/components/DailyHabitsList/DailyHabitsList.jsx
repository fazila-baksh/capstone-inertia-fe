import { useState, useEffect } from "react";
import "./DailyHabitsList.scss";
import { Link } from "react-router";
import axios from "axios";
import { baseUrl } from "../../utilities/config.js";

function DailyHabitsList() {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHabits = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${baseUrl}/user/1/habits/daily`);
      const data = response.data;
      setHabits(data);
    } catch (err) {
      console.error("Error fetching habits:", err.message);
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <section className="habits">
      {loading && <div>loading...</div>}{" "}
      {error && <div className="error">error: {error}</div>}{" "}
      <div className="habits__banner">
        <h2 className="habits__title">daily habits</h2>
        <Link to="/add">
          <button className="habits__btn">+ add</button>
        </Link>
      </div>
      <div className="habits__container">
        {habits.length === 0 ? (
          <p>
            begin your habit tracking journey, start by adding your first habit!
          </p>
        ) : (
          habits.map((habit) => (
            <div className="habit" key={habit.habit_id}>
              <input className="habit__checkbox" type="checkbox" />
              <Link className="habit__name" to={`habit/${habit.habit_id}`}>
                {habit.habit_name.toLowerCase()}
              </Link>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default DailyHabitsList;
