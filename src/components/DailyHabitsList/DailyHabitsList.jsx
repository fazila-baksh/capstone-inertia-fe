import { Link } from "react-router";
import "./DailyHabitsList.scss";

function DailyHabitsList() {
  return (
    <section className="habits">
      <div className="habits__banner">
        <h2 className="habits__title">daily habits</h2>
        <Link to="/add">
          <button className="habits__btn">+ add</button>
        </Link>
      </div>
      <div className="habits__container">
        <div className="habit">
          <input className="habit__checkbox" type="checkbox" />
          <label className="habit__name">water</label>
        </div>
        <div className="habit">
          <input className="habit__checkbox" type="checkbox" />
          <label className="habit__name">exercise</label>
        </div>
        <div className="habit">
          <input className="habit__checkbox" type="checkbox" />
          <label className="habit__name">sleep</label>
        </div>
        <div className="habit">
          <input className="habit__checkbox" type="checkbox" />
          <label className="habit__name">journal</label>
        </div>
        <div className="habit">
          <input className="habit__checkbox" type="checkbox" />
          <label className="habit__name">vitamins</label>
        </div>
      </div>
    </section>
  );
}

export default DailyHabitsList;
