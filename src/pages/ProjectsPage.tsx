import React from 'react';
import { Projects } from '../components/Projects';
import { TrendingUp, Award, Users, Calendar } from 'lucide-react';

const ProjectStats: React.FC = () => {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-emerald-600" />,
      value: "150+",
      label: "Projetos Concluídos",
      description: "Implementações bem-sucedidas"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      value: "98%",
      label: "Taxa de Sucesso",
      description: "Projetos entregues no prazo"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      value: "500+",
      label: "Clientes Satisfeitos",
      description: "Empresas atendidas"
    },
    {
      icon: <Calendar className="h-8 w-8 text-amber-600" />,
      value: "8",
      label: "Anos de Experiência",
      description: "No mercado brasileiro"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossa <span className="text-emerald-600">Trajetória</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Anos de dedicação resultaram em centenas de projetos bem-sucedidos e 
            milhões em economia para nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Marcos <span className="text-emerald-600">Importantes</span>
          </h3>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2017
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Fundação da Efici-E</h4>
                <p className="text-gray-600">Início das operações com foco em pequenas empresas e residências.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2019
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Expansão Industrial</h4>
                <p className="text-gray-600">Primeiro grande projeto industrial com economia de 60% no consumo energético.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2021
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Certificação ISO</h4>
                <p className="text-gray-600">Obtenção das certificações ISO 14001 e ISO 50001 para gestão ambiental e energética.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2023
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Tecnologia IA</h4>
                <p className="text-gray-600">Implementação de inteligência artificial para otimização automática de consumo.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2025
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Expansão Nacional</h4>
                <p className="text-gray-600">Presença em 15 estados brasileiros com mais de 500 clientes ativos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      <Projects />
      <ProjectStats />
    </div>
  );
};