import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AddHabit from "../../components/AddHabit/AddHabit";
import { baseUrl } from "../../utilities/config.js";

function EditPage() {
  const { id } = useParams();
  const [habitData, setHabitData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHabitData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/user/1/habits/${id}`);
        setHabitData(response.data[0]);
        setLoading(false);
      } catch (err) {
        setError("Error fetching habit data.");
        setLoading(false);
      }
    };

    fetchHabitData();
  }, [id]);

  const handleUpdateHabit = async (formData) => {
    try {
      await axios.put(`${baseUrl}/user/1/habits/${id}`, formData);
      navigate(`/habit/${id}`);
    } catch (err) {
      setError("Error updating habit.");
    }
  };

  const logHabitData = () => {
    console.log("Current Habit Data:", habitData);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <AddHabit habitData={habitData} onSubmit={handleUpdateHabit} />
    </div>
  );
}

export default EditPage;
