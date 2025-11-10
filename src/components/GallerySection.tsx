import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ZoomIn, ChevronRight, ChevronLeft } from "lucide-react";
import image1 from "@/assets/image-1.jpeg";
import image2 from "@/assets/image-2.jpeg";
import image3 from "@/assets/image-3.jpeg";
import image4 from "@/assets/image-4.jpeg";
import image5 from "@/assets/image-5.jpeg";
import image6 from "@/assets/image-6.jpeg";
import image7 from "@/assets/image-7.jpeg";
import image8 from "@/assets/image-8.jpeg";
import image9 from "@/assets/image-9.jpeg";
import image10 from "@/assets/image-10.jpeg";
import image11 from "@/assets/image-11.jpeg";
import image12 from "@/assets/image-12.jpeg";
import image13 from "@/assets/image-13.jpeg";
import image14 from "@/assets/image-14.jpeg";
import image15 from "@/assets/image-15.jpeg";
import image16 from "@/assets/image-16.jpeg";
import image17 from "@/assets/image-17.jpeg";
import image18 from "@/assets/image-18.jpeg";
import image19 from "@/assets/image-19.jpeg";
import image20 from "@/assets/image-20.jpeg";
import image21 from "@/assets/image-21.jpeg";
import image22 from "@/assets/image-22.jpeg";
import image23 from "@/assets/image-23.jpeg";
import image25 from "@/assets/image-25.jpeg";
import image26 from "@/assets/image-26.jpeg";
import image27 from "@/assets/image-27.jpeg";
import image28 from "@/assets/image-28.jpeg";

type ImageItem = {
  id: number;
  src: string;
  alt: string;
};

const galleryImages: ImageItem[] = [
  { id: 1, src: image1, alt: "أسماك الخليج الطازجة" },
  { id: 2, src: image2, alt: "سمك هامور طازج" },
  { id: 3, src: image3, alt: "سمك زبيدي طازج" },
  { id: 4, src: image4, alt: "مشكل الأسماك الطازجة" },
  { id: 5, src: image5, alt: "سمك صافي طازج" },
  { id: 6, src: image6, alt: "جمبري وأسماك طازجة" },
  { id: 7, src: image7, alt: "سمك شعري طازج" },
  { id: 8, src: image8, alt: "سمك كنعد طازج" },
  { id: 9, src: image9, alt: "مشكل المأكولات البحرية" },
  { id: 10, src: image10, alt: "أسماك الخليج المميزة" },
  { id: 11, src: image11, alt: "أسماك طازجة من الخليج" },
  { id: 12, src: image12, alt: "مأكولات بحرية شهية" },
  { id: 13, src: image13, alt: "أطباق بحرية متنوعة" },
  { id: 14, src: image14, alt: "مأكولات بحرية طازجة" },
  { id: 15, src: image15, alt: "أسماك الخليج" },
  { id: 16, src: image16, alt: "مأكولات بحرية فاخرة" },
  { id: 17, src: image17, alt: "طبق بحري مميز" },
  { id: 18, src: image18, alt: "مأكولات بحرية طازجة" },
  { id: 19, src: image19, alt: "أسماك طازجة" },
  { id: 20, src: image20, alt: "مأكولات بحرية متنوعة" },
  { id: 21, src: image21, alt: "أطباق بحرية شهية" },
  { id: 22, src: image22, alt: "مأكولات بحرية طازجة" },
  { id: 23, src: image23, alt: "أسماك الخليج" },
  { id: 24, src: image25, alt: "مأكولات بحرية فاخرة" },
  { id: 25, src: image26, alt: "طبق بحري مميز" },
  { id: 26, src: image27, alt: "مأكولات بحرية طازجة" },
  { id: 27, src: image28, alt: "عرض المأكولات البحرية" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction: "next" | "prev") => {
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage);
    if (direction === "next") {
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex].id);
    } else {
      const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
      setSelectedImage(galleryImages[prevIndex].id);
    }
  };

  return (
    <>
      <section id="gallery" ref={ref} className="py-24 bg-gradient-to-b from-background via-ocean-light to-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider px-4 py-2 bg-secondary/10 rounded-full">
                معرض الصور
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              منتجاتنا
              <span className="block text-secondary mt-2">البحرية الطازجة</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
              <div className="w-2 h-2 bg-accent rounded-full" />
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              جولة بصرية في عالم مؤسسة محار الخليج - اكتشف جودة منتجاتنا البحرية الطازجة
            </p>
          </motion.div>

        
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 left-4 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110"
              aria-label="إغلاق"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110"
              aria-label="السابق"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all hover:scale-110"
              aria-label="التالي"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages
                .filter((img) => img.id === selectedImage)
                .map((image) => (
                  <div key={image.id} className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain rounded-2xl shadow-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                      <p className="text-white font-bold text-xl text-center">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
