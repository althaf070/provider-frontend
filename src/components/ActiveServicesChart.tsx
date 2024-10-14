import { Footprints, Waves } from "lucide-react"
import { Bar, BarChart, XAxis } from "recharts"
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

  const chartData = [
    { date: "2024-07-15", activejobs: 450, requested: 300 },
    { date: "2024-07-16", activejobs: 380, requested: 420 },
    { date: "2024-07-17", activejobs: 520, requested: 120 },
    { date: "2024-07-18", activejobs: 140, requested: 550 },
    { date: "2024-07-19", activejobs: 600, requested: 350 },
    { date: "2024-07-20", activejobs: 480, requested: 400 },
  ]
  const chartConfig = {
    activejobs: {
      label: "activejobs",
      color: "hsl(var(--chart-1))",
      icon: Footprints,
    },
    requested: {
      label: "requested",
      color: "hsl(var(--chart-2))",
      icon: Waves,
    },
  } satisfies ChartConfig
  
const ActiveServicesChart = () => {
  return (
    <Card style={{backgroundColor:"transparent",border:"none"}}>
    <CardHeader>
      <CardTitle>Job requests</CardTitle>
      <CardDescription>Active services and newly requested services</CardDescription>
    </CardHeader>
    <CardContent>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey="date"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => {
              return new Date(value).toLocaleDateString("en-US", {
                weekday: "short",
              })
            }}
          />
          <Bar
            dataKey="activejobs"
            stackId="a"
            fill="var(--color-activejobs)"
            radius={[0, 0, 4, 4]}
          />
          <Bar
            dataKey="requested"
            stackId="a"
            fill="var(--color-requested)"
            radius={[4, 4, 0, 0]}
          />
          <ChartTooltip
            content={<ChartTooltipContent hideLabel />}
            cursor={false}
            defaultIndex={1}
          />
        </BarChart>
      </ChartContainer>
    </CardContent>
  </Card>
  )
}

export default ActiveServicesChart