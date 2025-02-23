"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Switch } from "./switch"
const chartData = [
  { date: "19 June", value: 0 },
  { date: "20 June", value: 2000 },
  { date: "21 June", value: 3500 },
  { date: "22 June", value: 4000 },
  { date: "23 June", value: 5500 },
  { date: "24 June", value: 6500 },
  { date: "25 June", value: 6500 },
]

const chartConfig = {
  desktop: {
    label: "date",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function LineChartLinear() {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <section>
             <CardTitle>Total Revenue</CardTitle>

        </section>

        <section className="flex items-center gap-1" >
            <span className='text-xs'>Month</span>
            <Switch className="h-3">

            </Switch>
            <span className='text-xs'>Week</span>
        </section>

      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}

          >
            <CartesianGrid  />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={4}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="value"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
       
      </CardFooter>
    </Card>
  )
}
