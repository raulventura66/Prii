import React from 'react';
import { ExternalLink, TrendingUp, Leaf, Zap } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Shopping Center Verde",
      category: "Varejo",
      image: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=800",
      savings: "45%",
      description: "Implementação de sistema completo de eficiência energética em complexo comercial.",
      technologies: ["Painéis Solares", "LED Inteligente", "Automação"],
      results: ["45% redução no consumo", "R$ 180k economia anual", "30% menos emissões CO2"]
    },
    {
      title: "Indústria Sustentável",
      category: "Industrial",
      image: "https://images.pexels.com/photos/162568/solar-panel-array-power-sun-electricity-162568.jpeg?auto=compress&cs=tinysrgb&w=800",
      savings: "60%",
      description: "Modernização completa do sistema energético de fábrica metalúrgica.",
      technologies: ["IoT Sensors", "AI Optimization", "Energy Storage"],
      results: ["60% redução no consumo", "R$ 500k economia anual", "ROI em 18 meses"]
    },
    {
      title: "Condomínio Inteligente",
      category: "Residencial",
      image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800",
      savings: "35%",
      description: "Solução integrada para condomínio residencial com 200 unidades.",
      technologies: ["Smart Grid", "App Mobile", "Medição Inteligente"],
      results: ["35% redução no consumo", "R$ 50k economia anual", "100% satisfação"]
    }
  ];

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projetos de <span className="text-emerald-600">Sucesso</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos nossos projetos mais impactantes e os resultados 
            extraordinários alcançados para nossos clientes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
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
                  -{project.savings}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-2 mb-6">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center text-sm text-gray-600">
                      <TrendingUp className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200 group-hover:translate-x-2 transform transition-transform">
                  Ver detalhes
                  <ExternalLink className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Resultados que Falam por Si</h3>
            <p className="text-xl opacity-90">Números que demonstram nosso compromisso com a excelência</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <Zap className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">2.5GW</div>
              <div className="text-lg opacity-90">Energia Otimizada</div>
            </div>
            <div className="group">
              <Leaf className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">1.2M</div>
              <div className="text-lg opacity-90">Toneladas CO2 Evitadas</div>
            </div>
            <div className="group">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">R$ 15M</div>
              <div className="text-lg opacity-90">Economia Gerada</div>
            </div>
            <div className="group">
              <ExternalLink className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-lg opacity-90">Projetos Entregues</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};