import HeroSectionImages from "./Images/hero-images.png";

function MainContent() {
  return (
    <div className="MainContent">
      <img
        src={HeroSectionImages}
        className="Hero-img"
        alt="Diffrent Airbnb activities"
      ></img>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}

export default MainContent;
