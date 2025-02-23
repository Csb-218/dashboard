'use client';

import { Card, CardContent } from "@/components/ui/card"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { Slider } from "@/components/ui/slider";

const TeamMoods = ({team_moods}) => {
  return (
    <div className="p-2 rounded shadow h-full">
    <h2 className="text-xl my-2">Team Mood</h2>
    {/* mood card */}
    <div className="space-y-4 ">
       {
      team_moods.map((member, index) => {
        return (
          <Card key={index} className="h-24 border-0 shadow-none ">
            <CardContent className=" aspect-video items-center justify-center p-2 ">

              <div className="flex mb-3">
                <Avatar>
                  <AvatarImage src={member.picture} className="object-cover" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="mx-2">
                  <p>Andrea</p>
                  <p className='text-xs text-muted-foreground'>UX Junior</p>
                </div>

              </div>
              <Slider key={index} defaultValue={[member.mood_score]} max={100} step={1} emoji={member.emoji} />
            </CardContent>
          </Card>
        )
      })
    }
    </div>
   

  </div>
  )
}

export default TeamMoods