import swal from "sweetalert";
const CardDetails = ({ data }) => {
  const {
    description,
    text_color,
    title,
    id,
    rectangle_picture,
    price,
  } = data || {};
  const handleDonation = () => {
    let arryOfDonation = [];

    const getDonation = JSON.parse(localStorage.getItem("donation"));

    if (!getDonation) {
      arryOfDonation.push(data);
      localStorage.setItem("donation", JSON.stringify(arryOfDonation));
      swal("Good job!", "Donation Success", "success");



    } else {
      const isExits=getDonation.find(data=> data.id==id)
      if(!isExits){

        arryOfDonation.push(...getDonation, data);
        localStorage.setItem("donation", JSON.stringify(arryOfDonation));
              swal("Good job!", "Donation Success", "success");

      }
      else{
              swal("Error", "Donation Already Added", "error");

      }
    }
  };

  return (
    <div className="m-3">
      <div className="relative ">
        <img
          className="w-full rounded-xl mt-10 h-[80vh] object-cover"
          src={rectangle_picture}
          alt=""
        />
        <div className="absolute bg-black/50 p-4 bottom-0  w-full rounded-b-lg">
          <button
            onClick={handleDonation}
            className="px-6 py-3 m-3 rounded text-white font-semibold"
            style={{ backgroundColor: text_color }}
          >
            Donate {price}
          </button>
        </div>
      </div>
      <h3 className="text-3xl my-7 font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <br /> <br />
    </div>
  );
};

export default CardDetails;
