import { useState, useEffect } from "react";
import "./HabitListItem.scss";
import { Link } from "react-router";
import axios from "axios";
import { baseUrl } from "../../utilities/config.js";

function HabitLIstItem({ habit, fetchHabits }) {
  const [isChecked, setIsChecked] = useState(habit.log_id !== 0);

  const handleCheckboxChange = async () => {
    // Checkbox functionality - function to add or delete habit log (for that habit) when you check or uncheck the checkbox
    const currMonth = new Date().toLocaleString("default", { month: "long" });
    const currDate = new Date().toLocaleDateString("en-CA");

    if (!isChecked) {
      const newLog = {
        log_date: currDate,
        log_month: currMonth,
        completed: true,
      };

      try {
        const response = await axios.post(
          `${baseUrl}/user/1/habits/${habit.habit_id}`,
          newLog
        );
        if (response.status === 201) {
          fetchHabits();
          setIsChecked(true);
        }
      } catch (error) {
        console.error("Error creating habit log", error);
      }
    } else {
      try {
        const response = await axios.delete(
          `${baseUrl}/user/1/logs/${habit.log_id}`
        );
        if (response.status === 200) {
          fetchHabits();
          setIsChecked(false);
        }
      } catch (error) {
        console.error("Error deleting habit log", error);
      }
    }
  };

  return (
    <div className="habit" key={habit.habit_id}>
      <input
        className="habit__checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <Link to={`habit/${habit.habit_id}`} className="habit__name">
        {habit.habit_name}
      </Link>
    </div>
  );
}
export default HabitLIstItem;

{
  /* <div className="habit" key={habit.habit_id}>
  <input
    className="habit__checkbox"
    type="checkbox"
    checked={habit.log_id === 0 ? false : true}
    onChange={() => handleCheckboxChange(habit.habit_id)}
  />
  <Link to={`habit/${habit.habit_id}`} className="habit__name">
    {habit.habit_name}
  </Link>
</div>; */
}
