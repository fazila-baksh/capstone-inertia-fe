import "./IndvHabit.scss";
import { Link } from "react-router-dom";
import edit from "../../assets/icons/edit.svg";
import remove from "../../assets/icons/remove.svg";
import HabitDetails from "../HabitDetails/HabitDetails";
import HabitGraph from "../HabitGraph/HabitGraph";
import DeleteHabit from "../DeleteHabit/DeleteHabit";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../utilities/config";

function IndvHabit() {
  const { id } = useParams();
  const [indvHabit, setIndvHabit] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchIndvHabit = async () => {
      try {
        const response = await axios.get(`${baseUrl}/user/1/habits/${id}`);
        setIndvHabit(response.data);
      } catch (error) {
        console.error("Error getting habit:", error);
      }
    };

    fetchIndvHabit();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (deleteSuccess) {
      setShowModal(false);
      navigate("/");
    }
  }, [deleteSuccess]);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${baseUrl}/user/1/habits/${id}`);
      console.log(response, "response");
      setDeleteSuccess(response.status === 200);
    } catch (error) {
      console.error("Error deleting habit", error);
    }
  };

  if (!indvHabit) {
    return <div>loading</div>;
  }

  return (
    <section className="indvHabit">
      <div className="indvHabit__banner">
        <Link to={`/edit/${id}`}>
          <img className="indvHabit__icon" src={edit} alt="Edit" />
        </Link>
        <h2 className="indvHabit__title">{indvHabit.habit_name}</h2>
        <img
          className="indvHabit__icon"
          src={remove}
          alt="Delete"
          onClick={handleClick}
        />
        {showModal && (
          <DeleteHabit
            habitId={id}
            showModal={showModal}
            setShowModal={setShowModal}
            onDelete={handleDelete}
          />
        )}
      </div>
      <HabitDetails />
      <h2 className="indvHabit__subtitle">overview</h2>
      <p className="indvHabit__date">jan 1st, 2024 - dec 31st, 2024</p>
      <HabitGraph />
    </section>
  );
}

export default IndvHabit;
