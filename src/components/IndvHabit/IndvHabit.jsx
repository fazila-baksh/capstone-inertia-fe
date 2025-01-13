import "./IndvHabit.scss";
import edit from "../../assets/icons/edit.svg";
import remove from "../../assets/icons/remove.svg";

function IndvHabit() {
  return (
    <section className="indvHabit">
      <div className="indvHabit__banner">
        <div className="indvHabit__icon-container">
          <img className="indvHabit__icon" src={edit} />
          <img className="indvHabit__icon" src={remove} />
        </div>
        <h2 className="indvHabit__title">water</h2>
      </div>
      <div className="indvHabit__info">
        <h3 className="indvHabit__subtitle">description:</h3>
        <p className="indvHabit__text">drink 8 glasses of water a day</p>
        <h3 className="indvHabit__subtitle">frequency:</h3>
        <p className="indvHabit__text">7 days a week</p>
      </div>
    </section>
  );
}

export default IndvHabit;
