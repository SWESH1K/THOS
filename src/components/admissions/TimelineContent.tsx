import { Badge } from "../ui/badge";
import { CheckCircle } from "lucide-react";
import type { TimelineEntry } from "../../data/admissionsData";

export const getProcessTimelineData = (): TimelineEntry[] => [
  {
    title: "Initial Inquiry & Application",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-700 dark:text-neutral-300">
          Submit initial application through our online form or visit our facility. 
          Our team will review your case and schedule an initial consultation.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Online Application</Badge>
          <Badge variant="outline">In-Person Visit</Badge>
          <Badge variant="outline">Phone Consultation</Badge>
        </div>
      </div>
    )
  },
  {
    title: "Documentation & Assessment",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-700 dark:text-neutral-300">
          Gather necessary documents and conduct comprehensive assessment of the child's 
          needs, background, and current situation. Medical and psychological evaluations 
          are arranged as needed.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm">Health Assessment</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm">Educational Evaluation</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm">Psychological Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span className="text-sm">Background Verification</span>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Review & Decision",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-700 dark:text-neutral-300">
          Our admissions committee reviews all cases with compassion and care. 
          Decisions are based on the child's best interests and our capacity to provide 
          appropriate care and support.
        </p>
        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Timeline:</strong> Review process typically takes 5-7 business days 
            after all documentation is complete.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Welcome & Integration",
    content: (
      <div className="space-y-4">
        <p className="text-neutral-700 dark:text-neutral-300">
          Upon acceptance, we work with the child and any accompanying family members 
          to ensure a smooth transition. Our team provides orientation and ongoing support 
          to help each child settle into their new home.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Orientation Program</Badge>
          <Badge variant="secondary">Buddy System</Badge>
          <Badge variant="secondary">Family Counseling</Badge>
          <Badge variant="secondary">Educational Planning</Badge>
        </div>
      </div>
    )
  }
];
