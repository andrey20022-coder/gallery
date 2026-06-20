import ArrowIcon from '../icons/ArrowIcon';

export default function Card({ painting }) {
  return (
    <div className="card">
      <img src={painting.image} alt={painting.title} />
      <div className="card-info">
        <div className="info-default">
          <div className="title">{painting.title}</div>
          <div className="year">{painting.year}</div>
        </div>
        <div className="info-hover">
          <div className="artist">{painting.artist}</div>
          <div className="location">{painting.location}</div>
        </div>
        <div className="card-arrow">
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
}