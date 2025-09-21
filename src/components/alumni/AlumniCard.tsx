import type { Alumni } from "../../lib/fixtures";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

interface AlumniCardProps {
  alumni: Alumni;
  onClick: () => void;
}

export function AlumniCard({ alumni, onClick }: AlumniCardProps) {
  return (
    <Card 
      className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group"
      onClick={onClick}
    >
      <CardContent className="p-0">
        {/* Photo */}
        <div className="relative overflow-hidden">
          <img
            src={alumni.photo}
            alt={alumni.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Content */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {alumni.name}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">
              {alumni.currentRole}
            </p>
          </div>
          
          <Badge variant="secondary" className="text-xs">
            Class of {alumni.yearsAttended.split('-')[1]}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
