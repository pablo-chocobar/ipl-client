import { ArrowUpDown } from "lucide-react";
import { Button } from "../components/ui/button";

const batRankColumnDefinitions = [
    { key: "name", name: "Name" },
    { key: "innings", name: "Inns" },
    { key: "balls", name: "Balls" },
    { key: "runs", name: "Runs" },
    { key: "highest", name: "HS" },
    { key: "avg", name: "AVG" },
    { key: "strike_rate", name: "SR" },
    { key: "cents", name: "100s" },
    { key: "fifty", name: "50s" },
    { key: "thirty", name: "30s" },
    { key: "outs", name: "Outs" },
    { key: "sixes", name: "6s" },
    { key: "fours", name: "4s" },
    { key: "dots", name: "Dots" },
    { key: "balls_per_boundary", name: "BpB" },
    { key: "balls_per_four", name: "Bp4" },
    { key: "balls_per_six", name: "Bp6" },
    { key: "runs_from_fours", name: "Rf4" },
    { key: "runs_from_sixes", name: "Rf6" },
    { key: "runs_from_boundaries", name: "RfB" },
    { key: "runs_per_boundary", name: "RpB" },
    { key: "basra", name: "BASRA" },
    { key: "dot_ball_percentage", name: "DB%" },
];

const batRankColumns = batRankColumnDefinitions.map(({ key, name }) => ({
    accessorKey: key,
    header: ({ column }) => {
        return (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                {name}
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    },

    cell: ({ row }) => {
        const amount = row.getValue(key)
        return <div className="text-center font-small">{amount}</div>
    }

}));

const batColumnDefinitions = [
    { name: "Year", key: "year" },
    { name: "Inns", key: "innings" },
    { name: "Balls", key: "balls" },
    { name: "Runs", key: "runs" },
    { name: "HS", key: "career_highest" },
    { name: "AVG", key: "average" },
    { name: "SR", key: "strike_rate" },
    { name: "100s", key: "cents" },
    { name: "50s", key: "fifty" },
    { name: "30s", key: "thirty" },
    { name: "Outs", key: "outs" },
    { name: "6s", key: "sixes" },
    { name: "4s", key: "fours" },
    { name: "Dots", key: "dots" },
    { name: "BpB", key: "balls_per_boundary" },
    { name: "Bp4", key: "balls_per_four" },
    { name: "Bp6", key: "balls_per_six" },
    { name: "Rf4", key: "runs_from_fours" },
    { name: "Rf6", key: "runs_from_sixes" },
    { name: "RfB", key: "runs_from_boundaries" },
    { name: "RpB", key: "runs_per_boundary" },
    { name: "BASRA", key: "basra" },
    { name: "DB%", key: "dot_ball_percentage" },
];


const batColumns = batColumnDefinitions.map(({ key, name }) => ({
    accessorKey: key,
    header: ({ column }) => {
        return (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                {name}
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    },

    cell: ({ row }) => {
        const amount = row.getValue(key)
        return <div className="text-center font-small">{amount}</div>
    }

}));

const bowlingColumnDefinitions = [
    { name: "Year", key: "year" },
    { name: "Inns", key: "innings" },
    { name: "Balls", key: "balls" },
    { name: "Overs", key: "overs" },
    { name: "Maidens", key: "maidens" },
    { name: "Runs", key: "runs" },
    { name: "Wkts", key: "wickets" },
    { name: "AVG", key: "average" },
    { name: "Eco", key: "economy" },
    { name: "SR", key: "strike_rate" },
    { name: "WpI", key: "wicketsperinns" },
    { name: "Wp4", key: "wicketsper4overs" },
    { name: "0w", key: "wi0" },
    { name: "3w", key: "wi3" },
    { name: "4w", key: "wi4" },
    { name: "5w", key: "wi5" },
    { name: "Wides", key: "wides" },
    { name: "NB", key: "noballs" },
    { name: "ACC", key: "accuracy" },
  ];

  const bowlColumns = bowlingColumnDefinitions.map(({ key, name }) => ({
    accessorKey: key,
    header: ({ column }) => {
        return (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                {name}
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    },

    cell: ({ row }) => {
        const amount = row.getValue(key)
        return <div className="text-center font-small">{amount}</div>
    }

}));

  const bowlingRankColumnDefinitions = [
    { name: "Name", key: "name" },
    { name: "Inns", key: "innings" },
    { name: "Balls", key: "balls" },
    { name: "Overs", key: "overs_bowled" },
    { name: "Maidens", key: "maidens" },
    { name: "Runs", key: "runs" },
    { name: "Wkts", key: "wickets" },
    { name: "AVG", key: "average" },
    { name: "Eco", key: "economy" },
    { name: "SR", key: "strike_rate" },
    { name: "WpI", key: "wiperinn" },
    { name: "Wp4", key: "wicketsper4overs" },
    { name: "0w", key: "wi0" },
    { name: "3w", key: "wi3" },
    { name: "4w", key: "wi4" },
    { name: "5w", key: "wi5" },
    { name: "Wides", key: "wides" },
    { name: "NB", key: "noballs" },
    { name: "ACC", key: "accuracy" },
  ];


  const bowlRankColumns = bowlingRankColumnDefinitions.map(({ key, name }) => ({
    accessorKey: key,
    header: ({ column }) => {
        return (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                {name}
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    },

    cell: ({ row }) => {
        const amount = row.getValue(key)
        return <div className="text-center font-small">{amount}</div>
    }

}));

export { batRankColumns, batColumns  , bowlColumns , bowlRankColumns}








