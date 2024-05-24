import "./sliderCard.css";
// import card from '../../img/cards/card1.webp'

export default function Card(img) {
  return (
    <div className="card">
      {/* <img src={card} alt="" /> */}
      <div className="card__text">
        <div className="card__category">
          <span>Sports</span>
        </div>
        <div className="card__name">
          <h2>Los Angeles Dodgers</h2>
        </div>
        <div className="card__date">
          <span>May 7</span>
        </div>
      </div>
    </div>
  );
}
