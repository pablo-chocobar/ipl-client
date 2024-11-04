import { React, useState, useEffect, useContext } from 'react'
import PlayerProfileHero from '../components/PlayerProfileHero';

import { DataTable } from "../components/BattingTable"
import { ChevronsUpDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

import { batting, bowling, players } from '@/db/schema';
import * as schema from "@/db/schema";
import { batRankColumns, bowlRankColumns, batColumns, bowlColumns } from '../components/Columns';

import { getBatterStatsByYear } from '@/lib/batter';
import { getBowlerStatsByYear } from '@/lib/bowler';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq } from 'drizzle-orm';
import { SearchContext } from '../components/SearchContext';

import { PlayerStatTabs } from '@/components/PlayerYearCard';
import { PlayerYearGraph } from '@/components/PlayerYearGraph';

const POSTGRES_URL = "postgresql://ipldb_owner:bE0rGxJ3XWhg@ep-crimson-boat-a1jkytyd.ap-southeast-1.aws.neon.tech/ipldb?sslmode=require"

const sql = neon(POSTGRES_URL);
const db = drizzle(sql, {
  schema
});

function Player() {
  const [battingData, setBatting] = useState(null);
  const [bowlingData, setBowling] = useState(null);
  const [yearBattingData, setYearBattingData] = useState(null);
  const [yearBowlingData, setYearBowlingData] = useState(null);
  const [player, setPlayer] = useState({ "name": "V Kohli" });

  const { searchQuery } = useContext(SearchContext);

  async function dataloader(name) {
    const batting_stats = await db.select().from(batting).where(
      eq(batting.name, name)
    ).then(response => setBatting(response[0]));

    const year_bat_stats = await getBatterStatsByYear(name).then(
      response => setYearBattingData(response.sort((a, b) => a.year - b.year))
    );

    const bowling_stats = await db.select().from(bowling).where(
      eq(bowling.name, name)
    ).then(response => setBowling(response[0]));

    const year_bowl_stats = await getBowlerStatsByYear(name).then(
      response => setYearBowlingData(response.sort((a, b) => a.year - b.year))
    );

    const player_data = await db.select().from(players).where(
      eq(name, players.name)
    ).then(response => setPlayer(response[0]));
  }

  useEffect(() => {
    dataloader(searchQuery ? searchQuery : "V Kohli");
  }, [searchQuery])

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {battingData && player && (
          <PlayerProfileHero player={player} batstats={battingData} bowlstats={bowlingData} />
        )}

        {battingData && battingData.balls > 0 && (
          <div className="mt-8">
            <h2 className="text-3xl font-extrabold font-PlayfairDisplay mb-4">Batting Career</h2>
            <DataTable columns={batRankColumns} data={[battingData]} />
          </div>
        )}

        {bowlingData && bowlingData.balls > 0 && (
          <div className="mt-8">
            <h2 className="text-3xl font-extrabold font-PlayfairDisplay mb-4">Bowling Career</h2>
            <DataTable columns={bowlRankColumns} data={[bowlingData]} />
          </div>
        )}

        {battingData && battingData.balls > 0 && (
          <Collapsible className="mt-8" defaultOpen={true}>
            <CollapsibleTrigger className="flex justify-between items-center cursor-pointer">
              <h2 className="text-3xl font-extrabold font-PlayfairDisplay">Batting by year</h2>
              <div className="p-2 rounded-lg hover:bg-secondary/80">
                <ChevronsUpDown className="h-4 w-4" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {yearBattingData && (
                <PlayerStatTabs
                  Table={<DataTable columns={batColumns} data={yearBattingData} />}
                  Graph={
                    <PlayerYearGraph
                      columns={batColumns}
                      data={yearBattingData}
                      title="Batting Chart"
                      desc="Batting stats over the years"
                    />
                  }
                />
              )}
            </CollapsibleContent>
          </Collapsible>
        )}

        {bowlingData && bowlingData.balls > 0 && (
          <Collapsible className="mt-8" defaultOpen={true}>
            <CollapsibleTrigger className="flex justify-between items-center cursor-pointer">
              <h2 className="text-3xl font-extrabold font-PlayfairDisplay">Bowling by year</h2>
              <div className="p-2 rounded-lg hover:bg-secondary/80">
                <ChevronsUpDown className="h-4 w-4" />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {yearBowlingData && (
                <PlayerStatTabs
                  Table={<DataTable columns={bowlColumns} data={yearBowlingData} />}
                  Graph={
                    <PlayerYearGraph
                      columns={bowlColumns}
                      data={yearBowlingData}
                      title="Bowling Chart"
                      desc="Bowling stats over the years"
                    />
                  }
                />
              )}
            </CollapsibleContent>
          </Collapsible>
        )}
      </div>
    </div>
  )
}

export default Player