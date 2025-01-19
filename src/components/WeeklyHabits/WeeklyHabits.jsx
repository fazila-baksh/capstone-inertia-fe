import "./WeeklyHabits.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../../utilities/config.js";

function WeeklyHabits() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await axios.get(`${baseUrl}/user/1/habits/weekly`);
        setHabits(response.data);
      } catch (error) {
        console.error("Error fetching habits", error);
      }
    };

    fetchHabits();
  }, []);

  return (
    <section className="weekly">
      <h2 className="weekly__title">weekly overview</h2>
      <table className="weekly__table">
        <thead>
          <tr className="weekly__table-headers">
            <th className="weekly__table-header">habit</th>
            <th className="weekly__table-header">s</th>
            <th className="weekly__table-header">m</th>
            <th className="weekly__table-header">t</th>
            <th className="weekly__table-header">w</th>
            <th className="weekly__table-header">t</th>
            <th className="weekly__table-header">f</th>
            <th className="weekly__table-header">s</th>
            <th className="weekly__table-header">goal</th>
          </tr>
        </thead>
        <tbody>
          {habits.map((habit) => (
            <tr key={habit.habit_name} className="weekly__table-data-container">
              <td className="weekly__table-data">{habit.habit_name}</td>
              {[
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ].map((day) => {
                const dayData = habit.weeklyTracking.find(
                  (tracking) => tracking.day === day
                );
                return (
                  <td key={day} className="weekly__table-data">
                    {dayData && dayData.completed ? "o" : ""}
                  </td>
                );
              })}
              <td className="weekly__table-data">{habit.goal_frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default WeeklyHabits;
