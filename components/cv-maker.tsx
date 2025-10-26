"use client"
import { AppSidebar } from "@/components/app-sidebar"
import { CVPreview } from "@/components/cv-preview"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { CVProvider } from "@/contexts/cv-context"

export function CVMaker() {
  return (
    <CVProvider>
      <SidebarProvider defaultOpen={true}>
        <AppSidebar />
        <SidebarInset>
          <CVPreview />
        </SidebarInset>
      </SidebarProvider>
    </CVProvider>
  )
}
