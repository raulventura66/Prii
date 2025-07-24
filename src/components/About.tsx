import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre a <span className="text-primary-600">Prii</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos pioneiros em soluções de secretariado executivo, comprometidos em transformar 
            o modo como as empresas gerenciam seus processos administrativos.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Promover a excelência administrativa através de serviços especializados de secretariado 
              executivo que otimizam processos, reduzem custos operacionais e maximizam a produtividade.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Através de análises detalhadas, gestão inteligente e soluções personalizadas, 
              ajudamos organizações a alcançarem seus objetivos de eficiência administrativa.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-primary-50 rounded-2xl">
                <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Clientes Atendidos</div>
              </div>
              <div className="text-center p-6 bg-primary-100 rounded-2xl">
                <div className="text-3xl font-bold text-primary-700 mb-2">40%</div>
                <div className="text-sm text-gray-600">Melhoria na Eficiência</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Secretariado executivo"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-amber-500" />
                <div>
                  <div className="font-bold text-gray-900">Certificação ISO</div>
                  <div className="text-sm text-gray-600">Qualidade garantida</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <Target className="h-16 w-16 text-primary-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3">Precisão</h4>
            <p className="text-gray-600 leading-relaxed">
              Análises detalhadas e processos precisos para identificar oportunidades 
              de otimização administrativa.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <Users className="h-16 w-16 text-primary-700 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3">Parceria</h4>
            <p className="text-gray-600 leading-relaxed">
              Trabalhamos lado a lado com nossos clientes para garantir 
              resultados eficientes e duradouros.
            </p>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-primary-200 to-primary-300 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <Lightbulb className="h-16 w-16 text-primary-800 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-3">Inovação</h4>
            <p className="text-gray-600 leading-relaxed">
              Metodologias modernas e soluções criativas para os desafios 
              administrativos do futuro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};