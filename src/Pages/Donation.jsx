import { useState, useEffect,} from "react";
import DonationAddedCard from "../Components/DonationAddedCard";
import { Helmet } from "react-helmet-async";


const Donation = () => {
  const [getDonation, setGetDonation] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    const storedDonations = JSON.parse(localStorage.getItem("donation")) || [];
    setGetDonation(storedDonations);
  }, []);

  return (
  
      <div>
        <Helmet>
          <title>Donation Donation Page</title>
        </Helmet>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-24 lg:mx-5">
          {seeMore
            ? getDonation.map((card) => (
                <DonationAddedCard card={card} key={card.id} />
              ))
            : getDonation
                .slice(0, 4)
                .map((card) => <DonationAddedCard card={card} key={card.id} />)}
        </div>

        {getDonation.length > 4 && (
          <button
            onClick={() => setSeeMore(!seeMore)}
            className="px-4 py-2 bg-green-600 text-white rounded my-10 mx-auto block"
          >
            {seeMore ? "See Less" : "See More"}
          </button>
        )}
      </div>
   
  );
};

export default Donation;
