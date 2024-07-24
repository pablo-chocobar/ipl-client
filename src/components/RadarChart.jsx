
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
    <Card className = "">
      <CardHeader className="items-center pb-4 text-content ">
        <CardTitle>Player Overview</CardTitle>
        <CardDescription>
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto max-h-[250px] bg-primary"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} className="bg-black/50"  content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey= {props.dataKey} />
            <PolarGrid />
            <Radar
              dataKey= {props.label}
              fill="hsl(var(--color-content))"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

// bg-[#e6d5bc] text-[#60432f] border border-[#c7a26b]
//  bg-[#e6d5bc]
// #957d67
