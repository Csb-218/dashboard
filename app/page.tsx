'use client';
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { LineChart } from "@/components/LineChart";
import { PieChartDonutText } from "@/components/ui/pie-chart-donut-text";
import { Plus, DownloadIcon, Calendar, FilterIcon, Download, Filter, Grid, AlertTriangle, CheckCircle, RefreshCcw, Users } from "lucide-react"
import TeamMoods from "@/components/TeamMoods"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider";



export default function Home() {

  const projects = [
    {
      name: "Insurance App",
      client: "Verb",
      budget: 70000,
      profitability: -2500,
      hours: { actual: 1000, sold: 1100 },
      status: "delayed",
      completed_shade : "bg-[#e40000]" ,
      remaining_shade : "bg-[#ff758a]"
    },
    {
      name: "Neo",
      client: "Banca",
      budget: 70000,
      profitability: 4000,
      hours: { actual: 1100, sold: 1500 },
      status: "ongoing",
      completed_shade : "bg-[#e59300]" ,
      remaining_shade : "bg-[#fee9b1]"
    },
    {
      name: "VR Website",
      client: "Banca",
      budget: 70000,
      profitability: 4000,
      hours: { actual: 1100, sold: 2000 },
      status: "ongoing",
      completed_shade : "bg-[#007e77]" ,
      remaining_shade : "bg-[#c5e7e5]"
    },
    {
      name: "VR Website 2",
      client: "Banca",
      budget: 70000,
      profitability: 4000,
      hours: { actual: 1100, sold: 1100 },
      status: "completed",
      completed_shade : "bg-[#007e77]" ,
      remaining_shade : "bg-[#c5e7e5]"
    },
  ];

  const team_moods = [
    {
      mood_score: 30,
      Name: "Andrea",
      role: "UX Designer",
      emoji:"😕",
      picture:"https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      mood_score: 100,
      Name: "Alvaro",
      role: "Backend Developer",
      emoji:"😃",
      picture:"https://images.unsplash.com/photo-1599566150163-29194dcaad36"
    },
    {
      mood_score: 80,
      Name: "Juan",
      role: "UX Senior",
      emoji: "🙂",
      picture:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      mood_score: 0,
      Name: "Jose",
      role: "Marketing",
      emoji:'😡',
      picture: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      mood_score: 50,
      Name: "Maria",
      role: "UX Junior",
      emoji: "😐",
      picture:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }
  ]

  return (
    <main className="min-h-screen text-black">
      <div className="container mx-auto px-4 py-16">
        {/* charts */}
        <div className="grid grid-cols-1 md:grid-cols-[auto,35%,15%] gap-2">
          {/* Column 1 */}
          <div className="bg-gray-100 p-0 rounded shadow grid  ">
            {/* Row 1 */}
            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4  m-2 h-min">

              <Card className="p-2 h-fit">
                <div className="grid grid-rows-3 gap-2 ">
                  <div className="rounded-lg  p-1 row-span-1">
                    <Grid className="h-6 w-6 text-teal-500" />
                  </div>
                  <div className="  text-3xl text-center font-bold ">5</div>
                  <div className="  text-sm text-center text-muted-foreground ">Total Projects</div>
                </div>
              </Card>

              <Card className="p-2 h-fit">
                <div className="grid grid-rows-3 gap-2 ">
                  <div className="rounded-lg  p-1 row-span-1">
                    <CheckCircle className="h-6 w-6 text-teal-500" />
                  </div>
                  <div className="  text-3xl text-center font-bold ">1</div>
                  <div className="  text-sm text-center text-muted-foreground ">Completed</div>
                </div>
              </Card>

              <Card className="p-2 h-fit">
                <div className="grid grid-rows-3 gap-2 ">
                  <div className="rounded-lg  p-1 row-span-1">
                    <RefreshCcw className="h-6 w-6 text-teal-500" />
                  </div>
                  <div className="  text-3xl text-center font-bold ">3</div>
                  <div className="  text-sm text-center text-muted-foreground ">Ongoing</div>
                </div>
              </Card>

            </div>
            {/* Row 2 */}
            <div className="p-2 rounded">
              <LineChart />
            </div>
          </div>

          {/* Column 2 */}
          <div className="bg-gray-100 p-0 rounded shadow  h-full">
            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-4  m-2 h-min">

              <Card className="p-2 h-fit bg-red-300">
                <div className="grid grid-rows-3 gap-2 ">
                  <div className="rounded-lg  p-1 row-span-1">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <div className=" text-white text-3xl text-center font-bold ">5</div>
                  <div className=" text-white text-sm text-center text-muted-foreground ">Total Projects</div>
                </div>
              </Card>

              <Card className="p-2 h-fit">
                <div className="grid grid-rows-3 gap-2 ">
                  <div className="rounded-lg  p-1 row-span-1">
                    <Users className="h-6 w-6 text-teal-500" />
                  </div>
                  <div className="  text-3xl text-center font-bold ">1</div>
                  <div className="  text-sm text-center text-muted-foreground ">Completed</div>
                </div>
              </Card>
            </div>

            {/* Row 2 */}
            <div className=" p-2 rounded ">
              <PieChartDonutText />
            </div>
          </div>

          {/* column 3 */}
          {/* Team mood */}
          <TeamMoods team_moods={team_moods}/>
        </div>

        {/* budget status */}
        <section className="my-5">
          <div className="space-y-6">
            <div className="flex items-center justify-start">
              <h2 className="text-2xl font-bold">Budget status</h2>
              <div className="flex gap-2 mx-4 ">
                <Button className='bg-[#22ad9f] hover:bg-[#259085]'>
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Project
                </Button>
                <Button variant="outline" className="text-[#22ad9f] hover:text-[#259085] ">
                  <Download className="mr-2 h-4 w-4" />
                  Download report
                </Button>
                <Button variant="outline" className="text-[#22ad9f] hover:text-[#259085]">
                  <Calendar className="mr-2 h-4 w-4" />
                  dd/mm/yyyy - dd/mm/yyyy
                </Button>
                <Button variant="outline" className="text-[#22ad9f] hover:text-[#259085]">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {projects.map((project, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {project.client}
                      </p>
                    </div>
                    <Avatar>
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                        alt={project.client}
                      />
                      <AvatarFallback>
                        {project.client.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Total Budget</span>
                      <span className="font-medium">
                        {project.budget.toLocaleString()}€
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Profitability (100%)</span>
                      <span
                        className={
                          project.profitability < 0
                            ? "text-destructive"
                            : "text-primary"
                        }
                      >
                        {project.profitability.toLocaleString()}€
                      </span>
                    </div>
                    
                    
                  </div>


                  <div className="mt-3 ">
                  {/* <span className="right-0 w-90 text-red-600  w-full"><AlertTriangle/></span> */}
                    <Progress
                      value={(project.hours.actual / project.hours.sold) * 100}
                      barColour={project.remaining_shade}
                      strokeColour={project.completed_shade}
                      

                    />
                    <div className="mt-2 flex justify-between text-sm">
                      <span>
                        Actual hours: {project.hours.actual.toLocaleString()}
                      </span>
                      <span>{project.hours.sold.toLocaleString()} sold hours</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div >
    </main >
  );
}