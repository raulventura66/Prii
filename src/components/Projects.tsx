import React from 'react';
import { ExternalLink, TrendingUp, Users, Award, DollarSign, Megaphone, Truck } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Reestruturação Financeira Corporativa",
      category: "Financeiro",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      improvement: "60%",
      description: "Reorganização completa dos processos financeiros de multinacional com 500+ funcionários.",
      services: ["Controle de Fluxo", "Relatórios Executivos", "Auditoria Interna"],
      results: ["60% redução no tempo de fechamento", "R$ 2M economia anual", "100% conformidade fiscal"]
    },
    {
      title: "Campanha de Rebranding Nacional",
      category: "Marketing",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      improvement: "300%",
      description: "Gestão completa de rebranding para rede de franquias com presença em 15 estados.",
      services: ["Estratégia Digital", "Design Gráfico", "Gestão de Campanhas"],
      results: ["300% aumento no engajamento", "R$ 5M em vendas geradas", "50 novas franquias"]
    },
    {
      title: "Otimização Logística Integrada",
      category: "Logística",
      image: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800",
      improvement: "40%",
      description: "Implementação de sistema logístico inteligente para e-commerce de grande porte.",
      services: ["Gestão de Estoque", "Otimização de Rotas", "Sistema WMS"],
      results: ["40% redução nos custos", "R$ 800k economia anual", "99% entregas no prazo"]
    },
    {
      title: "Transformação Digital RH",
      category: "Recursos Humanos",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      improvement: "80%",
      description: "Digitalização completa dos processos de RH para empresa de tecnologia com 300 colaboradores.",
      services: ["Sistema HRIS", "Recrutamento Digital", "Gestão de Performance"],
      results: ["80% redução no tempo de contratação", "95% satisfação dos funcionários", "50% menos turnover"]
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projetos de <span className="text-primary-600">Secretariado</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos nossos projetos mais impactantes realizados por profissionais 
            de secretariado executivo e os resultados extraordinários alcançados.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-emerald-600 px-3 py-1 rounded-full text-sm font-bold">
                  +{project.improvement}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Services */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-2 mb-6">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                      <TrendingUp className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200 group-hover:translate-x-2 transform transition-transform">
                  Ver detalhes
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Resultados que Falam por Si</h3>
            <p className="text-xl opacity-90">Números que demonstram a excelência do secretariado executivo</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <Users className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Empresas Atendidas</div>
            </div>
            <div className="group">
              <Award className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Satisfação dos Clientes</div>
            </div>
            <div className="group">
              <DollarSign className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">R$ 50M</div>
              <div className="text-lg opacity-90">Valor Economizado</div>
            </div>
            <div className="group">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-lg opacity-90">Projetos Entregues</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};