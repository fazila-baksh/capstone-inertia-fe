import DailyHabitsList from "../../components/DailyHabitsList/DailyHabitsList";
import Banner from "../../components/Banner/Banner";
import RateDay from "../../components/RateDay/RateDay";

function HomePage() {
  return (
    <>
      <Banner />
      <DailyHabitsList />
      <RateDay />
    </>
  );
}

export default HomePage;
