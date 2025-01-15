import "./RateDay.scss";
import happy from "../../assets/icons/happy.svg";
import neutral from "../../assets/icons/neutral.svg";
import sad from "../../assets/icons/sad.svg";

function RateDay() {
  return (
    <section className="rate">
      <h2 className="rate__title">rate your day</h2>
      <div className="rate__card">
        <div className="rate__icon-container">
          <div className="rate__icon">
            <img className="rate__img" src={happy} />
            <p className="rate__info">great</p>
          </div>
          <div className="rate__icon">
            <img className="rate__img" src={neutral} />
            <p className="rate__info">fine</p>
          </div>
          <div className="rate__icon">
            <img className="rate__img" src={sad} />
            <p className="rate__info">gloomy</p>
          </div>
        </div>
        <form className="rate__form">
          <label className="rate__form-label">describe your day</label>
          <input className="rate__form-input" type="text" />
          <button className="rate__form-btn">submit</button>
        </form>
      </div>
    </section>
  );
}

export default RateDay;
