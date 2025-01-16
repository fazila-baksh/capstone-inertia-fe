import { useState, useEffect } from "react";
import "./DailyHabitsList.scss";
import { Link } from "react-router";
import axios from "axios";
import { baseUrl } from "../../utilities/config.js";

function DailyHabitsList() {
  const [habits, setHabits] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await axios.get(`${baseUrl}/user/1/habits/daily`);
        setHabits(response.data);
      } catch (error) {
        console.log(error);
        setError("error fetching habits");
      }
    };

    fetchHabits();
  }, []);

  if (!habits) {
    return <div>loading</div>;
  }

  return (
    <section className="habits">
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
              <Link to={`habit/${habit.habit_id}`} className="habit__name">
                {habit.habit_name}
              </Link>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default DailyHabitsList;
