"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useCVData } from "@/contexts/cv-context"

export function PersonalInfoForm() {
  const { cvData, updatePersonalInfo } = useCVData()

  return (
    <div className="space-y-4 px-2">
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-xs">
          Full Name
        </Label>
        <Input
          id="fullName"
          placeholder="John Doe"
          value={cvData.personalInfo.fullName}
          onChange={(e) => updatePersonalInfo({ fullName: e.target.value })}
          className="h-8 text-sm"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="title" className="text-xs">
          Professional Title
        </Label>
        <Input
          id="title"
          placeholder="Software Engineer"
          value={cvData.personalInfo.title}
          onChange={(e) => updatePersonalInfo({ title: e.target.value })}
          className="h-8 text-sm"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-xs">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          value={cvData.personalInfo.email}
          onChange={(e) => updatePersonalInfo({ email: e.target.value })}
          className="h-8 text-sm"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-xs">
          Phone
        </Label>
        <Input
          id="phone"
          placeholder="+1 (555) 123-4567"
          value={cvData.personalInfo.phone}
          onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
          className="h-8 text-sm"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location" className="text-xs">
          Location
        </Label>
        <Input
          id="location"
          placeholder="New York, NY"
          value={cvData.personalInfo.location}
          onChange={(e) => updatePersonalInfo({ location: e.target.value })}
          className="h-8 text-sm"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="summary" className="text-xs">
          Professional Summary
        </Label>
        <Textarea
          id="summary"
          placeholder="Brief description of your professional background..."
          value={cvData.personalInfo.summary}
          onChange={(e) => updatePersonalInfo({ summary: e.target.value })}
          className="min-h-20 text-sm"
        />
      </div>
    </div>
  )
}
