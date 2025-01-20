import "./Banner.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { baseUrl } from "../../utilities/config.js";

function Banner() {
  const [affirmation, setAffirmation] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/user/1/api/affirmations`);
        setAffirmation(response.data.affirmation);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return <p className="banner">{affirmation}</p>;
}

export default Banner;
