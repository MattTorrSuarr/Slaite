"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export interface PersonalInfo {
  fullName: string
  title: string
  email: string
  phone: string
  location: string
  summary: string
}

export interface Experience {
  id: string
  title: string
  company: string
  startDate: string
  endDate: string
  description: string
}

export interface Education {
  id: string
  degree: string
  school: string
  startYear: string
  endYear: string
  description: string
}

export interface Skill {
  id: string
  name: string
}

export interface CVData {
  personalInfo: PersonalInfo
  experience: Experience[]
  education: Education[]
  skills: Skill[]
}

interface CVContextType {
  cvData: CVData
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void
  addExperience: () => void
  updateExperience: (id: string, data: Partial<Experience>) => void
  removeExperience: (id: string) => void
  addEducation: () => void
  updateEducation: (id: string, data: Partial<Education>) => void
  removeEducation: (id: string) => void
  addSkill: (name: string) => void
  removeSkill: (id: string) => void
}

const initialState: CVData = {
  personalInfo: {
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    summary: "",
  },
  experience: [],
  education: [],
  skills: [],
}

const CVContext = createContext<CVContextType | undefined>(undefined)

export function CVProvider({ children }: { children: ReactNode }) {
  const [cvData, setCVData] = useState<CVData>(initialState)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("cv-data-storage")
    if (stored) {
      try {
        setCVData(JSON.parse(stored))
      } catch (e) {
        console.error("Failed to parse stored CV data:", e)
      }
    }
    setIsLoaded(true)
  }, [])

  // Save to localStorage whenever cvData changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cv-data-storage", JSON.stringify(cvData))
    }
  }, [cvData, isLoaded])

  const updatePersonalInfo = (info: Partial<PersonalInfo>) => {
    setCVData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info },
    }))
  }

  const addExperience = () => {
    setCVData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: crypto.randomUUID(),
          title: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }))
  }

  const updateExperience = (id: string, data: Partial<Experience>) => {
    setCVData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) => (exp.id === id ? { ...exp, ...data } : exp)),
    }))
  }

  const removeExperience = (id: string) => {
    setCVData((prev) => ({
      ...prev,
      experience: prev.experience.filter((exp) => exp.id !== id),
    }))
  }

  const addEducation = () => {
    setCVData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: crypto.randomUUID(),
          degree: "",
          school: "",
          startYear: "",
          endYear: "",
          description: "",
        },
      ],
    }))
  }

  const updateEducation = (id: string, data: Partial<Education>) => {
    setCVData((prev) => ({
      ...prev,
      education: prev.education.map((edu) => (edu.id === id ? { ...edu, ...data } : edu)),
    }))
  }

  const removeEducation = (id: string) => {
    setCVData((prev) => ({
      ...prev,
      education: prev.education.filter((edu) => edu.id !== id),
    }))
  }

  const addSkill = (name: string) => {
    setCVData((prev) => ({
      ...prev,
      skills: [
        ...prev.skills,
        {
          id: crypto.randomUUID(),
          name,
        },
      ],
    }))
  }

  const removeSkill = (id: string) => {
    setCVData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill.id !== id),
    }))
  }

  return (
    <CVContext.Provider
      value={{
        cvData,
        updatePersonalInfo,
        addExperience,
        updateExperience,
        removeExperience,
        addEducation,
        updateEducation,
        removeEducation,
        addSkill,
        removeSkill,
      }}
    >
      {children}
    </CVContext.Provider>
  )
}

export function useCVData() {
  const context = useContext(CVContext)
  if (context === undefined) {
    throw new Error("useCVData must be used within a CVProvider")
  }
  return context
}
