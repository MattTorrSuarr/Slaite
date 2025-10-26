"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useCVData } from "@/contexts/cv-context"
import { Plus, Trash2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export function ExperienceForm() {
  const { cvData, addExperience, updateExperience, removeExperience } = useCVData()

  return (
    <div className="space-y-4 px-2">
      {cvData.experience.map((exp, index) => (
        <Card key={exp.id} className="p-3 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium">Experience {index + 1}</span>
            <Button variant="ghost" size="sm" onClick={() => removeExperience(exp.id)} className="h-6 w-6 p-0">
              <Trash2 className="size-3" />
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`job-title-${exp.id}`} className="text-xs">
              Job Title
            </Label>
            <Input
              id={`job-title-${exp.id}`}
              placeholder="Senior Developer"
              value={exp.title}
              onChange={(e) => updateExperience(exp.id, { title: e.target.value })}
              className="h-8 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`company-${exp.id}`} className="text-xs">
              Company
            </Label>
            <Input
              id={`company-${exp.id}`}
              placeholder="Tech Corp"
              value={exp.company}
              onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
              className="h-8 text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor={`start-${exp.id}`} className="text-xs">
                Start Date
              </Label>
              <Input
                id={`start-${exp.id}`}
                placeholder="Jan 2020"
                value={exp.startDate}
                onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                className="h-8 text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`end-${exp.id}`} className="text-xs">
                End Date
              </Label>
              <Input
                id={`end-${exp.id}`}
                placeholder="Present"
                value={exp.endDate}
                onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                className="h-8 text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`description-${exp.id}`} className="text-xs">
              Description
            </Label>
            <Textarea
              id={`description-${exp.id}`}
              placeholder="Key responsibilities and achievements..."
              value={exp.description}
              onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
              className="min-h-16 text-sm"
            />
          </div>
        </Card>
      ))}

      <Button onClick={addExperience} variant="outline" size="sm" className="w-full bg-transparent">
        <Plus className="size-4 mr-2" />
        Add Experience
      </Button>
    </div>
  )
}
