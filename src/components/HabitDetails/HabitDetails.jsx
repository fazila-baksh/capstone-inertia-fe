import "./HabitDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../utilities/config";

function HabitDetails() {
  const { id } = useParams();
  const [habitDetails, setHabitDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHabitDetails = async () => {
      try {
        const response = await axios.get(`${baseUrl}/user/1/habits/${id}`);
        setHabitDetails(response.data);
      } catch (error) {
        console.log(error);
        setError("error fetching habit details");
      }
    };

    fetchHabitDetails();
  }, [id]);

  if (!habitDetails) {
    return <div>loading</div>;
  }

  return (
    <>
      {habitDetails.map((habit) => (
        <div className="habit-details" key={habit.id}>
          <h3 className="habit-details__subtitle">description:</h3>
          <p className="habit-details__text">{habit.description}</p>
          <h3 className="habit-details__subtitle">frequency:</h3>
          <p className="habit-details__text">
            {habit.goal_frequency} days a week
          </p>
        </div>
      ))}
    </>
  );
}

export default HabitDetails;
