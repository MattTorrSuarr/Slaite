"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useCVData } from "@/contexts/cv-context"
import { Plus, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export function SkillsForm() {
  const { cvData, addSkill, removeSkill } = useCVData()
  const [skillInput, setSkillInput] = useState("")

  const handleAddSkill = () => {
    if (skillInput.trim()) {
      addSkill(skillInput.trim())
      setSkillInput("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddSkill()
    }
  }

  return (
    <div className="space-y-4 px-2">
      <div className="space-y-2">
        <Label htmlFor="skill-input" className="text-xs">
          Add Skill
        </Label>
        <div className="flex gap-2">
          <Input
            id="skill-input"
            placeholder="e.g., JavaScript, React, Node.js"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="h-8 text-sm"
          />
          <Button onClick={handleAddSkill} size="sm" className="h-8 px-3">
            <Plus className="size-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {cvData.skills.map((skill) => (
          <Badge key={skill.id} variant="secondary" className="gap-1 pr-1">
            {skill.name}
            <button onClick={() => removeSkill(skill.id)} className="ml-1 rounded-full hover:bg-muted">
              <X className="size-3" />
            </button>
          </Badge>
        ))}
      </div>

      {cvData.skills.length === 0 && (
        <p className="text-xs text-muted-foreground">No skills added yet. Add your first skill above.</p>
      )}
    </div>
  )
}
