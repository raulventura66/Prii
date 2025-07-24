import React from 'react';
import { DollarSign, Megaphone, Truck, Users, Check, Star } from 'lucide-react';

export const Services: React.FC = () => {
  const departments = [
    {
      icon: <DollarSign className="h-12 w-12 text-primary-600" />,
      title: "Financeiro",
      description: "Gestão financeira especializada e controle administrativo completo.",
      plans: [
        {
          name: "Essencial",
          price: "R$ 1.200",
          features: ["Controle de fluxo de caixa", "Relatórios básicos", "Suporte por email"]
        },
        {
          name: "Otimizado",
          price: "R$ 2.500",
          features: ["Análise financeira avançada", "Dashboard personalizado", "Suporte telefônico", "Consultoria mensal"]
        },
        {
          name: "Premium",
          price: "R$ 4.000",
          features: ["Gestão completa", "Relatórios executivos", "Suporte 24/7", "Consultoria semanal", "Planejamento estratégico"]
        }
      ]
    },
    {
      icon: <Megaphone className="h-12 w-12 text-primary-600" />,
      title: "Marketing",
      description: "Estratégias de marketing e comunicação para impulsionar seu negócio.",
      plans: [
        {
          name: "Essencial",
          price: "R$ 1.500",
          features: ["Gestão redes sociais", "Conteúdo básico", "Relatórios mensais"]
        },
        {
          name: "Otimizado",
          price: "R$ 3.000",
          features: ["Campanhas publicitárias", "Design gráfico", "Analytics avançado", "Email marketing"]
        },
        {
          name: "Premium",
          price: "R$ 5.500",
          features: ["Estratégia completa", "Branding", "Eventos", "Consultoria estratégica", "Assessoria de imprensa"]
        }
      ]
    },
    {
      icon: <Truck className="h-12 w-12 text-primary-600" />,
      title: "Logística",
      description: "Otimização de processos logísticos e gestão de operações.",
      plans: [
        {
          name: "Essencial",
          price: "R$ 1.800",
          features: ["Controle de estoque", "Gestão de fornecedores", "Relatórios básicos"]
        },
        {
          name: "Otimizado",
          price: "R$ 3.500",
          features: ["Otimização de rotas", "Sistema WMS", "Rastreamento", "Dashboard logístico"]
        },
        {
          name: "Premium",
          price: "R$ 6.000",
          features: ["Automação completa", "BI avançado", "Integração ERP", "Consultoria especializada", "Suporte 24/7"]
        }
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-primary-600" />,
      title: "Recursos Humanos",
      description: "Gestão completa de pessoas e desenvolvimento organizacional.",
      plans: [
        {
          name: "Essencial",
          price: "R$ 2.000",
          features: ["Recrutamento básico", "Folha de pagamento", "Controle de ponto"]
        },
        {
          name: "Otimizado",
          price: "R$ 4.000",
          features: ["Seleção especializada", "Treinamentos", "Avaliação de desempenho", "Clima organizacional"]
        },
        {
          name: "Premium",
          price: "R$ 7.000",
          features: ["Gestão estratégica", "Desenvolvimento de liderança", "Plano de carreira", "Consultoria RH", "Sistema HRIS"]
        }
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Planos de <span className="text-primary-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluções especializadas em secretariado executivo para diferentes áreas da sua empresa, 
            com planos flexíveis que se adaptam às suas necessidades.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="space-y-16">
          {departments.map((department, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Department Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-8 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  {department.icon}
                  <h3 className="text-3xl font-bold">{department.title}</h3>
                </div>
                <p className="text-xl opacity-90">{department.description}</p>
              </div>
              

              {/* Plans */}
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {department.plans.map((plan, planIndex) => (
                    <div
                      key={planIndex}
                      className={`relative p-6 rounded-xl border-2 transition-all duration-300 hover:transform hover:-translate-y-2 ${
                        planIndex === 1 
                          ? 'border-primary-600 bg-primary-50 shadow-lg' 
                          : 'border-gray-200 bg-white hover:border-primary-300'
                      }`}
                    >
                      {planIndex === 1 && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                            <Star className="h-4 w-4 mr-1" />
                            Mais Popular
                          </span>
                        </div>
                      )}
                      
                      <div className="text-center mb-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                        <div className="text-3xl font-bold text-primary-600 mb-1">{plan.price}</div>
                        <div className="text-sm text-gray-600">por mês</div>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button 
                        className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                          planIndex === 1
                            ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700'
                        }`}
                      >
                        Escolher Plano
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Precisa de um plano personalizado? Nossa equipe pode criar uma solução sob medida para sua empresa.
          </p>
          <button
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-primary-600 to-primary-800 text-white px-12 py-4 rounded-full font-semibold hover:from-primary-700 hover:to-primary-900 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Solicitar Plano Personalizado
          </button>
        </div>
      </div>
    </section>
  );
};