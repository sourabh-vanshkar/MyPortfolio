import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sourabh_Vanshkar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Sourabh Vanshkar</h3>
            <p className="text-slate-400 mb-4">
              Software Developer passionate about creating innovative solutions and building the future with code.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/sourabh-vanshkar-aa6038230"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/sourabh-vanshkar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/who.z_sam?igsh=MXV3NTh3ZzZ3ODlraw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get My Resume</h4>
            <p className="text-slate-400 mb-4">
              Download my latest resume to learn more about my experience and skills.
            </p>
            <Button
              onClick={handleDownloadResume}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 hover:scale-105"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>

        <div className="border-t border-slate-800 dark:border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {currentYear} Sourabh Vanshkar. All rights reserved. Built with Love and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}