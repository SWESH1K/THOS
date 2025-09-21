import type { Alumni } from "../../lib/fixtures";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Badge } from "../ui/badge";
import { X } from "lucide-react";

interface AlumniModalProps {
  alumni: Alumni | null;
  isOpen: boolean;
  onClose: () => void;
}

export function AlumniModal({ alumni, isOpen, onClose }: AlumniModalProps) {
  if (!alumni) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">
            {alumni.name} - Alumni Profile
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header with photo and basic info */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <img
                src={alumni.photo}
                alt={alumni.name}
                className="w-32 h-32 rounded-lg object-cover shadow-lg"
              />
            </div>
            
            <div className="flex-1 space-y-3">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {alumni.name}
                </h2>
                <p className="text-lg text-primary font-medium">
                  {alumni.currentRole}
                </p>
              </div>
              
              <Badge variant="outline" className="text-sm">
                Attended: {alumni.yearsAttended}
              </Badge>
            </div>
          </div>
          
          {/* Bio section */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              Biography
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {alumni.bio}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
