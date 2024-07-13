import React from 'react'
import { RadarChartComponent } from '@/components/RadarChart';

function parseTeamString(teamString) {
  const validJsonString = teamString.replace(/'/g, '"');
  var teams =  JSON.parse(validJsonString);
  teams = teams.map(team => {
    if (team === 'Royal Challengers Bangalore') {
      return "Royal Challengers Bengaluru";
    }
    else if (team === "Rising Pune Supergiants"){
      return "Rising Pune Supergiant"
    }
    return team;
  });

  return [...new Set(teams)];
}

function normalizeStats(stats) {
  let minMax = {};

  stats.forEach(stat => {
      if (!minMax[stat.stat]) {
          minMax[stat.stat] = {
              min: stat.value,
              max: stat.value
          };
      } else {
          minMax[stat.stat].min = Math.min(minMax[stat.stat].min, stat.value);
          minMax[stat.stat].max = Math.max(minMax[stat.stat].max, stat.value);
      }
  });

  stats.forEach(stat => {
      let { min, max } = minMax[stat.stat];
      stat.normalized_value = (stat.value - min) / (max - min);
  });

  return stats;
}


function PlayerProfileHero(props) {

  if (props.batstats && props.batstats.runs>0 && props.bowlstats && props.bowlstats.wickets>0){
    var stats = [{"stat": "Batting SR", "value": props.batstats.strike_rate},
    {"stat": "Batting Avg", "value": props.batstats.avg},
    {"stat": "Bowling Avg", "value": props.bowlstats.average},
    {"stat": "30s", "value": props.batstats.thirty},
    {"stat": "50s", "value": props.batstats.fifty},
    {"stat": "wickets", "value": props.bowlstats.wickets},]
  }
  else if (props.batstats && props.batstats.outs>0 && props.batstats.runs>0 ){
    var stats = [{"stat": "Batting SR", "value": props.batstats.strike_rate},
    {"stat": "Avg", "value": props.batstats.avg},
    {"stat": "30s", "value": props.batstats.thirty},
    {"stat": "50s", "value": props.batstats.fifty},]
  }
  else {
    var stats = [{"stat": "Bowling SR", "value": props.bowlstats.strike_rate},
    {"stat": "Bowling Avg", "value": props.bowlstats.average},
    {"stat": "3w", "value": props.bowlstats.wi3},
    {"stat": "5W", "value": props.bowlstats.wi5},
    {"stat": "wickets", "value": props.bowlstats.wickets},]
  }

  console.log(stats)

  stats = normalizeStats(stats);
  return (
    <section className='my-4'>
      <div className='grid grid-flow-col grid-cols-2'>
        
        <div className='flex justify-center align-middle items-center'>
          <div className='object-contain z-10 h-fit'>
            <img src={props.player.image} className='max-h-96' />
          </div>
        </div>

        <div className='flex flex-col overflow-hidden m-4'>
          <div className='grid grid-rows-3 grid-flow-col gap-4 mb-4'>
            <div className='row-span-3 border border-solid border-content text-content rounded-lg flex flex-col justify-between p-4'>
              <div className='text-xl font-PlayfairDisplay'>
                Name
              </div>
              <div className='text-4xl font-extrabold font-PlayfairDisplay mr-8'>
                {props.player.name}
              </div>
            </div>

          <div className='row-span-3 col-span-2 border border-solid border-content text-content rounded-lg flex flex-col p-4'>
              <div className='text-xl font-PlayfairDisplay'>
                Teams
              </div>
              <div className='text-2xl font-extrabold font-PlayfairDisplay mr-8'>
              {props.player.team && <span>{parseTeamString(props.player.team).join(", ")}</span>}
              </div>
            </div>
          </div>
          <RadarChartComponent data = {stats} label = {"value"} dataKey = "stat" ></RadarChartComponent>
        </div>
      </div>

    </section>
  )
}

export default PlayerProfileHero