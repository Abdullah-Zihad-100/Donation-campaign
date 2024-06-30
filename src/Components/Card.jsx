import { Link } from "react-router-dom";

const Card = ({ card }) => {
  const {
    text_color,
    card_bg_color,
    category_bg_color,
    category,
    title,
    picture,
    id,
  } = card || {};
  return (
    <Link to={`/donationDetails/${id}`}>
      <div className="rounded" style={{ backgroundColor: card_bg_color }}>
        <img className="w-full" src={picture} alt="" />

        <div className="p-3">
          <button
            className="px-2 py-[2px] font-semibold rounded text-sm"
            style={{ color: text_color, background: category_bg_color }}
          >
            {category}
          </button>
          <h4 className="text-lg font-semibold" style={{ color: text_color }}>
            {title}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default Card;
