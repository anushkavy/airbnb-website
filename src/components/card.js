import Star from "./Images/star.png";

function Card(props) {
  let badgeText;
  if (props.person.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.person.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={require(`./Images/${props.person.coverImg}`)}
        className="card--image"
        alt="Katie Zaferes"
      />
      <div className="card--stats">
        <img src={Star} alt="Star" className="card--star" />
        <span>{props.person.stats.rating}</span>
        <span className="gray">({props.person.stats.reviewCount}) • </span>
        <span className="gray">{props.person.location}</span>
      </div>
      <p className="card--title">{props.person.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.person.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
