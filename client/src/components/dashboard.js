import { useState, useEffect } from "react";
import { getData } from "../service/api";
import  CountryChart from "./countryChart";
import TopicChart from "./topicChart";
import RegionChart from "./regionChart";
import { Typography } from "@mui/material";

function Dashboard() {
    const [data, setData] = useState([]);
      
    const getDetails = async() => {
        try {
         const response = await getData();
         setData(response?.data);
    }
    catch(err) {
      console.log(err,"err in api")
    }
    }

    useEffect(() => {
        getDetails()
    },[])

    return(
        <div>
            <div style={{width:"100%",height:"30px",position:"sticky",top:"0",zIndex:1,backgroundColor:"white"}}>
                <Typography variant="h5">Data Visualization Dashboard</Typography></div>
            <div>
              <CountryChart data = {data} />
              <TopicChart data = {data} />
              <RegionChart data= {data} />
          </div>
        </div>
    )
}

export default Dashboard;