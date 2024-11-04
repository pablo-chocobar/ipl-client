import React from 'react'
import { RadarChartComponent } from '@/components/RadarChart'

function parseTeamString(teamString) {
  const validJsonString = teamString.replace(/'/g, '"');
  var teams = JSON.parse(validJsonString);
  teams = teams.map(team => {
    if (team === 'Royal Challengers Bangalore') {
      return "Royal Challengers Bengaluru";
    } else if (team === "Rising Pune Supergiants") {
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
  let stats = [];

  if (props.batstats && props.batstats.runs > 0 && props.bowlstats && props.bowlstats.wickets > 0) {
    stats = [
      { "stat": "Batting SR", "value": props.batstats.strike_rate },
      { "stat": "Batting Avg", "value": props.batstats.avg },
      { "stat": "Bowling Avg", "value": props.bowlstats.average },
      { "stat": "30s", "value": props.batstats.thirty },
      { "stat": "50s", "value": props.batstats.fifty },
      { "stat": "wickets", "value": props.bowlstats.wickets },
    ];
  } else if (props.batstats && props.batstats.outs > 0 && props.batstats.runs > 0) {
    stats = [
      { "stat": "Batting SR", "value": props.batstats.strike_rate },
      { "stat": "Avg", "value": props.batstats.avg },
      { "stat": "30s", "value": props.batstats.thirty },
      { "stat": "50s", "value": props.batstats.fifty },
    ];
  } else {
    stats = [
      { "stat": "Bowling SR", "value": props.bowlstats.strike_rate },
      { "stat": "Bowling Avg", "value": props.bowlstats.average },
      { "stat": "3w", "value": props.bowlstats.wi3 },
      { "stat": "5W", "value": props.bowlstats.wi5 },
      { "stat": "wickets", "value": props.bowlstats.wickets },
    ];
  }

  stats = normalizeStats(stats);

  return (
    <section className='my-4 px-4 sm:px-8 lg:px-16'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
        <div className='flex justify-center items-center'>
          <div className='object-contain z-10 h-fit'>
            <img src={props.player.image} className='max-h-96 w-full object-cover rounded-lg shadow-lg' />
          </div>
        </div>
        <div className='flex flex-col overflow-hidden space-y-4'>
          <div className='rounded-lg shadow-lg p-4'>
            <h2 className='text-3xl font-extrabold font-PlayfairDisplay mb-2'>{props.player.name}</h2>
            <div className='text-2xl font-extrabold font-PlayfairDisplay'>
              {props.player.team && <span>{parseTeamString(props.player.team).join(", ")}</span>}
            </div>
          </div>
          <RadarChartComponent data={stats} label={"value"} dataKey={"stat"} />
        </div>
      </div>
    </section>
  )
}

export default PlayerProfileHero