'use client';

import React from 'react';
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

interface Project {
  name: string;
  client: string;
  budget: number;
  profitability: number;
  hours: {
    actual: number;
    sold: number;
  };
  status: string;
  completed_shade: string;
  remaining_shade: string;
}

interface BudgetStatusProps {
  projects: Project[];
}

const BudgetStatus: React.FC<BudgetStatusProps> = ({ projects = [] }) => {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {projects.map((project, index) => (
        <Card key={index} className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-medium">{project.name || 'Untitled'}</h3>
              <p className="text-sm text-muted-foreground">
                {project.client || 'No Client'}
              </p>
            </div>
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt={project.client || 'Avatar'}
              />
              <AvatarFallback>
                {project.client ? project.client.substring(0, 2).toUpperCase() : 'NA'}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Total Budget</span>
              <span className="font-medium">
                {(project.budget || 0).toLocaleString()}€
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Profitability (100%)</span>
              <span
                className={
                  (project.profitability || 0) < 0
                    ? "text-destructive"
                    : "text-primary"
                }
              >
                {(project.profitability || 0).toLocaleString()}€
              </span>
            </div>
          </div>

          <div className="mt-3">
            <Progress
              value={((project.hours?.actual || 0) / (project.hours?.sold || 1)) * 100}
              className={project.completed_shade || 'bg-primary'}
            />
            <div className="mt-2 flex justify-between text-sm">
              <span>
                Actual hours: {(project.hours?.actual || 0).toLocaleString()}
              </span>
              <span>{(project.hours?.sold || 0).toLocaleString()} sold hours</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default BudgetStatus