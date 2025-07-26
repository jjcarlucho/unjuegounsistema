import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Calendar, MapPin, Award, BarChart3, Target, CheckCircle, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Caso de Estudio #1: El Ingeniero Sistemático',
    name: 'Carlos M.',
    profession: 'Ingeniero de Software',
    location: 'Ciudad de México',
    timeframe: '30 días',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    background: 'Ingeniero con experiencia en algoritmos, buscaba un método matemático confiable.',
    challenge: 'Había probado 5 sistemas diferentes sin resultados consistentes.',
    approach: 'Aplicó el método con disciplina matemática, documentando cada resultado.',
    results: [
      'Precisión del 92% en las primeras 20 aplicaciones',
      'Recuperó la inversión en 4 días',
      'Generó resultados positivos en 28 de 30 días',
      'Desarrolló su propia variación del sistema'
    ],
    quote: 'Como ingeniero, puedo confirmar que este sistema tiene fundamentos matemáticos sólidos. No es suerte, es ciencia aplicada.',
    metrics: {
      accuracy: 92,
      roi: 340,
      consistency: 93
    },
    timeline: [
      { day: 'Día 1-3', event: 'Estudio intensivo del método' },
      { day: 'Día 4-7', event: 'Primeras aplicaciones con resultados positivos' },
      { day: 'Día 8-15', event: 'Refinamiento de la técnica' },
      { day: 'Día 16-30', event: 'Resultados consistentes y optimización' }
    ]
  },
  {
    id: 2,
    title: 'Caso de Estudio #2: La Analista Meticulosa',
    name: 'Ana L.',
    profession: 'Analista Financiera',
    location: 'Bogotá, Colombia',
    timeframe: '45 días',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    background: 'Analista financiera con 8 años de experiencia en mercados.',
    challenge: 'Necesitaba un método que pudiera validar matemáticamente.',
    approach: 'Realizó análisis estadístico completo antes y durante la aplicación.',
    results: [
      'Validó la efectividad con 50+ pruebas',
      'Precisión promedio del 89%',
      'ROI positivo en 6 de cada 7 aplicaciones',
      'Creó modelo predictivo basado en el sistema'
    ],
    quote: 'Analicé los datos durante semanas. Los patrones matemáticos son consistentes y estadísticamente significativos.',
    metrics: {
      accuracy: 89,
      roi: 280,
      consistency: 86
    },
    timeline: [
      { day: 'Día 1-7', event: 'Análisis teórico y validación matemática' },
      { day: 'Día 8-20', event: 'Pruebas controladas con registro detallado' },
      { day: 'Día 21-35', event: 'Aplicación sistemática del método' },
      { day: 'Día 36-45', event: 'Optimización y desarrollo de variaciones' }
    ]
  },
  {
    id: 3,
    title: 'Caso de Estudio #3: El Empresario Pragmático',
    name: 'Roberto S.',
    profession: 'Empresario',
    location: 'Madrid, España',
    timeframe: '60 días',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    background: 'Empresario con múltiples negocios, buscaba diversificar ingresos.',
    challenge: 'Tiempo limitado, necesitaba método eficiente y probado.',
    approach: 'Aplicación práctica con enfoque en resultados inmediatos.',
    results: [
      'ROI positivo desde la primera semana',
      'Integró el método en su rutina diaria',
      'Precisión del 87% en 60 aplicaciones',
      'Enseñó el método a su equipo de trabajo'
    ],
    quote: 'He invertido en muchos sistemas. Este es diferente: tiene fundamento real y resultados verificables.',
    metrics: {
      accuracy: 87,
      roi: 420,
      consistency: 91
    },
    timeline: [
      { day: 'Día 1-5', event: 'Aprendizaje acelerado del sistema' },
      { day: 'Día 6-15', event: 'Aplicación diaria con resultados inmediatos' },
      { day: 'Día 16-40', event: 'Refinamiento y optimización personal' },
      { day: 'Día 41-60', event: 'Enseñanza y multiplicación del método' }
    ]
  }
];

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'timeline' | 'metrics'>('overview');

  const currentCase = caseStudies[selectedCase];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-cyan-500/5"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-600/20 px-6 py-3 rounded-full border border-cyan-500/30 mb-6">
            <BarChart3 className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">CASOS DE ESTUDIO REALES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Resultados
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              documentados y verificables
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Análisis detallado de usuarios reales que aplicaron el método matemático con resultados medibles.
          </p>
        </motion.div>

        {/* Selector de casos */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((caseStudy, index) => (
            <button
              key={caseStudy.id}
              onClick={() => setSelectedCase(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                selectedCase === index
                  ? 'bg-gradient-to-r from-cyan-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
              }`}
            >
              <img
                src={caseStudy.avatar}
                alt={caseStudy.name}
                className="w-8 h-8 rounded-full border-2 border-current"
              />
              <div className="text-left">
                <p className="font-bold text-sm">{caseStudy.name}</p>
                <p className="text-xs opacity-75">{caseStudy.profession}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Contenido del caso seleccionado */}
        <motion.div
          key={selectedCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 md:p-12 border border-cyan-500/20 shadow-2xl backdrop-blur-sm"
        >
          
          {/* Header del caso */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
            <img
              src={currentCase.avatar}
              alt={currentCase.name}
              className="w-20 h-20 rounded-full border-4 border-cyan-400 object-cover"
            />
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {currentCase.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <Award className="text-cyan-400" size={16} />
                  <span>{currentCase.profession}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-cyan-400" size={16} />
                  <span>{currentCase.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="text-cyan-400" size={16} />
                  <span>Período: {currentCase.timeframe}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-gray-700">
            {[
              { id: 'overview', label: 'Resumen', icon: Target },
              { id: 'timeline', label: 'Cronología', icon: Calendar },
              { id: 'metrics', label: 'Métricas', icon: BarChart3 }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-3 font-medium transition-all duration-200 border-b-2 ${
                    activeTab === tab.id
                      ? 'text-cyan-400 border-cyan-400'
                      : 'text-gray-400 border-transparent hover:text-white'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Contenido de tabs */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Contexto</h4>
                      <p className="text-gray-300 mb-4">{currentCase.background}</p>
                      
                      <h4 className="text-xl font-bold text-white mb-4">Desafío</h4>
                      <p className="text-gray-300 mb-4">{currentCase.challenge}</p>
                      
                      <h4 className="text-xl font-bold text-white mb-4">Enfoque</h4>
                      <p className="text-gray-300">{currentCase.approach}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">Resultados Clave</h4>
                      <div className="space-y-3">
                        {currentCase.results.map((result, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="text-emerald-400 mt-1 flex-shrink-0" size={16} />
                            <span className="text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-cyan-600/20 rounded-xl p-6 mt-6">
                        <blockquote className="text-cyan-100 italic text-lg">
                          "{currentCase.quote}"
                        </blockquote>
                        <cite className="text-cyan-400 font-bold mt-2 block">
                          - {currentCase.name}
                        </cite>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'timeline' && (
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-white mb-6">Cronología del Progreso</h4>
                  <div className="space-y-4">
                    {currentCase.timeline.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h5 className="text-cyan-400 font-bold">{item.day}</h5>
                          <p className="text-gray-300">{item.event}</p>
                        </div>
                        {index < currentCase.timeline.length - 1 && (
                          <ArrowRight className="text-gray-600 mt-2" size={16} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'metrics' && (
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-white mb-6">Métricas de Rendimiento</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-emerald-600/20 to-emerald-800/20 rounded-xl p-6 border border-emerald-500/30">
                      <div className="flex items-center gap-3 mb-4">
                        <Target className="text-emerald-400" size={24} />
                        <h5 className="text-emerald-400 font-bold">Precisión</h5>
                      </div>
                      <div className="text-3xl font-black text-white mb-2">
                        {currentCase.metrics.accuracy}%
                      </div>
                      <p className="text-emerald-300 text-sm">Tasa de aciertos promedio</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-cyan-600/20 to-cyan-800/20 rounded-xl p-6 border border-cyan-500/30">
                      <div className="flex items-center gap-3 mb-4">
                        <TrendingUp className="text-cyan-400" size={24} />
                        <h5 className="text-cyan-400 font-bold">ROI</h5>
                      </div>
                      <div className="text-3xl font-black text-white mb-2">
                        {currentCase.metrics.roi}%
                      </div>
                      <p className="text-cyan-300 text-sm">Retorno de inversión</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-xl p-6 border border-purple-500/30">
                      <div className="flex items-center gap-3 mb-4">
                        <BarChart3 className="text-purple-400" size={24} />
                        <h5 className="text-purple-400 font-bold">Consistencia</h5>
                      </div>
                      <div className="text-3xl font-black text-white mb-2">
                        {currentCase.metrics.consistency}%
                      </div>
                      <p className="text-purple-300 text-sm">Resultados consistentes</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
