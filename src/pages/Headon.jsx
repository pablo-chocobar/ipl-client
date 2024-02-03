import {React , useState , useEffect} from 'react'
import Headonform from '../components/Headonform'
import HeadonPlayerImage from '../components/HeadonPlayerImage'
import HeadonComparison from '../components/HeadonComparison'

function Headon() {
  
  const [batter , setBatter] = useState("");
  const [bowler , setBowler] = useState("");

  const [data , setData] = useState({'batter_name': 'V Kohli', 'batter_img': 'https://res.cloudinary.com/dzkylos5o/image/upload/v1691820225/royal-challengers-bangalore/Virat%20Kohli.png', 'batter_color': '#cb2e2e', 'bowler_name': 'Rashid Khan', 'bowler_img': 'https://res.cloudinary.com/dzkylos5o/image/upload/v1691819991/gujarat-titans/Rashid%20Kha.png', 'bowler_color': '#77c7f2', 'runs': 70, 'outs': 2, 'balls': 58, 'average': 35.0, 'strike_rate': 120.69, 'sixes': 2, 'fours': 4, 'dots': 4});

  useEffect(()=>{
    console.log("hi" , batter , bowler);

    if (batter !== "") {
      fetch(`https://ipl-sabermetrics.onrender.com/headon?batter=${encodeURIComponent(batter)}&bowler=${encodeURIComponent(bowler)}`
      , {
        method: 'POST',
      }).then((response) => response.json()).then((json) => { setData(...json); console.log(json) });
    }

    console.log("data" , data["bowler_color"]);
    console.log("data" , data["batter_color"]);
  } , [batter , bowler]);

  // useEffect(()=>{

  //   document.documentElement.style.setProperty('--bowlercolor', data["bowler_color"]);
  //   document.documentElement.style.setProperty('--battercolor', data["batter_color"]);
  // } , [data]);

  return (
    <div>
        <Headonform setBatter = {setBatter} setBowler = {setBowler}></Headonform>
        <HeadonPlayerImage player1 = {batter} player2 = {bowler} batter_img = {data["batter_img"]} bowler_img = {data["bowler_img"]}></HeadonPlayerImage>
        <HeadonComparison runs = {data["runs"]} balls = {data["balls"]} outs = {data["outs"]} average = {data["average"]} strike_rate = {data["strike_rate"]} sixes = {data["sixes"]} fours = {data["fours"]} dots = {data["dots"]}></HeadonComparison>
    </div>
  )
}

export default Headon