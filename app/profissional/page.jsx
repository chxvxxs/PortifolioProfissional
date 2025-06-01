"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Briefcase,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  Building,
  Users,
  Target,
  TrendingUp,
  Award,
  Star,
  ChevronRight,
} from "lucide-react"

export default function Profissional() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Animação de entrada dos elementos
    const sections = document.querySelectorAll(".animate-section")
    sections.forEach((section, index) => {
      section.style.opacity = "0"
      section.style.transform = "translateY(30px)"
      setTimeout(
        () => {
          section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
          section.style.opacity = "1"
          section.style.transform = "translateY(0)"
        },
        200 + index * 150,
      )
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navegação */}
      <nav className="w-full py-4 px-6 md:px-12 flex justify-between items-center z-10">
        <div className="text-white font-bold text-2xl">
          <Link href="/">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Portifólio</span>
          </Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link href="/" className="nav-link text-white font-medium">
            Início
          </Link>
          <Link href="/sobre" className="nav-link text-white font-medium">
            Sobre
          </Link>
          <Link href="/academico" className="nav-link text-white font-medium">
            Experiência Acadêmica
          </Link>
          <Link href="/profissional" className="nav-link text-white font-medium border-b-2 border-white">
            Experiência Profissional
          </Link>
          <Link href="/projetos" className="nav-link text-white font-medium">
            Projetos
          </Link>
          <Link href="/jogo" className="nav-link text-white font-medium">
            Jogo
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`${mobileMenuOpen ? "block" : "hidden"} md:hidden fixed top-16 left-0 right-0 bg-black bg-opacity-95 z-20 p-4 rounded-b-lg`}
      >
        <div className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-white font-medium py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded"
            onClick={() => setMobileMenuOpen(false)}
          >
            Início
          </Link>
          <Link
            href="/sobre"
            className="text-white font-medium py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sobre
          </Link>
          <Link
            href="/academico"
            className="text-white font-medium py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded"
            onClick={() => setMobileMenuOpen(false)}
          >
            Experiência Acadêmica
          </Link>
          <Link
            href="/profissional"
            className="text-white font-medium py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded bg-white bg-opacity-10"
            onClick={() => setMobileMenuOpen(false)}
          >
            Experiência Profissional
          </Link>
          <Link
            href="/projetos"
            className="text-white font-medium py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projetos
          </Link>
          <Link
            href="/jogo"
            className="text-white font-medium py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded"
            onClick={() => setMobileMenuOpen(false)}
          >
            Jogo
          </Link>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="profile-card max-w-5xl w-full rounded-2xl overflow-hidden shadow-2xl p-8 md:p-12">
          {/* Header da página */}
          <div className="animate-section text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Experiência{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Profissional
              </span>
            </h1>
            <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Minha trajetória profissional e experiências práticas no mercado de trabalho.
            </p>
          </div>

          {/* Resumo Profissional */}
          <div className="animate-section mb-16">
            <div className="service-card bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Briefcase size={48} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Resumo Profissional</h2>
                <p className="text-lg text-white text-opacity-90 max-w-3xl mx-auto">
                  Estudante de Sistemas para Internet com experiência prática em desenvolvimento web e análise de dados
                  através de residências de software e projetos acadêmicos. Busco oportunidades para aplicar meus
                  conhecimentos e contribuir para projetos inovadores.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                  <p className="text-white text-opacity-80">Residências Concluídas</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
                  <p className="text-white text-opacity-80">Projetos Desenvolvidos</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">2+</div>
                  <p className="text-white text-opacity-80">Anos de Estudo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experiências Profissionais */}
          <div className="animate-section mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Building className="mr-3" size={32} />
              Experiências Profissionais
            </h2>

            <div className="space-y-8">
              {/* Estágio/Residência Atual */}
              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-700 p-4 rounded-lg flex items-center justify-center">
                      <Clock size={48} className="text-white" />
                    </div>
                    <div className="mt-4 text-center">
                      <span className="inline-block px-3 py-1 bg-blue-500 bg-opacity-20 border border-blue-500 rounded-full text-sm text-blue-400">
                        Em andamento
                      </span>
                    </div>
                  </div>

                  <div className="md:w-3/4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">Desenvolvedor Back-End - Residência</h3>
                        <p className="text-white text-opacity-80 mb-2">CETEC</p>
                        <div className="flex items-center text-white text-opacity-70 mb-2">
                          <MapPin size={16} className="mr-2" />
                          <span>Recife, PE</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-opacity-70">
                          <Calendar size={16} className="inline mr-2" />
                          Jan 2024 - Presente
                        </p>
                      </div>
                    </div>

                    <p className="text-white text-opacity-80 mb-4">
                      Participação em residência de robótica focada na implementação de robótica no auxílio aos professores da rede municipal. Trabalho em
                      equipe para criar soluções inovadoras utilizando React, Python e Debian.
                    </p>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-3">Principais responsabilidades:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <ChevronRight size={18} className="text-blue-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">
                            Desenvolvimento de interfaces responsivas e intuitivas
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight size={18} className="text-blue-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">
                            Integração com APIs REST e serviços de backend
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight size={18} className="text-blue-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">
                            Implementação de funcionalidades offline e sincronização de dados
                          </span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight size={18} className="text-blue-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">
                            Participação em reuniões de planejamento e revisão de código
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        React
                      </span>
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        Python
                      </span>
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        Debian
                      </span>
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        Coreographe
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experiência Anterior */}
              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-700 p-4 rounded-lg flex items-center justify-center">
                      <CheckCircle size={48} className="text-white" />
                    </div>
                    <div className="mt-4 text-center">
                      <span className="inline-block px-3 py-1 bg-green-500 bg-opacity-20 border border-green-500 rounded-full text-sm text-green-400">
                        Concluído
                      </span>
                    </div>
                  </div>

                  <div className="md:w-3/4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">NAO Hackaton</h3>
                        <p className="text-white text-opacity-80 mb-2">CETEC</p>
                        <div className="flex items-center text-white text-opacity-70 mb-2">
                          <MapPin size={16} className="mr-2" />
                          <span>Recife, PE</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-opacity-70">
                          <Calendar size={16} className="inline mr-2" />
                          Ago 2024 - Nov 2024
                        </p>
                      </div>
                    </div>

                    <p className="text-white text-opacity-80 mb-4">
                      Participação em residência de robótica focada na implementação de robótica no auxílio aos professores da rede municipal. Trabalho em
                      equipe para criar soluções inovadoras utilizando React, Python e Debian.
                    </p>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-3">Principais realizações:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">
                            Utilização de Metodoligas Ágeis
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">
                            Integração do robô com inteligência artificial
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">
                            Análise de dados de educação para crianças com Transtorno do Espectro Autista
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        Python
                      </span>
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        React
                      </span>
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        Coreographe
                      </span>
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        Api Gemini
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Primeira Experiência */}
              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-700 p-4 rounded-lg flex items-center justify-center">
                      <CheckCircle size={48} className="text-white" />
                    </div>
                    <div className="mt-4 text-center">
                      <span className="inline-block px-3 py-1 bg-green-500 bg-opacity-20 border border-green-500 rounded-full text-sm text-green-400">
                        Concluído
                      </span>
                    </div>
                  </div>

                  <div className="md:w-3/4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">KickOff - Residência</h3>
                        <p className="text-white text-opacity-80 mb-2">Porto Digital</p>
                        <div className="flex items-center text-white text-opacity-70 mb-2">
                          <MapPin size={16} className="mr-2" />
                          <span>Recife, PE</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white text-opacity-70">
                          <Calendar size={16} className="inline mr-2" />
                          Mai 2024 - Jun 2024
                        </p>
                      </div>
                    </div>

                    <p className="text-white text-opacity-80 mb-4">
                      Primeira experiência profissional em Residência de Software. Participação em projetos reais com
                      metodologias ágeis e trabalho em equipe.
                    </p>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-3">Principais aprendizados:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">
                            Trabalho em equipe para resoluçaõ de problemas
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">
                            Trabalho em equipe com metodologias ágeis (Scrum)
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">Edição de fotos e vídeos</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        Capcut
                      </span>
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        Canva
                      </span>
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        Scrum
                      </span>
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        Figma
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Competências Desenvolvidas */}
          <div className="animate-section mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <TrendingUp className="mr-3" size={32} />
              Competências Desenvolvidas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Users className="mr-3" size={24} />
                  Soft Skills
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ChevronRight size={18} className="text-blue-400 mr-2" />
                    <span className="text-white text-opacity-80">Trabalho em equipe</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={18} className="text-blue-400 mr-2" />
                    <span className="text-white text-opacity-80">Comunicação eficaz</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={18} className="text-blue-400 mr-2" />
                    <span className="text-white text-opacity-80">Resolução de problemas</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={18} className="text-blue-400 mr-2" />
                    <span className="text-white text-opacity-80">Adaptabilidade</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={18} className="text-blue-400 mr-2" />
                    <span className="text-white text-opacity-80">Pensamento crítico</span>
                  </li>
                </ul>
              </div>

              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Target className="mr-3" size={24} />
                  Hard Skills
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <ChevronRight size={18} className="text-blue-400 mr-2" />
                    <span className="text-white text-opacity-80">Desenvolvimento Full Stack</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={18} className="text-blue-400 mr-2" />
                    <span className="text-white text-opacity-80">Análise de dados</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={18} className="text-blue-400 mr-2" />
                    <span className="text-white text-opacity-80">Desenvolvimento Back-End</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={18} className="text-blue-400 mr-2" />
                    <span className="text-white text-opacity-80">Metodologias ágeis</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={18} className="text-blue-400 mr-2" />
                    <span className="text-white text-opacity-80">Versionamento de código</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Objetivos Profissionais */}
          <div className="animate-section">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Award className="mr-3" size={32} />
              Objetivos Profissionais
            </h2>

            <div className="service-card bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">🎯 Curto Prazo</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                      <span className="text-white text-opacity-80">
                        Conseguir um estágio em desenvolvimento de software
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                      <span className="text-white text-opacity-80">Concluir a graduação com excelência acadêmica</span>
                    </li>
                    <li className="flex items-start">
                      <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                      <span className="text-white text-opacity-80">Obter certificações AWS e Azure</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">🚀 Longo Prazo</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                      <span className="text-white text-opacity-80">
                        Tornar-me um Analista de CyberSecurity Sênior
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                      <span className="text-white text-opacity-80">Trabalhar em alguma empresa renomada e fora do Brasil</span>
                    </li>
                    <li className="flex items-start">
                      <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                      <span className="text-white text-opacity-80">Contribuir para projetos de impacto social</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="w-full py-6 px-6 md:px-12 text-center text-white text-opacity-80">
        <p>&copy; 2025 Matheus Chaves. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
