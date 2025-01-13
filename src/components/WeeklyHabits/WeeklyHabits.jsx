import "./WeeklyHabits.scss";

function WeeklyHabits() {
  return (
    <section className="weekly">
      <h2 className="weekly__title">weekly overview</h2>
      <table className="weekly__table">
        <tr className="weekly__table-headers">
          <th className="weekly__table-header">habit</th>
          <th className="weekly__table-header">m</th>
          <th className="weekly__table-header">t</th>
          <th className="weekly__table-header">w</th>
          <th className="weekly__table-header">t</th>
          <th className="weekly__table-header">f</th>
          <th className="weekly__table-header">s</th>
          <th className="weekly__table-header">s</th>
          <th className="weekly__table-header">goal</th>
        </tr>
        <tr className="weekly__table-data-container">
          <td className="weekly__table-data">water</td>
          <td className="weekly__table-data">o</td>
          <td className="weekly__table-data">o</td>
          <td className="weekly__table-data">o</td>
          <td className="weekly__table-data">o</td>
          <td className="weekly__table-data">o</td>
          <td className="weekly__table-data">o</td>
          <td className="weekly__table-data">o</td>
          <td className="weekly__table-data">7 times</td>
        </tr>
        <tr className="weekly__table-data-container">
          <td className="weekly__table-data">exercise</td>
          <td className="weekly__table-data">o</td>
          <td className="weekly__table-data"></td>
          <td className="weekly__table-data">o</td>
          <td className="weekly__table-data"></td>
          <td className="weekly__table-data">o</td>
          <td className="weekly__table-data"></td>
          <td className="weekly__table-data">o</td>
          <td className="weekly__table-data">4 times</td>
        </tr>
      </table>
    </section>
  );
}

export default WeeklyHabits;
