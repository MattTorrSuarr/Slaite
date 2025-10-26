"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useCVData } from "@/contexts/cv-context"
import { Plus, Trash2 } from "lucide-react"
import { Card } from "@/components/ui/card"

export function EducationForm() {
  const { cvData, addEducation, updateEducation, removeEducation } = useCVData()

  return (
    <div className="space-y-4 px-2">
      {cvData.education.map((edu, index) => (
        <Card key={edu.id} className="p-3 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium">Education {index + 1}</span>
            <Button variant="ghost" size="sm" onClick={() => removeEducation(edu.id)} className="h-6 w-6 p-0">
              <Trash2 className="size-3" />
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`degree-${edu.id}`} className="text-xs">
              Degree
            </Label>
            <Input
              id={`degree-${edu.id}`}
              placeholder="Bachelor of Science"
              value={edu.degree}
              onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
              className="h-8 text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`school-${edu.id}`} className="text-xs">
              School
            </Label>
            <Input
              id={`school-${edu.id}`}
              placeholder="University Name"
              value={edu.school}
              onChange={(e) => updateEducation(edu.id, { school: e.target.value })}
              className="h-8 text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <Label htmlFor={`edu-start-${edu.id}`} className="text-xs">
                Start Year
              </Label>
              <Input
                id={`edu-start-${edu.id}`}
                placeholder="2016"
                value={edu.startYear}
                onChange={(e) => updateEducation(edu.id, { startYear: e.target.value })}
                className="h-8 text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor={`edu-end-${edu.id}`} className="text-xs">
                End Year
              </Label>
              <Input
                id={`edu-end-${edu.id}`}
                placeholder="2020"
                value={edu.endYear}
                onChange={(e) => updateEducation(edu.id, { endYear: e.target.value })}
                className="h-8 text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`edu-description-${edu.id}`} className="text-xs">
              Description (Optional)
            </Label>
            <Textarea
              id={`edu-description-${edu.id}`}
              placeholder="GPA, honors, relevant coursework..."
              value={edu.description}
              onChange={(e) => updateEducation(edu.id, { description: e.target.value })}
              className="min-h-16 text-sm"
            />
          </div>
        </Card>
      ))}

      <Button onClick={addEducation} variant="outline" size="sm" className="w-full bg-transparent">
        <Plus className="size-4 mr-2" />
        Add Education
      </Button>
    </div>
  )
}
