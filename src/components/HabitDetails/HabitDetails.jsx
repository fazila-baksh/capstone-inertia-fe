import "./HabitDetails.scss";

function HabitDetails() {
  return (
    <div className="habit-details">
      <h3 className="habit-details__subtitle">description:</h3>
      <p className="habit-details__text">drink 8 glasses of water a day</p>
      <h3 className="habit-details__subtitle">frequency:</h3>
      <p className="habit-details__text">7 days a week</p>
    </div>
  );
}

export default HabitDetails;
