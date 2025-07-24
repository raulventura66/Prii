import React from 'react';
import { ChevronDown, Leaf, Zap, Globe } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('sobre');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-primary-50 via-primary-100 to-white flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <Leaf className="h-6 w-6 text-primary-600" />
              <span className="text-primary-600 font-semibold">Secretariado & Eficiência</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Secretariado
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800"> Executivo</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Soluções profissionais em secretariado executivo. Transformamos processos administrativos em 
              oportunidades de crescimento, otimizando gestão e produtividade empresarial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Ver Projetos
              </button>
              <button
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-primary-600 hover:text-primary-600 transition-all duration-200"
              >
                Saiba Mais
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-primary-600">95%</div>
                <div className="text-sm text-gray-600">Eficiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-700">50+</div>
                <div className="text-sm text-gray-600">Projetos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-800">24/7</div>
                <div className="text-sm text-gray-600">Monitoramento</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-96 h-96">
              {/* Main Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-20 animate-pulse"></div>
              
              {/* Floating Icons */}
              <div className="absolute top-8 left-8 bg-white p-4 rounded-2xl shadow-lg animate-bounce" style={{ animationDelay: '0s' }}>
                <Zap className="h-8 w-8 text-primary-600" />
              </div>
              <div className="absolute top-16 right-8 bg-white p-4 rounded-2xl shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <Leaf className="h-8 w-8 text-primary-700" />
              </div>
              <div className="absolute bottom-8 left-16 bg-white p-4 rounded-2xl shadow-lg animate-bounce" style={{ animationDelay: '2s' }}>
                <Globe className="h-8 w-8 text-primary-800" />
              </div>

              {/* Center Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-8 rounded-3xl shadow-2xl">
                  <div className="text-4xl font-bold text-gray-900 text-center">
                    <span className="text-primary-600">P</span>
                    <span className="text-primary-700">r</span>
                    <span className="text-primary-800">i</span>
                    <span className="text-primary-600">i</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToAbout}
            className="text-gray-600 hover:text-primary-600 transition-colors duration-200 animate-bounce"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};