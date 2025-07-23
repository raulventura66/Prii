import React from 'react';
import { Users, DollarSign, Megaphone, Truck, Cog, HeadphonesIcon } from 'lucide-react';

export const Departments: React.FC = () => {
  const departments = [
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Recursos Humanos",
      description: "Gestão de talentos e desenvolvimento profissional",
      team: "8 profissionais",
      responsibilities: [
        "Recrutamento e seleção especializada",
        "Treinamentos em sustentabilidade",
        "Desenvolvimento de carreira",
        "Cultura organizacional"
      ],
      manager: "Carla Mendes - Gerente de RH"
    },
    {
      icon: <DollarSign className="h-12 w-12 text-green-600" />,
      title: "Financeiro",
      description: "Gestão financeira e análise de investimentos",
      team: "6 profissionais",
      responsibilities: [
        "Análise de viabilidade de projetos",
        "Gestão de fluxo de caixa",
        "Relatórios financeiros",
        "Controle de custos e orçamentos"
      ],
      manager: "Ricardo Alves - CFO"
    },
    {
      icon: <Megaphone className="h-12 w-12 text-purple-600" />,
      title: "Marketing",
      description: "Comunicação e estratégias de mercado",
      team: "10 profissionais",
      responsibilities: [
        "Marketing digital sustentável",
        "Eventos e feiras do setor",
        "Conteúdo educativo",
        "Branding e comunicação"
      ],
      manager: "Fernanda Lima - Diretora de Marketing"
    },
    {
      icon: <Truck className="h-12 w-12 text-amber-600" />,
      title: "Logística",
      description: "Operações e cadeia de suprimentos",
      team: "12 profissionais",
      responsibilities: [
        "Gestão de equipamentos",
        "Logística de instalação",
        "Controle de estoque",
        "Transporte sustentável"
      ],
      manager: "João Pereira - Gerente de Operações"
    },
    {
      icon: <Cog className="h-12 w-12 text-gray-600" />,
      title: "Operações",
      description: "Execução e manutenção de projetos",
      team: "20 profissionais",
      responsibilities: [
        "Instalação de sistemas",
        "Manutenção preventiva",
        "Monitoramento 24/7",
        "Suporte técnico"
      ],
      manager: "Marcos Silva - Diretor de Operações"
    },
    {
      icon: <HeadphonesIcon className="h-12 w-12 text-emerald-600" />,
      title: "Atendimento",
      description: "Relacionamento com clientes",
      team: "15 profissionais",
      responsibilities: [
        "Suporte ao cliente",
        "Pós-venda especializado",
        "Treinamento de usuários",
        "Feedback e melhorias"
      ],
      manager: "Luciana Santos - Gerente de Atendimento"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-emerald-600">Departamentos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estrutura organizacional especializada para garantir excelência em 
            todas as áreas da empresa e máxima satisfação dos clientes.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {departments.map((dept, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {dept.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{dept.description}</p>
              
              <div className="mb-4">
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                  {dept.team}
                </span>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Responsabilidades:</h4>
                <ul className="space-y-1">
                  {dept.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-2 flex-shrink-0"></div>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 font-medium">{dept.manager}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Organizational Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Estrutura <span className="text-emerald-600">Organizacional</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-emerald-50 rounded-xl">
              <div className="text-2xl font-bold text-emerald-600 mb-1">71</div>
              <div className="text-sm text-gray-600">Total de Colaboradores</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl">
              <div className="text-2xl font-bold text-blue-600 mb-1">6</div>
              <div className="text-sm text-gray-600">Departamentos</div>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <div className="text-2xl font-bold text-purple-600 mb-1">12</div>
              <div className="text-sm text-gray-600">Gerentes</div>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl">
              <div className="text-2xl font-bold text-amber-600 mb-1">95%</div>
              <div className="text-sm text-gray-600">Retenção de Talentos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};