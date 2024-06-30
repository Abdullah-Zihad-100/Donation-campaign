import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetails from "./CardDetails";
import { Helmet } from "react-helmet-async";


const DonationDetails = () => {
    const [data,setData]=useState();
    const {id}=useParams();
    const datas=useLoaderData()


    useEffect(()=>{
      const findDonation=datas.find((data)=> data.id == id)
      setData(findDonation)
    },[id,datas])
    return (
      <div>
        <Helmet>
          <title>Donation Details</title>
        </Helmet>
        <CardDetails data={data}></CardDetails>
      </div>
    );
};

export default DonationDetails;