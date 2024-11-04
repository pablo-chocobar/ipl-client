import { React, useState, useEffect } from 'react'
import Headonform from '../components/Headonform'
import HeadonPlayerImage from '../components/HeadonPlayerImage'
import HeadonComparison from '../components/HeadonComparison'

import headon from '@/lib/headon'


function Headon() {

  const [batter, setBatter] = useState("");
  const [bowler, setBowler] = useState("");

  // const [data , setData] = useState({'batter_name': 'V Kohli', 'batter_img': 'https://res.cloudinary.com/dzkylos5o/image/upload/v1691820225/royal-challengers-bangalore/Virat%20Kohli.png', 'batter_color': '#cb2e2e', 'bowler_name': 'Rashid Khan', 'bowler_img': 'https://res.cloudinary.com/dzkylos5o/image/upload/v1691819991/gujarat-titans/Rashid%20Kha.png', 'bowler_color': '#77c7f2', 'runs': 70, 'outs': 2, 'balls': 58, 'average': 35.0, 'strike_rate': 120.69, 'sixes': 2, 'fours': 4, 'dots': 4});
  const [data, setData] = useState({
    'batter_name': 'V Kohli',
    'bowler_name': 'Rashid Khan', 'runs': 70, 'outs': 2, 'balls': 58, 'average': 35.0, 'strike_rate': 120.69, 'sixes': 2, 'fours': 4, 'dots': 4
  });

  useEffect(() => {
    console.log("hi", batter, bowler);

    async function fetchData(batter, bowler){
        const h = await headon(batter, bowler).then(
            (response) => setData(response)
              );
    }

    if (batter != "" && bowler != ""){
      fetchData(batter , bowler);
    }
      console.log(data);

  }, [batter, bowler]);

  return (
    <div>
      <Headonform setBatter={setBatter} setBowler={setBowler}></Headonform>
      <HeadonComparison data= {data} ></HeadonComparison>
    </div>
  )
}

export default Headon