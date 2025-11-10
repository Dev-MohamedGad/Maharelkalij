import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="مؤسسة محار الخليج" className="w-16 h-16 rounded-full object-cover" />
            <div className="text-center md:text-right">
              <h3 className="font-bold text-xl mb-1">مؤسسة محار الخليج</h3>
              <p className="text-primary-foreground/80">Maharel Kalij</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg mb-4">تواصل معنا</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/966545173492"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all hover:scale-110 shadow-lg"
                aria-label="واتساب"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="text-primary-foreground/90 leading-relaxed">
              نقدم أشهى المأكولات البحرية الطازجة بأعلى جودة في أجواء راقية ومريحة
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2025 مؤسسة محار الخليج - Maharel Kalij – جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
