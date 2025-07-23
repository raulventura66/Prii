import React from 'react';
import { Linkedin, Mail, Award } from 'lucide-react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Carlos Silva",
      position: "CEO & Fundador",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "PhD em Engenharia Elétrica, 15 anos de experiência em eficiência energética",
      specialties: ["Estratégia", "Inovação", "Sustentabilidade"]
    },
    {
      name: "Eng. Ana Costa",
      position: "CTO",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Especialista em IoT e automação, líder em projetos de smart grid",
      specialties: ["IoT", "Automação", "Smart Grid"]
    },
    {
      name: "Roberto Santos",
      position: "Diretor Comercial",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "MBA em Gestão, especialista em desenvolvimento de negócios sustentáveis",
      specialties: ["Vendas", "Relacionamento", "Negócios"]
    },
    {
      name: "Dra. Marina Oliveira",
      position: "Diretora de P&D",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Doutora em Energia Renovável, pesquisadora em tecnologias limpas",
      specialties: ["Pesquisa", "Energia Solar", "Inovação"]
    },
    {
      name: "Eng. Paulo Ferreira",
      position: "Gerente de Projetos",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "PMP certificado, especialista em implementação de projetos complexos",
      specialties: ["Gestão", "Implementação", "Qualidade"]
    },
    {
      name: "Juliana Almeida",
      position: "Coordenadora de Sustentabilidade",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Especialista em ESG e certificações ambientais internacionais",
      specialties: ["ESG", "Certificações", "Meio Ambiente"]
    }
  ];

  return (
    <section id="time" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nosso <span className="text-emerald-600">Time</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Profissionais altamente qualificados e apaixonados por sustentabilidade, 
            unidos pela missão de transformar o futuro energético.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-200">
                      <Linkedin className="h-4 w-4 text-gray-700" />
                    </button>
                    <button className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-200">
                      <Mail className="h-4 w-4 text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, specialtyIndex) => (
                    <span
                      key={specialtyIndex}
                      className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Nossa Equipe em Números</h3>
            <p className="text-xl opacity-90">Profissionais qualificados fazendo a diferença</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <Award className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Especialistas</div>
            </div>
            <div className="group">
              <Award className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">25</div>
              <div className="text-lg opacity-90">Engenheiros</div>
            </div>
            <div className="group">
              <Award className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-lg opacity-90">PhDs & Mestres</div>
            </div>
            <div className="group">
              <Award className="h-12 w-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};