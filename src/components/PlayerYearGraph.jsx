"use client"

import {useState} from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function PlayerYearGraph(props) {
  const [metric, setMetric] = useState("innings");
  const chartConfig = {
    metric: {
      label: metric,
      color: ""
    }
  }

  const cols = props.columns.map(col => col.accessorKey);
  console.log(cols);

  const filteredData = props.data.map(year => {return {"year" : year.year, metric :year[metric] }});
  console.log(filteredData)

  return (
    <Card className ="bg-primary text-content border border-secondary">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b border-secondary py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>
            {props.desc}
          </CardDescription>
        </div>
        <Select value={metric} onValueChange={setMetric}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            {
              cols.map(col => {
                if (col!= "year") return (
                  <SelectItem value= {col} className=""> {col} </SelectItem>
                )
              })
            }
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart accessibilityLayer data={filteredData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              dataKey="metric"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              className="bg-black/50"
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey={"metric"} radius={8}  fill = "hsl(var(--color-content))"/>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

// bg-[#e6d5bc] text-[#60432f] hover:text-[#e6d5bc] aria-[selected=true]:text-[#e6d5bc] 
// bg-[#e6d5bc] text-[#60432f] 