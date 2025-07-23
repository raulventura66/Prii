import React from 'react';
import { Contact } from '../components/Contact';
import { MapPin, Clock, Award, Users } from 'lucide-react';

const ContactInfo: React.FC = () => {
  const offices = [
    {
      city: "São Paulo - Matriz",
      address: "Av. Paulista, 1000 - Sala 500",
      cep: "01310-100",
      phone: "(11) 9999-8888",
      email: "sp@efici-e.com.br"
    },
    {
      city: "Rio de Janeiro",
      address: "Av. Copacabana, 500 - Sala 200",
      cep: "22070-001",
      phone: "(21) 8888-7777",
      email: "rj@efici-e.com.br"
    },
    {
      city: "Belo Horizonte",
      address: "Av. Afonso Pena, 300 - Sala 150",
      cep: "30130-001",
      phone: "(31) 7777-6666",
      email: "bh@efici-e.com.br"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-emerald-600">Escritórios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Presença estratégica nas principais capitais brasileiras para melhor atender nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-gray-100"
            >
              <MapPin className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{office.city}</h3>
              <div className="space-y-2 text-gray-600">
                <p>{office.address}</p>
                <p>CEP: {office.cep}</p>
                <p className="font-semibold text-emerald-600">{office.phone}</p>
                <p className="text-blue-600">{office.email}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Business Hours */}
        <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Clock className="h-12 w-12 mb-4" />
              <h3 className="text-3xl font-bold mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-lg">
                <p><strong>Segunda a Sexta:</strong> 8h às 18h</p>
                <p><strong>Sábado:</strong> 8h às 12h</p>
                <p><strong>Domingo:</strong> Plantão emergencial</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">24/7</div>
              <div className="text-xl">Monitoramento Remoto</div>
              <p className="mt-4 opacity-90">
                Nossos sistemas funcionam 24 horas por dia, 7 dias por semana, 
                garantindo máxima eficiência energética.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h4 className="font-bold text-gray-900 mb-2">ISO 14001</h4>
            <p className="text-sm text-gray-600">Gestão Ambiental</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h4 className="font-bold text-gray-900 mb-2">ISO 50001</h4>
            <p className="text-sm text-gray-600">Gestão Energética</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h4 className="font-bold text-gray-900 mb-2">CREA</h4>
            <p className="text-sm text-gray-600">Registro Profissional</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h4 className="font-bold text-gray-900 mb-2">LEED</h4>
            <p className="text-sm text-gray-600">Construção Verde</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      <Contact />
      <ContactInfo />
    </div>
  );
};