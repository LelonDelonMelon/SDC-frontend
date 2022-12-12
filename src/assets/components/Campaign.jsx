import React, {useState, useEffect} from 'react';
import axios from 'axios'
import User from './User';

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
        <ul>
            {
            campaigns.map((campaign, index)=>
            <li key={index}>
                {campaign.campaignDescription}
            </li>)
            }
        </ul>
    </div>
  )
}

export default Campaign