
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A line chart with dots"

const chartData = [
    { month: "January", jobsCompleted: 15,  },
    { month: "February", jobsCompleted: 20 },
    { month: "March", jobsCompleted: 50, },
    { month: "April", jobsCompleted: 30, },
    { month: "May", jobsCompleted: 10,  },
    { month: "June", jobsCompleted: 11,  },
    { month: "June", jobsCompleted: 10,  },
    { month: "June", jobsCompleted: 111,  },
    { month: "June", jobsCompleted: 11,  },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function LineCharts() {
  return (
    <div className="overflow-scroll md:overflow-hidden">
    <Card style={{backgroundColor:"transparent",border:"none"}}>
      <CardHeader>
        <CardTitle>Monthly Perfomance</CardTitle>
        <CardDescription>Previous Months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[25dvh]">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="jobsCompleted"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
    </div>
  )
}
