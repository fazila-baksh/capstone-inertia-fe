import "./EditHabit.scss";

function EditHabit() {
  return (
    <section className="edit-habit">
      <h2 className="edit-habit__title">edit your habit</h2>
      <form className="edit-habit__form">
        <label className="edit-habit__label">name:</label>
        <input className="edit-habit__input" type="text" />
        <label className="edit-habit__label">description:</label>
        <input className="edit-habit__input" type="text" />
        <label className="edit-habit__label">goal:</label>
        <select className="edit-habit__input">
          <option className="edit-habit__option"></option>
          <option className="edit-habit__option">1 time per week</option>
          <option className="edit-habit__option">2 times per week</option>
          <option className="edit-habit__option">3 times per week</option>
          <option className="edit-habit__option">4 times per week</option>
          <option className="edit-habit__option">5 times per week</option>
          <option className="edit-habit__option">6 times per week</option>
          <option className="edit-habit__option">7 times per week</option>
        </select>
      </form>
      <button className="edit-habit__btn">submit</button>
    </section>
  );
}

export default EditHabit;
