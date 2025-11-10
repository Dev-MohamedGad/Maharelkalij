import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Clock, MessageCircle, ExternalLink } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="contact" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            تواصل معنا
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-6 text-muted-foreground text-lg">
            نسعد بتواصلكم واستفساراتكم
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start p-6 bg-ocean-light rounded-2xl text-foreground">
              <div className="p-3 bg-secondary rounded-full">
                <Phone className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">الهاتف / واتساب</h3>
                <a 
                  href="https://wa.me/966545173492" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors flex items-center gap-2"
                  dir="ltr"
                >
                  +966 54 517 3492
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-ocean-light rounded-2xl text-foreground">
              <div className="p-3 bg-secondary rounded-full">
                <MapPin className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">الموقع</h3>
                <p className="text-foreground mb-2">مؤسسة محار الخليج</p>
                <p className="text-muted-foreground mb-2">Maharel Kalij Seafood</p>
                <a 
                  href="https://maps.app.goo.gl/DRKFq4v6zqJCEHX67" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-1 text-sm"
                >
                  عرض على الخريطة
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start p-6 bg-ocean-light rounded-2xl text-foreground">
              <div className="p-3 bg-secondary rounded-full">
                <Clock className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">ساعات العمل</h3>
                <p className="text-foreground">8:00 صباحاً - 12:00 منتصف الليل</p>
                <p className="text-muted-foreground">طوال أيام الأسبوع</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-6 bg-ocean-light rounded-2xl text-foreground"
            >
              <h3 className="font-bold text-lg text-primary mb-4">تواصل معنا عبر واتساب</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/966545173492"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full hover:scale-105 transition-transform shadow-lg font-semibold text-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>واتساب</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.1!2d46.6543!3d24.7123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ0LjQiTiA0NsKwMzknMTUuNiJF!5e0!3m2!1sar!2ssa!4v1234567890!5m2!1sar!2ssa"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع مؤسسة محار الخليج - Maharel Kalij"
          />
          <div className="mt-4 text-center">
            <a
              href="https://maps.app.goo.gl/DRKFq4v6zqJCEHX67"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-semibold shadow-lg"
            >
              <MapPin className="w-5 h-5" />
              فتح في Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
