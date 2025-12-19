import "./Card.css";

const Card = ({ title, children, img, imgAlt = "card image" }) => {
  return (
    <div className="card">
      {/* Content */}
      <div className="card-body">
        <h3>{title}</h3>
        <div className="card-content">{children}</div>
      </div>

      {/* CardImage */}
      <div className="card-image">{img && <img src={img} alt={imgAlt} />}</div>
    </div>
  );
};

export default Card;
