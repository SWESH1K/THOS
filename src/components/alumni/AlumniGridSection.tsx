import { useState } from "react";
import { alumniData } from "../../lib/fixtures";
import type { Alumni } from "../../lib/fixtures";
import { AlumniCard, AlumniModal } from ".";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

export function AlumniGridSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAlumni, setSelectedAlumni] = useState<Alumni | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter alumni based on search term
  const filteredAlumni = alumniData.filter((alumni: Alumni) =>
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.currentRole.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.yearsAttended.includes(searchTerm)
  );

  const handleCardClick = (alumni: Alumni) => {
    setSelectedAlumni(alumni);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAlumni(null);
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Search Section */}
        <div className="mb-12 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search alumni by name, role, or year..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2 text-center">
            {filteredAlumni.length} alumni found
          </p>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAlumni.map((alumni) => (
            <AlumniCard
              key={alumni.id}
              alumni={alumni}
              onClick={() => handleCardClick(alumni)}
            />
          ))}
        </div>

        {/* No results message */}
        {filteredAlumni.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No alumni found matching your search criteria.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Try adjusting your search terms or clear the search to see all alumni.
            </p>
          </div>
        )}

        {/* Alumni Modal */}
        <AlumniModal
          alumni={selectedAlumni}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}
