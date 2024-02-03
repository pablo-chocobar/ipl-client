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
    { name: "Inns", key: "inns" },
    { name: "Balls", key: "balls" },
    { name: "Runs", key: "runs" },
    { name: "HS", key: "HS" },
    { name: "AVG", key: "avg" },
    { name: "SR", key: "sr" },
    { name: "100s", key: "100s" },
    { name: "50s", key: "50s" },
    { name: "30s", key: "30s" },
    { name: "Outs", key: "outs" },
    { name: "6s", key: "6s" },
    { name: "4s", key: "4s" },
    { name: "Dots", key: "dots" },
    { name: "BpB", key: "bpb" },
    { name: "Bp4", key: "bp4" },
    { name: "Bp6", key: "bp6" },
    { name: "Rf4", key: "Rf4" },
    { name: "Rf6", key: "Rf6" },
    { name: "RfB", key: "Rfb" },
    { name: "RpB", key: "Rpb" },
    { name: "BASRA", key: "basra" },
    { name: "DB%", key: "db%" },
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
    { name: "Inns", key: "inns" },
    { name: "Balls", key: "balls" },
    { name: "Overs", key: "overs" },
    { name: "Maidens", key: "maidens" },
    { name: "Runs", key: "runs" },
    { name: "Wkts", key: "wkts" },
    { name: "AVG", key: "avg" },
    { name: "Eco", key: "eco" },
    { name: "SR", key: "sr" },
    { name: "WpI", key: "WpI" },
    { name: "Wp4", key: "Wp4" },
    { name: "0w", key: "0w" },
    { name: "3w", key: "3w" },
    { name: "4w", key: "4w" },
    { name: "5w", key: "5w" },
    { name: "Wides", key: "Wides" },
    { name: "NB", key: "nb" },
    { name: "ACC", key: "acc" },
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
    { name: "Overs", key: "overs" },
    { name: "Maidens", key: "maidens" },
    { name: "Runs", key: "runs" },
    { name: "Wkts", key: "wickets" },
    { name: "AVG", key: "avg" },
    { name: "Eco", key: "economy" },
    { name: "SR", key: "strike_rate" },
    { name: "WpI", key: "wiperinns" },
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








