import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Image as ImageIcon } from "lucide-react";
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
  { id: 5, src: image5, alt: "مأكولات بحرية فاخرة" },
  { id: 6, src: image6, alt: "سمك طازج" },
  { id: 7, src: image7, alt: "مأكولات بحرية متنوعة" },
  { id: 8, src: image8, alt: "طبق بحري شهي" },
  { id: 9, src: image9, alt: "مأكولات بحرية طازجة" },
  { id: 10, src: image10, alt: "عرض المأكولات" },
  { id: 11, src: image11, alt: "سمك مشوي على الفحم" },
  { id: 12, src: image12, alt: "مأكولات بحرية شهية" },
  { id: 13, src: image13, alt: "أطباق بحرية متنوعة" },
  { id: 14, src: image14, alt: "مأكولات بحرية طازجة" },
  { id: 16, src: image16, alt: "مأكولات بحرية فاخرة" },
  { id: 17, src: image17, alt: "طبق بحري مميز" },
  { id: 18, src: image18, alt: "مأكولات بحرية طازجة" },
  { id: 19, src: image19, alt: "سمك طازج مشوي" },
  { id: 20, src: image20, alt: "مأكولات بحرية متنوعة" },
  { id: 21, src: image21, alt: "أطباق بحرية شهية" },
  { id: 22, src: image22, alt: "مأكولات بحرية طازجة" },
  { id: 24, src: image25, alt: "مأكولات بحرية فاخرة" },
  { id: 25, src: image26, alt: "طبق بحري مميز" },
  { id: 26, src: image27, alt: "مأكولات بحرية طازجة" },
  { id: 27, src: image28, alt: "عرض المأكولات البحرية" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="gallery" ref={ref} className="py-20 bg-ocean-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            معرض الصور
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg">
            جولة بصرية في عالم مؤسسة محار الخليج
          </p>
        </motion.div>

      
      </div>
    </section>
  );
};

export default GallerySection;
