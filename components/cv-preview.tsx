"use client"

import { useCVData } from "@/contexts/cv-context"
import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function CVPreview() {
  const { cvData } = useCVData()

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Header with actions */}
      <header className="flex items-center justify-between border-b p-4 print:hidden">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
        </div>
        <div className="flex gap-2">
          <Button onClick={handlePrint} variant="outline" size="sm">
            <Printer className="size-4 mr-2" />
            Print / Save PDF
          </Button>
        </div>
      </header>

      {/* CV Preview */}
      <div className="flex-1 overflow-auto bg-muted/30 p-8">
        <div className="mx-auto max-w-4xl bg-background shadow-lg print:shadow-none">
          <div className="cv-content p-12">
            {/* Personal Info Section */}
            <div className="mb-8 border-b pb-6">
              <h1 className="text-4xl font-bold text-balance mb-2">{cvData.personalInfo.fullName || "Your Name"}</h1>
              <p className="text-xl text-muted-foreground mb-4">
                {cvData.personalInfo.title || "Your Professional Title"}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                {cvData.personalInfo.email && <span>{cvData.personalInfo.email}</span>}
                {cvData.personalInfo.phone && <span>{cvData.personalInfo.phone}</span>}
                {cvData.personalInfo.location && <span>{cvData.personalInfo.location}</span>}
              </div>
            </div>

            {/* Summary Section */}
            {cvData.personalInfo.summary && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3 border-b pb-2">Professional Summary</h2>
                <p className="text-sm leading-relaxed text-pretty">{cvData.personalInfo.summary}</p>
              </div>
            )}

            {/* Experience Section */}
            {cvData.experience.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Work Experience</h2>
                <div className="space-y-6">
                  {cvData.experience.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{exp.title || "Job Title"}</h3>
                          <p className="text-muted-foreground">{exp.company || "Company Name"}</p>
                        </div>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                          {exp.startDate || "Start"} - {exp.endDate || "End"}
                        </span>
                      </div>
                      {exp.description && (
                        <p className="text-sm leading-relaxed text-pretty whitespace-pre-line">{exp.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education Section */}
            {cvData.education.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Education</h2>
                <div className="space-y-4">
                  {cvData.education.map((edu) => (
                    <div key={edu.id}>
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <h3 className="font-semibold">{edu.degree || "Degree"}</h3>
                          <p className="text-muted-foreground">{edu.school || "School Name"}</p>
                        </div>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                          {edu.startYear || "Start"} - {edu.endYear || "End"}
                        </span>
                      </div>
                      {edu.description && (
                        <p className="text-sm text-muted-foreground text-pretty">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Section */}
            {cvData.skills.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {cvData.skills.map((skill) => (
                    <span key={skill.id} className="px-3 py-1 bg-muted rounded-md text-sm">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Empty state */}
            {!cvData.personalInfo.fullName &&
              cvData.experience.length === 0 &&
              cvData.education.length === 0 &&
              cvData.skills.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  <p className="text-lg mb-2">Start building your CV</p>
                  <p className="text-sm">Fill in your information in the sidebar to see your CV come to life</p>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}
