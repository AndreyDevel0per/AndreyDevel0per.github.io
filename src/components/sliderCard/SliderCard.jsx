import "./sliderCard.css";
// import card from '../../img/cards/card1.webp'

export default function Card({img, category, name, date}) {

  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card__text">
        <div className="card__category">
          <span>{category}</span>
        </div>
        <div className="card__name">
          <h2>{name}</h2>
        </div>
        <div className="card__date">
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
}
