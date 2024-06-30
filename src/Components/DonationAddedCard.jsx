import { Link } from "react-router-dom";

const DonationAddedCard = ({card}) => {
    const {
        id,
      text_color,
      category,
      title,
      card_bg_color,
      price,
      rectangle_picture,
      category_bg_color,
    } = card || {};
    return (
      <div className="flex mx-auto">
        <img
          className="object-cover w-[250px] rounded-lg"
          src={rectangle_picture}
          alt=""
        />
        <div
          className="font-semibold p-5 pr-56 rounded-r-lg"
          style={{ backgroundColor: card_bg_color }}
        >
          <button
            className="my-3 font-semibold px-2 rounded"
            style={{ color: text_color, backgroundColor: category_bg_color }}
          >
            {category}
          </button>
          <h2 className="text-xl my-2">{title}</h2>
          <h4 className="my-2" style={{ color: text_color }}>
            {price}
          </h4>
          <Link to={`/donationDetails/${id}`}>
            <button
              style={{ backgroundColor: text_color }}
              className="px-3 py-2 rounded text-white"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    );
};

export default DonationAddedCard;