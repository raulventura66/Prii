import React from 'react';
import { Services } from '../components/Services';
import { BarChart3, Settings, Shield, Smartphone, Battery, Cpu, Zap, Leaf, Globe } from 'lucide-react';

const AdditionalServices: React.FC = () => {
  const additionalServices = [
    {
      icon: <Zap className="h-12 w-12 text-yellow-600" />,
      title: "Consultoria Especializada",
      description: "Análise personalizada para identificar as melhores oportunidades de economia energética em seu negócio.",
      features: ["Diagnóstico completo", "Relatório técnico", "Plano de implementação", "Acompanhamento"]
    },
    {
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      title: "Certificação Verde",
      description: "Auxílio na obtenção de certificações ambientais como LEED, AQUA e ISO 14001.",
      features: ["Preparação para auditoria", "Documentação técnica", "Treinamento equipe", "Suporte contínuo"]
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: "Sustentabilidade Corporativa",
      description: "Desenvolvimento de estratégias ESG e relatórios de sustentabilidade para sua empresa.",
      features: ["Estratégia ESG", "Relatórios sustentabilidade", "Metas carbono neutro", "Comunicação verde"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Serviços <span className="text-emerald-600">Complementares</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluções adicionais para maximizar seus resultados em sustentabilidade e eficiência energética.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 group border border-gray-100"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      <Services />
      <AdditionalServices />
    </div>
  );
};