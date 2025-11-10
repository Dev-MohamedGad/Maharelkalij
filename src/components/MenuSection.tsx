import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
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

const menuItems = [
  {
    id: 1,
    name: "سمك هامور طازج",
    description: "سمك هامور طازج من الخليج، يتميز بجودته العالية وطعمه المميز",
    image: image1,
  },
  {
    id: 2,
    name: "سمك زبيدي طازج",
    description: "سمك زبيدي طازج من الخليج، يتميز بجودته العالية وطعمه المميز",
    image: image2,
  },
  {
    id: 3,
    name: "سمك صافي طازج",
    description: "سمك صافي طازج من الخليج، يتميز بنضارته وجودته العالية",
    image: image3,
  },
  {
    id: 4,
    name: "مشكل الأسماك الطازجة",
    description: "تشكيلة واسعة من أفضل أنواع الأسماك الطازجة من مياه الخليج",
    image: image4,
  },
  {
    id: 5,
    name: "سمك كنعد طازج",
    description: "سمك كنعد طازج من الخليج، منتقى من أفضل الأنواع المتوفرة",
    image: image5,
  },
  {
    id: 6,
    name: "سمك ناجل طازج",
    description: "سمك ناجل طازج من الخليج، يتميز بجودته العالية وطعمه المميز",
    image: image6,
  },
  {
    id: 7,
    name: "سمك بياض طازج",
    description: "سمك بياض طازج من مياه الخليج، يتميز بجودته العالية وطعمه المميز",
    image: image7,
  },
  {
    id: 8,
    name: "جمبري الخليج الطازج",
    description: "جمبري طازج من الخليج، منتقى من أفضل الأنواع المتوفرة",
    image: image8,
  },
  {
    id: 9,
    name: "سمك شعري طازج",
    description: "سمك شعري طازج من مياه الخليج، يتميز بجودته العالية وطعمه المميز",
    image: image9,
  },
  {
    id: 10,
    name: "أسماك الخليج المميزة",
    description: "أسماك الخليج الطازجة، منتقاة بعناية من أفضل المصادر بجودة عالية",
    image: image10,
  },
];

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="menu" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            منتجاتنا البحرية
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg">
            تشكيلة واسعة من المأكولات البحرية الطازجة من الخليج
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-2 border-border hover:border-secondary transition-all duration-300 group cursor-pointer h-full">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
