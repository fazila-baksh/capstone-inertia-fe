import "./IndvHabit.scss";
import { Link } from "react-router-dom";
import edit from "../../assets/icons/edit.svg";
import remove from "../../assets/icons/remove.svg";
import HabitDetails from "../HabitDetails/HabitDetails";
import HabitGraph from "../HabitGraph/HabitGraph";
import DeleteHabit from "../DeleteHabit/DeleteHabit";

function IndvHabit() {
  return (
    <section className="indvHabit">
      <div className="indvHabit__banner">
        <div className="indvHabit__icon-container">
          <Link to="/edit">
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
        <h2 className="indvHabit__title">water</h2>
      </div>
      <HabitDetails />
      <h2 className="indvHabit__subtitle">overview</h2>
      <p className="indvHabit__date">january 1st, 2024 - december 31st, 2024</p>
      <HabitGraph />
    </section>
  );
}

export default IndvHabit;
