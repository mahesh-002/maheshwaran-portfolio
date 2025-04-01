
import React from 'react';
import { ArrowDownCircle, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg text-indigo-500 font-medium mb-2 animate-fadeInUp">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 animate-fadeInUp animate-delay-100">
              <span className="heading-gradient">Maheshwaran M</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 animate-fadeInUp animate-delay-200">
              Mobile & Web App Developer
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl animate-fadeInUp animate-delay-300">
              Passionate Mobile & Web App Developer with expertise in Flutter, Firebase, and Java. Eager to contribute 
              my technical skills and innovation to a dynamic team while continuously learning and growing in software development.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button className="btn-primary animate-fadeInUp animate-delay-400" asChild>
                <a href="assets\Maheshwaran_M_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" className="animate-fadeInUp animate-delay-500" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex gap-4">
              <a href="https://github.com/mahesh-002" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="animate-fadeInUp animate-delay-600">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/maheshwaran002" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="animate-fadeInUp animate-delay-700">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://wa.me/917871939594" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="animate-fadeInUp animate-delay-800">
                <Button variant="ghost" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </Button>
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full overflow-hidden relative animate-fadeInUp hover-scale">
              <img src="/lovable-uploads/7116187a-9f35-4ed1-86fb-a6ef3604b017.png" alt="Maheshwaran M" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDownCircle className="h-10 w-10 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
