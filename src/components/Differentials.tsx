import React from 'react';
import { Cpu, Clock, Shield, TrendingUp, Award, Headphones } from 'lucide-react';

export const Differentials: React.FC = () => {
  const differentials = [
    {
      icon: <Cpu className="h-10 w-10 text-emerald-600" />,
      title: "Tecnologia Avançada",
      description: "IA e IoT para otimização inteligente",
      highlight: "Algoritmos proprietários"
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: "Implementação Rápida",
      description: "Projetos entregues em até 30 dias",
      highlight: "Metodologia ágil"
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-600" />,
      title: "Garantia Estendida",
      description: "5 anos de garantia total",
      highlight: "Maior do mercado"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-green-600" />,
      title: "ROI Garantido",
      description: "Retorno em até 18 meses",
      highlight: "Comprovado"
    },
    {
      icon: <Award className="h-10 w-10 text-amber-600" />,
      title: "Certificações",
      description: "ISO 14001 e ISO 50001",
      highlight: "Padrão internacional"
    },
    {
      icon: <Headphones className="h-10 w-10 text-red-600" />,
      title: "Suporte 24/7",
      description: "Atendimento especializado",
      highlight: "Sempre disponível"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-emerald-600">Diferenciais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O que nos torna únicos no mercado de eficiência energética e por que 
            somos a escolha preferida de empresas líderes.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentials.map((differential, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-emerald-600 text-white px-3 py-1 rounded-bl-lg text-xs font-semibold">
                {differential.highlight}
              </div>
              
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {differential.icon}
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">{differential.title}</h3>
              <p className="text-gray-600 leading-relaxed">{differential.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Por que escolher o <span className="text-emerald-600">Efici-E</span>?
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                Concorrência
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">✗</span>
                  Implementação em 60-90 dias
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">✗</span>
                  Garantia de 2-3 anos
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">✗</span>
                  Suporte comercial limitado
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-3">✗</span>
                  Tecnologia convencional
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></span>
                Efici-E
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span>
                  Implementação em até 30 dias
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span>
                  Garantia estendida de 5 anos
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span>
                  Suporte 24/7 especializado
                </li>
                <li className="flex items-center">
                  <span className="text-emerald-500 mr-3">✓</span>
                  IA e IoT de última geração
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};