import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Calendar, MapPin, Award, BarChart3, Target, CheckCircle, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Caso de Éxito: El Jugador Estratégico',
    name: 'Carlos M.',
    profession: 'Ingeniero de Software',
    location: 'Ciudad de México',
    timeframe: '30 días',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    background: 'Un jugador que buscaba una ventaja lógica y consistente en el Baccarat.',
    challenge: 'Frustrado por la inconsistencia y la dependencia de la suerte en el juego.',
    approach: 'Adoptó el sistema con disciplina, enfocándose en la toma de decisiones basada en datos.',
    results: [
      'Mejora significativa en la tasa de aciertos',
      'Recuperación rápida de la inversión inicial',
      'Consistencia en los resultados a lo largo del tiempo',
      'Mayor confianza y control en cada sesión de juego'
    ],
    quote: 'Este sistema me dio la estructura que necesitaba. Ahora juego con una lógica que antes no tenía.',
    metrics: {
      accuracy: 90,
      roi: 250,
      consistency: 90
    },
    timeline: [
      { day: 'Fase 1', event: 'Aprendizaje y Familiarización con el Sistema' },
      { day: 'Fase 2', event: 'Primeras Aplicaciones y Observación de Resultados' },
      { day: 'Fase 3', event: 'Consolidación y Mejora Continua' },
      { day: 'Fase 4', event: 'Resultados Sostenibles a Largo Plazo' }
    ]
  },
  {
    id: 2,
    title: 'Caso de Éxito: La Mente Analítica',
    name: 'Ana L.',
    profession: 'Analista Financiera',
    location: 'Bogotá, Colombia',
    timeframe: '45 días',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    background: 'Una jugadora que necesitaba validar matemáticamente cada decisión en el Baccarat.',
    challenge: 'Buscaba un método que eliminara la incertidumbre y el riesgo innecesario.',
    approach: 'Realizó un análisis exhaustivo del sistema antes de aplicarlo, confiando en los datos.',
    results: [
      'Validación de la efectividad del sistema en múltiples sesiones',
      'Reducción drástica de pérdidas inesperadas',
      'Aumento de la confianza en sus decisiones de juego',
      'Desarrollo de una estrategia de juego más sólida'
    ],
    quote: 'Como analista, valoro la solidez de este sistema. Me ha permitido jugar con una base lógica y no solo con intuición.',
    metrics: {
      accuracy: 88,
      roi: 220,
      consistency: 85
    },
    timeline: [
      { day: 'Fase 1', event: 'Análisis Teórico y Validación de Conceptos' },
      { day: 'Fase 2', event: 'Pruebas Controladas y Registro de Datos' },
      { day: 'Fase 3', event: 'Aplicación Sistemática en Sesiones Reales' },
      { day: 'Fase 4', event: 'Optimización Personal y Adaptación del Método' }
    ]
  },
  {
    id: 3,
    title: 'Caso de Éxito: El Enfoque Práctico',
    name: 'Roberto S.',
    profession: 'Empresario',
    location: 'Madrid, España',
    timeframe: '60 días',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    background: 'Un empresario ocupado que buscaba un método eficiente para el Baccarat.',
    challenge: 'Necesitaba un sistema que ofreciera resultados tangibles sin consumir mucho tiempo.',
    approach: 'Aplicación directa y pragmática del sistema, enfocándose en la eficiencia.',
    results: [
      'Retorno de inversión positivo desde las primeras sesiones',
      'Integración del método en su rutina diaria de juego',
      'Mejora constante en la toma de decisiones',
      'Capacidad para aplicar el sistema en diferentes escenarios'
    ],
    quote: 'Este sistema es una herramienta poderosa. Me ha permitido optimizar mi tiempo y mis resultados en el Baccarat.',
    metrics: {
      accuracy: 85,
      roi: 300,
      consistency: 88
    },
    timeline: [
      { day: 'Fase 1', event: 'Aprendizaje Acelerado del Sistema' },
      { day: 'Fase 2', event: 'Aplicación Diaria y Observación de Patrones' },
      { day: 'Fase 3', event: 'Refinamiento y Adaptación Personal' },
      { day: 'Fase 4', event: 'Resultados Consistentes y Sostenibles' }
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
            <span className="text-cyan-400 font-semibold">HISTORIAS DE ÉXITO</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Resultados
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              documentados y verificables
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre cómo jugadores como tú han transformado su enfoque en el Baccarat aplicando nuestro sistema matemático.
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
