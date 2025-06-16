"use client";

import { TrendingUp } from "lucide-react";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function ChartComponent({ eventTypeStats }) {
  const chartData = [
    {
      handsOnEvent: eventTypeStats?.eventTypeCount[0]?.eventCount,
      seminar: eventTypeStats?.eventTypeCount[1]?.eventCount,
    },
  ];

  const chartConfig = {
    handsOnEvent: {
      label: eventTypeStats?.eventTypeCount[0]?.type,
      color: "hsl(var(--chart-1))",
    },
    seminar: {
      label: eventTypeStats?.eventTypeCount[0]?.type,
      color: "hsl(var(--chart-2))",
    },
  };

  const totalEvents = chartData[0].handsOnEvent + chartData[0].seminar;
  const percentageHandsOnEvent =
    (chartData[0].handsOnEvent / totalEvents) * 100;
  const percentageSeminar = (chartData[0].seminar / totalEvents) * 100;

  return (
    <Card className="flex flex-col border border-light-strok w-3/7 p-4 gap-y-0 shadow-none">
      <CardHeader className="items-center  w-full ">
        <CardTitle className="text-dark-green text-xl w-full font-semibold">
          Total Events
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 items-center m-0 p-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto w-full h-36 max-w-[200px] mb-2"
        >
          <RadialBarChart
            data={chartData}
            endAngle={360}
            innerRadius={60}
            outerRadius={100}
          >
            <ChartTooltip
              className="bg-white "
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 10}
                          className="text-sm"
                        >
                          Events
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 14}
                          className="text-2xl font-semibold"
                        >
                          {totalEvents.toLocaleString()}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="handsOnEvent"
              stackId="a"
              cornerRadius={10}
              fill="var(--main-color)"
              className="stroke-transparent stroke-2"
              style={{ marginTop: "20px" }}
            />
            <RadialBar
              dataKey="seminar"
              fill="var(--brown-custome-color)"
              stackId="a"
              cornerRadius={10}
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2.5 text-sm w-4/5 mx-auto">
        <div className="flex justify-between items-center gap-x-5 w-full">
          <div className="flex justify-start items-center gap-x-2">
            <span className="h-9 w-2 rounded-full bg-green"></span>
            <div>
              <p className="text-light-green ">Hands-on Event</p>
              <h1 className="text-dark-green text-xl font-semibold leading-5">
                {chartData[0].handsOnEvent}
              </h1>
            </div>
          </div>
          <span className="h-10 w-10 flex justify-center items-center text-strong-gray bg-light-gray rounded-lg">
            {percentageHandsOnEvent.toFixed(0)}%
          </span>
        </div>
        <div className="flex justify-between items-center gap-x-5 w-full">
          <div className="flex justify-start items-center gap-x-2">
            <span className="h-9 w-2 rounded-full bg-brown"></span>
            <div>
              <p className="text-light-green">Seminar</p>
              <h1 className="text-dark-green text-xl font-semibold leading-5">
                {chartData[0].seminar}
              </h1>
            </div>
          </div>
          <span className="h-10 w-10 flex justify-center items-center text-strong-gray bg-light-gray rounded-lg">
            {percentageSeminar.toFixed(0)}%
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
