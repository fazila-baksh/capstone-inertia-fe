import "./AddHabit.scss";

function AddHabit() {
  return (
    <section className="add-habit">
      <h2 className="add-habit__title">add a habit</h2>
      <form className="add-habit__form">
        <label className="add-habit__label">name:</label>
        <input className="add-habit__input" type="text" />
        <label className="add-habit__label">description:</label>
        <input className="add-habit__input" type="text" />
        <label className="add-habit__label">goal:</label>
        <select className="add-habit__input">
          <option className="add-habit__option"></option>
          <option className="add-habit__option">1 time per week</option>
          <option className="add-habit__option">2 times per week</option>
          <option className="add-habit__option">3 times per week</option>
          <option className="add-habit__option">4 times per week</option>
          <option className="add-habit__option">5 times per week</option>
          <option className="add-habit__option">6 times per week</option>
          <option className="add-habit__option">7 times per week</option>
        </select>
      </form>
      <button className="add-habit__btn">submit</button>
    </section>
  );
}

export default AddHabit;
