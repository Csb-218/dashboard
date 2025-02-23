"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import { Switch } from "./switch"
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"


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

const chartData = [
  { browser: "chrome", visitors: 2.4, fill: "hsl(0deg 100% 44.71%)" },
  { browser: "safari", visitors: 1.65, fill: "hsl(173.48deg 100% 43.33%)" },
  { browser: "firefox", visitors: 0.95, fill: "hsl(226.52deg 49.17% 64.51%)" },
]

const chartConfig = {
  visitors: {
    label: "Projects",
  },
  chrome: {
    label: "Over Budget",
    color: "hsl(0deg 100% 44.71%)",
  },
  safari: {
    label: "On Budget",
    color: "hsl(173.48deg 100% 43.33%)",
  },
  firefox: {
    label: "Under Budget",
    color: "hsl(226.52deg 49.17% 64.51%)",
  },
} satisfies ChartConfig

export function PieChartDonutText() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
  }, [])

  return (
    <Card className="flex flex-col ">
      <CardHeader className="items-center flex flex-row justify-between pb-0">
        <CardTitle>Budget</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
        <section className="flex items-center gap-1">
            <p className="text-xs">Profitability</p>
            <Switch className="h-3">

            </Switch>
            <p className="text-xs">Status</p>
        </section>
        
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[355px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={80}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Projects
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
            <ChartLegend content={<ChartLegendContent />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
       
      </CardFooter>
    </Card>
  )
}
