import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Download from "yet-another-react-lightbox/plugins/download";

import galleryData from "@/galleryData.json";

const Gallery = () => {
    const sectionThumbnails: Record<string, { src: string; alt: string }[]> = {
        "Ceremonija": [
            { src: "/bildes/ceremonija/WEB_Ceremonija-1.jpg", alt: "Ceremonija-1" },
            { src: "/bildes/ceremonija/WEB_Ceremonija-16.jpg", alt: "Ceremonija-16" },
            { src: "/bildes/ceremonija/WEB_Ceremonija-177.jpg", alt: "Ceremonija-177" },
        ],
        "Mičošana": [
            { src: "/bildes/micosana/WEB_Micosana-79.jpg", alt: "Micosana-79" },
            { src: "/bildes/micosana/WEB_Micosana-77.jpg", alt: "Micosana-77" },
            { src: "/bildes/micosana/WEB_Micosana-85.jpg", alt: "Micosana-85" },
        ],
        "Sveikšana": [
            { src: "/bildes/sveiksana/WEB_Sveiksana-3.jpg", alt: "Sveiksana-3" },
            { src: "/bildes/sveiksana/WEB_Sveiksana-9.jpg", alt: "Sveiksana-9" },
            { src: "/bildes/sveiksana/WEB_Sveiksana-158.jpg", alt: "Sveiksana-158" },
        ],
        "Svinības": [
            { src: "/bildes/svinibas/WEB_Svinibas-133.jpg", alt: "Svinibas-133" },
            { src: "/bildes/svinibas/WEB_Svinibas-327.jpg", alt: "Svinibas-327" },
            { src: "/bildes/svinibas/WEB_Svinibas-336.jpg", alt: "Svinibas-336" },
        ]
    };

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);
  const [expandedSections, setExpandedSections] = useState({});

  const handleOpen = (sectionImages, index) => {
    setCurrentImages(sectionImages);
    setCurrentIndex(index);
    setOpen(true);
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="space-y-8 p-6">
      {Object.entries(galleryData).map(([section, images]) => {
        const isExpanded = expandedSections[section];
        const displayedImages = isExpanded ? images : sectionThumbnails[section] || images.slice(0, 3);

        return (
          <div key={section} className="border-b pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection(section)}
            >
              <h2 className="text-2xl font-semibold capitalize">{section}</h2>
              <span className="text-blue-500 font-medium">
                {isExpanded ? "Rādīt mazāk ▲" : "Rādīt visus ▼"}
              </span>
            </div>

            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 mt-4">
              {displayedImages.map((img, index) => (
                <img
                  key={img.alt}
                  src={img.src}
                  alt={img.alt}
                  className="w-full mb-4 rounded-xl shadow-md break-inside-avoid cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => {
                    const realIndex = images.findIndex((imgObj) => imgObj.src === img.src);
                    handleOpen(images, realIndex);
                }}
                />
              ))}
            </div>
          </div>
        );
      })}

      {/* Lightbox */}
      {open && (
        <Lightbox
          open={open}
          index={currentIndex}
          close={() => setOpen(false)}
          slides={currentImages.map((img) => ({ src: img.src, title: img.alt }))}
          plugins={[Zoom, Download]}
        />
      )}
    </div>
  );
};

export default Gallery;
