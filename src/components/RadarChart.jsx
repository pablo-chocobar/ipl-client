
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

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


export function RadarChartComponent(props) {
    const item = props.dataKey;
    const chartConfig = {
        "stat": {
          label: props.label,
        },
      }

    const chartData = props.data;

  return (
    <Card className = "bg-[#e6d5bc] text-[#60432f] border border-[#c7a26b]">
      <CardHeader className="items-center pb-4 ">
        <CardTitle>Player Overview</CardTitle>
        <CardDescription>
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto max-h-[250px] bg-[#e6d5bc]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey= {props.dataKey} />
            <PolarGrid />
            <Radar
              dataKey= {props.label}
              fill="#957d67"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}