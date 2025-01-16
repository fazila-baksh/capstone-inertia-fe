import "./IndvHabit.scss";
import { Link } from "react-router-dom";
import edit from "../../assets/icons/edit.svg";
import remove from "../../assets/icons/remove.svg";
import HabitDetails from "../HabitDetails/HabitDetails";
import HabitGraph from "../HabitGraph/HabitGraph";
import DeleteHabit from "../DeleteHabit/DeleteHabit";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../utilities/config";

function IndvHabit() {
  const { id } = useParams();
  const [indvHabit, setIndvHabit] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIndvHabit = async () => {
      try {
        const response = await axios.get(`${baseUrl}/user/1/habits/${id}`);
        setIndvHabit(response.data);
      } catch (error) {
        console.log(error);
        setError("error fetching habit");
      }
    };

    fetchIndvHabit();
  }, [id]);

  if (!indvHabit) {
    return <div>loading</div>;
  }

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
        {indvHabit.map((habit) => (
          <div key={habit.id}>
            <h2 className="indvHabit__title">{habit.habit_name}</h2>
          </div>
        ))}
      </div>
      <HabitDetails />
      <h2 className="indvHabit__subtitle">overview</h2>
      <p className="indvHabit__date">january 1st, 2025 - december 31st, 2025</p>
      <HabitGraph />
    </section>
  );
}

export default IndvHabit;
