import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Navbar from './Navbar';
import CreateCampaign from './CreateCampaignButton';
const Campaign = () => {

    const [campaigns, setCampaigns] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:3000/api/campaign')
        .then(res => {
            console.log(res.data)
            setCampaigns(res.data)
        })
        .catch(err=> {
            console.log(err)
        })
    },[])
  return (
    <div>
        <Navbar/>
        <CreateCampaign/>
        <ul>
            {
            campaigns.map((campaign, index)=>
            <li key={index}>
                Description:{campaign.campaignDescription}
                Goal Amount:{campaign.campaignGoalAmount}
            </li>)
            }
        </ul>
    </div>
  )
}

export default Campaign