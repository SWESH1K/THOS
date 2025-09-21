import { 
  Calendar, 
  FileText, 
  Users, 
  Heart,
  CheckCircle
} from "lucide-react";
import React from "react";

export interface EligibilityCriteria {
  title: string;
  description: string;
  icon: any;
}

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export interface RuleRegulation {
  id: string;
  title: string;
  content: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactInfo {
  phone: string;
  whatsappMessage: string;
}

export interface AdmissionsData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  eligibility: EligibilityCriteria[];
  contact: ContactInfo;
}

export const admissionsData: AdmissionsData = {
  hero: {
    title: "Admissions",
    subtitle: "Opening Our Doors to New Possibilities",
    description: "At THOS (The Heart of Society), we believe every child deserves a loving home and quality education. Our admissions process is designed to welcome children who need care, support, and opportunities to thrive. We are committed to providing a nurturing environment where every child can discover their potential and build a brighter future."
  },
  eligibility: [
    {
      title: "Age Requirements",
      description: "Children between 6 months to 16 years old",
      icon: Calendar
    },
    {
      title: "Background",
      description: "Orphaned, abandoned, or children from families unable to provide care",
      icon: Users
    },
    {
      title: "Health Status",
      description: "Basic health assessment required (we provide medical care for all needs)",
      icon: Heart
    },
    {
      title: "Documentation",
      description: "Birth certificate or age estimation certificate if available",
      icon: FileText
    }
  ],
  contact: {
    phone: "+91 98765 43210",
    whatsappMessage: "Hello! I would like to inquire about the admissions process at THOS orphanage. Could you please provide me with more information?"
  }
};

export const rulesRegulations: RuleRegulation[] = [
  {
    id: "health-safety",
    title: "Health & Safety Requirements",
    content: "All children undergo regular health check-ups and receive necessary medical care. Vaccination records are maintained and updated. Safety protocols are strictly followed throughout the facility. Emergency contact information must be provided and kept current."
  },
  {
    id: "education",
    title: "Educational Standards",
    content: "All school-age children are enrolled in appropriate educational programs. Regular attendance is mandatory unless excused for health reasons. Educational progress is monitored and additional support is provided as needed. Extracurricular activities are encouraged based on individual interests."
  },
  {
    id: "behavior-conduct",
    title: "Behavior & Conduct Guidelines",
    content: "Respect for others and property is expected at all times. Age-appropriate behavioral guidelines are maintained. Positive reinforcement and counseling support behavioral development. Serious behavioral issues are addressed through professional intervention."
  },
  {
    id: "visitation",
    title: "Visitation & Contact Policy",
    content: "Family visits are encouraged when in the child's best interest. All visitors must be pre-approved and follow security protocols. Contact with biological family is maintained when appropriate and safe. Privacy and confidentiality of all children is strictly protected."
  },
  {
    id: "personal-belongings",
    title: "Personal Belongings & Privacy",
    content: "Children may keep reasonable personal items with approval. Room inspections are conducted respectfully for safety and cleanliness. Privacy rights are respected while maintaining appropriate supervision. Lost or damaged items are replaced when possible."
  }
];

export const faqData: FAQ[] = [
  {
    id: "faq1",
    question: "What documents are required for admission?",
    answer: "We require any available identification documents such as birth certificates, school records, or court orders. If formal documents are not available, we work with authorities to establish necessary documentation. The child's well-being is our priority, not paperwork."
  },
  {
    id: "faq2",
    question: "Is there an admission fee or ongoing costs?",
    answer: "There are no admission fees or costs for children entering our care. THOS is supported through donations, grants, and community support. All basic needs including food, clothing, education, and healthcare are provided free of charge."
  },
  {
    id: "faq3",
    question: "What educational opportunities are available?",
    answer: "We provide access to quality education from primary through secondary levels. Children attend local schools or our on-site educational programs. We also offer vocational training, computer literacy, arts and crafts, sports, and life skills development."
  },
  {
    id: "faq4",
    question: "Can family members visit or stay in contact?",
    answer: "Family contact is encouraged when it's in the child's best interest and safe. We facilitate supervised visits and phone calls when appropriate. Our social workers assess each situation individually to determine the best approach for maintaining healthy family relationships."
  }
];
