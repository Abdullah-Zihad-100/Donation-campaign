import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const cards = useLoaderData();
  const [search, setSearch] = useState("");
  const [filteredCards, setFilteredCards] = useState(cards);

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = () => {
    if (search === "Health") {
      setFilteredCards(cards.filter((card) => card.category === "Health" && "health"));
    } else if (search === "Education") {
      setFilteredCards(
        cards.filter((card) => card.category === "Education" && "education")
      );
    } else if (search === "Clothing") {
      setFilteredCards(
        cards.filter((card) => card.category === "Clothing" && "clothing")
      );
    } else if (search === "Food") {
      setFilteredCards(cards.filter((card) => card.category === "Food" && "food"));
    } else {
      setFilteredCards(cards);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Donation Home</title>
      </Helmet>
      <div>
        <div className="relative w-full h-[70vh]">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url("/src/images/Health.png")` }}
          >
            <div className="absolute inset-0 bg-white opacity-95"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-black m-3">
            <h1 className="text-4xl md:text-5xl font-bold my-6">
              I Grow By Helping People In Need
            </h1>
            <div className="flex items-center justify-center my-10">
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type="text"
                placeholder="Search here"
                className="input input-bordered h-[46px] w-80 mx-w-96 rounded-r-none"
              />
              <button
                onClick={handleSearch}
                className="btn rounded-l-none bg-red-500 text-white h-[46px]"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="lg:grid-cols-4 md:grid-cols-3 grid grid-cols-2 gap-5 my-10 mx-3">
          {filteredCards.map((card) => (
            <Card card={card} key={card.id}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
