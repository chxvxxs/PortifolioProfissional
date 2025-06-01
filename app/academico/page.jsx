"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  GraduationCap,
  BookOpen,
  Award,
  Calendar,
  Clock,
  CheckCircle,
  Code,
  Briefcase,
  ChevronRight,
  Star,
  BarChart2,
  Server,
} from "lucide-react"

export default function Academico() {
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
          <Link href="/academico" className="nav-link text-white font-medium border-b-2 border-white">
            Experiência Acadêmica
          </Link>
          <Link href="/profissional" className="nav-link text-white font-medium">
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
            className="text-white font-medium py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded bg-white bg-opacity-10"
            onClick={() => setMobileMenuOpen(false)}
          >
            Experiência Acadêmica
          </Link>
          <Link
            href="/profissional"
            className="text-white font-medium py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded"
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Acadêmica</span>
            </h1>
            <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Minha jornada acadêmica e formação profissional na área de tecnologia.
            </p>
          </div>

          {/* Formação Acadêmica Atual */}
          <div className="animate-section mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="mr-3" size={32} />
              Formação Acadêmica
            </h2>

            <div className="service-card bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <GraduationCap size={64} className="text-white" />
                  </div>
                </div>

                <div className="md:w-3/4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Sistemas para Internet</h3>
                    <span className="inline-block px-4 py-2 bg-green-500 bg-opacity-20 border border-green-500 rounded-full text-sm text-green-400 mt-2 md:mt-0">
                      <Calendar size={14} className="inline mr-2" />
                      3º Período
                    </span>
                  </div>

                  <p className="text-lg text-white text-opacity-90 mb-4">
                    Universidade Católica de Pernambuco (UNICAP)
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Sobre o curso:</h4>
                    <p className="text-white text-opacity-80 mb-4">
                      Graduação focada no desenvolvimento de sistemas web, programação, banco de dados e tecnologias
                      para internet. O curso proporciona uma formação completa para atuar no desenvolvimento de soluções
                      digitais modernas.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Principais disciplinas:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-center">
                        <ChevronRight size={18} className="text-blue-400 mr-2" />
                        <span className="text-white text-opacity-80">Programação para Web</span>
                      </div>
                      <div className="flex items-center">
                        <ChevronRight size={18} className="text-blue-400 mr-2" />
                        <span className="text-white text-opacity-80">Banco de Dados</span>
                      </div>
                      <div className="flex items-center">
                        <ChevronRight size={18} className="text-blue-400 mr-2" />
                        <span className="text-white text-opacity-80">Programação Front-end</span>
                      </div>
                      <div className="flex items-center">
                        <ChevronRight size={18} className="text-blue-400 mr-2" />
                        <span className="text-white text-opacity-80">Rede de Computadores</span>
                      </div>
                      <div className="flex items-center">
                        <ChevronRight size={18} className="text-blue-400 mr-2" />
                        <span className="text-white text-opacity-80">Programação Orientada a Objetos</span>
                      </div>
                      <div className="flex items-center">
                        <ChevronRight size={18} className="text-blue-400 mr-2" />
                        <span className="text-white text-opacity-80">Arquitetura de Software</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Residências de Software */}
          <div className="animate-section mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Briefcase className="mr-3" size={32} />
              Residências de Software
            </h2>

            <div className="space-y-8">
              {/* Residência 1 */}
              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-700 p-4 rounded-lg flex items-center justify-center">
                      <CheckCircle size={48} className="text-white" />
                    </div>
                    <div className="mt-4 text-center">
                      <span className="inline-block px-3 py-1 bg-green-500 bg-opacity-20 border border-green-500 rounded-full text-sm text-green-400">
                        Concluída
                      </span>
                    </div>
                  </div>

                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-white mb-2">Residência Porto Digital</h3>
                    <p className="text-white text-opacity-70 mb-4">
                      <Calendar size={16} className="inline mr-2" />
                      Mai 2024 - Jul 2024
                    </p>

                    <p className="text-white text-opacity-80 mb-4">
                      Residência tecnológica com o tema ambiental, voltada para combater grandes impactos climáticos.
                      Usando de soluções tecnológicas de Hardware e Software para intervir de maneira efetiva.
                    </p>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Principais realizações:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">
                            Idealizaçã de uma plataforma de empregos verdes - VERDANA
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">
                            Prototipação pelo Figma
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">
                            Aplicação de Metodologias Ágeis e de ferramentas de gerenciamento de demandas
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        Figma
                      </span>
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        Canva
                      </span>
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        Scrum
                      </span>
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        Trello
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Residência 2 */}
              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-700 p-4 rounded-lg flex items-center justify-center">
                      <CheckCircle size={48} className="text-white" />
                    </div>
                    <div className="mt-4 text-center">
                      <span className="inline-block px-3 py-1 bg-green-500 bg-opacity-20 border border-green-500 rounded-full text-sm text-green-400">
                        Concluída
                      </span>
                    </div>
                  </div>

                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-white mb-2">NAO - Hackaton</h3>
                    <p className="text-white text-opacity-70 mb-4">
                      <Calendar size={16} className="inline mr-2" />
                      Ago 2024 - Nov 2024
                    </p>

                    <p className="text-white text-opacity-80 mb-4">
                      Focada em acolher crianças com Transtorno do Espectro Autista, utilizando o robô humanóide NAO.
                      Realizamos a construção de uma API em python, visando automatizar o processo para facilitar a interação entre o NAO e o professor.
                    </p>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Principais realizações:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">
                            Apresentação na Programação de Robótica do Recife e no RecnPlay
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">
                            Desenvolvimento de uma API própria
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">
                            Apresentação na Bienal da UNE
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        Python
                      </span>
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        Coreographe
                      </span>
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        Gemini
                      </span>
                      <span className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400">
                        Canva
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Residência 3 */}
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
                    <h3 className="text-xl font-bold text-white mb-2">Residência em Robótica</h3>
                    <p className="text-white text-opacity-70 mb-4">
                      <Calendar size={16} className="inline mr-2" />
                      Mar 2024 - Presente
                    </p>

                    <p className="text-white text-opacity-80 mb-4">
                     Automatização de processos, utilizando de um chatbot para o professor ter o robô como um recurso aliado a ele em sala de aula.
                      Construção de um site com front end integrado a API construída em python para o professor implementar funcionalidades por meio do chat.
                    </p>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-white mb-2">Projetos em andamento:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">
                            Desenvolvimento de uma API na última versão do python
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">
                            Front-End Intuitivo e fácil de ser navegado
                          </span>
                        </li>
                        <li className="flex items-start">
                          <Star size={18} className="text-yellow-400 mr-2 mt-1" />
                          <span className="text-white text-opacity-80">
                            Implementação nas escolas da rede municipal de ensino da Prefeitura da Cidade do Recife
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
            </div>
          </div>

          {/* Cursos e Certificações */}
          <div className="animate-section">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Award className="mr-3" size={32} />
              Cursos e Certificações
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 text-3xl">
                    <Code size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Desenvolvimento Web Full Stack</h3>
                    <p className="text-white text-opacity-70 mb-2">RocketSeat</p>
                    <p className="text-white text-opacity-80 text-sm">
                      Curso completo de desenvolvimento web com HTML, CSS, JavaScript, React, Node.js, TypeScript e MongoDB.
                    </p>
                  </div>
                </div>
              </div>

              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 text-3xl">
                    <BarChart2 size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Análise de Dados com Python</h3>
                    <p className="text-white text-opacity-70 mb-2">Alura</p>
                    <p className="text-white text-opacity-80 text-sm">
                      Formação em Ciência de dados com Python, Pandas, NumPy e visualização de dados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 text-3xl">
                    <BookOpen size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Prazer, Arte!</h3>
                    <p className="text-white text-opacity-70 mb-2">Instituto Memaker</p>
                    <p className="text-white text-opacity-80 text-sm">
                      Curso voltado para o desenvolvimento das soft skilss.
                    </p>
                  </div>
                </div>
              </div>

              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 text-3xl">
                    <Server size={28} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Java - Nélio Alvesr</h3>
                    <p className="text-white text-opacity-70 mb-2">Udemy</p>
                    <p className="text-white text-opacity-80 text-sm">
                      Certificação básica de Java com foco em Programação Orientada a Objetos.
                    </p>
                  </div>
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
