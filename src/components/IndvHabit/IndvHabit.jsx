import "./IndvHabit.scss";
import { Link } from "react-router";
import edit from "../../assets/icons/edit.svg";
import remove from "../../assets/icons/remove.svg";
import HabitDetails from "../HabitDetails/HabitDetails";
import HabitGraph from "../HabitGraph/HabitGraph";

function IndvHabit() {
  return (
    <section className="indvHabit">
      <div className="indvHabit__banner">
        <div className="indvHabit__icon-container">
          <Link to="/edit">
            <img className="indvHabit__icon" src={edit} />
          </Link>
          <img className="indvHabit__icon" src={remove} />
        </div>
        <h2 className="indvHabit__title">water</h2>
      </div>
      <HabitDetails />
      <h2 className="indvHabit__subtitle">overview</h2>
      <p className="indvHabit__date">january 1st, 2025 - december 31st, 2025</p>
      <HabitGraph />
    </section>
  );
}

export default IndvHabit;
