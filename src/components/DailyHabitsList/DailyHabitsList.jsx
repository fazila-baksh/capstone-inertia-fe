import { useState, useEffect } from "react";
import "./DailyHabitsList.scss";
import { Link } from "react-router";
import axios from "axios";
import { baseUrl } from "../../utilities/config.js";
import HabitLIstItem from "../HabitListItem/HabitListItem.jsx";

function DailyHabitsList() {
  const [habits, setHabits] = useState([]);

  const fetchHabits = async () => {
    try {
      const response = await axios.get(`${baseUrl}/user/1/habits/daily`);
      setHabits(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
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
            <HabitLIstItem
              key={habit.habit_id}
              habit={habit}
              fetchHabits={fetchHabits}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default DailyHabitsList;
