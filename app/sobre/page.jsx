"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Code,
  BarChart2,
  Server,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  GraduationCap,
  BookOpen,
  Award,
  Calendar,
} from "lucide-react"

export default function Sobre() {
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
          <Link href="/sobre" className="nav-link text-white font-medium border-b-2 border-white">
            Sobre
          </Link>
          <Link href="/academico" className="nav-link text-white font-medium">
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
            className="text-white font-medium py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded bg-white bg-opacity-10"
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
              Sobre <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Mim</span>
            </h1>
            <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Estudante fascinado por tecnologia, sempre em busca de aperfeiçoar meus conhecimentos e em novos desafios na área Tech.
            </p>
          </div>

          {/* Seção de Apresentação */}
          <div className="animate-section mb-12">
            <div className="md:flex md:items-center md:gap-8">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-white border-opacity-20 shadow-lg">
                  <img src="/Foto-Portifolio.JPG"></img>
                </div>
              </div>

              <div className="md:w-2/3 text-white">
                <h2 className="text-2xl font-semibold mb-4">Quem sou eu?</h2>
                <p className="text-lg text-white text-opacity-90 mb-4">
                  Estudante dedicado e entusiasta da tecnologia, atualmente cursando
                  <strong className="text-white"> Sistemas para Internet</strong> na Universidade Católica de
                  Pernambuco. Minha jornada na área de tecnologia começou com o curso técnico em
                  <strong className="text-white"> Análise e Desenvolvimento de Sistemas</strong> na Escola Técnica
                  Estadual Porto Digital.
                </p>
                <p className="text-lg text-white text-opacity-90 mb-6">
                  Atualmente, estou expandindo meus conhecimentos em
                  <strong className="text-white"> Análise de Dados</strong> no programa Alura One, buscando me especializar em uma
                  área que considero fundamental para o futuro da tecnologia.
                </p>

                <div className="flex justify-center md:justify-start space-x-6">
                  <a href="https://www.linkedin.com/in/matheuschavesdev/" className="social-icon text-white text-2xl" target="blank">
                    <Linkedin size={28} />
                  </a>
                  <a href="https://github.com/chxvxxs" className="social-icon text-white text-2xl" target="blank">
                    <Github size={28} />
                  </a>
                  <a href="https://www.instagram.com/chavesdevcode/" className="social-icon text-white text-2xl" target="blank">
                    <Instagram size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formação Acadêmica */}
          <div className="animate-section mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Formação Acadêmica</h2>

            <div className="space-y-8">
              {/* Graduação Atual */}
              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <div className="flex items-start gap-4">
                  <div className="text-white text-3xl">
                    <GraduationCap size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">Sistemas para Internet</h3>
                      <span className="inline-block px-3 py-1 bg-green-500 bg-opacity-20 border border-green-500 rounded-full text-sm text-green-400">
                        <Calendar size={14} className="inline mr-1" />
                        Em andamento
                      </span>
                    </div>
                    <p className="text-white text-opacity-80 mb-2">Universidade Católica de Pernambuco (UNICAP)</p>
                    <p className="text-white text-opacity-70">
                      Graduação focada no desenvolvimento de sistemas web, programação, banco de dados e tecnologias
                      para internet.
                    </p>
                  </div>
                </div>
              </div>

              {/* Curso Técnico */}
              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <div className="flex items-start gap-4">
                  <div className="text-white text-3xl">
                    <Award size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        Técnico em Análise e Desenvolvimento de Sistemas
                      </h3>
                      <span className="inline-block px-3 py-1 bg-blue-500 bg-opacity-20 border border-blue-500 rounded-full text-sm text-blue-400">
                        <Award size={14} className="inline mr-1" />
                        Concluído
                      </span>
                    </div>
                    <p className="text-white text-opacity-80 mb-2">Escola Técnica Estadual Porto Digital</p>
                    <p className="text-white text-opacity-70">
                      Formação técnica com foco em lógica de programação, desenvolvimento de sistemas, banco de dados e
                      metodologias de desenvolvimento.
                    </p>
                  </div>
                </div>
              </div>

              {/* Curso Complementar */}
              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <div className="flex items-start gap-4">
                  <div className="text-white text-3xl">
                    <BookOpen size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">Análise de Dados</h3>
                      <span className="inline-block px-3 py-1 bg-purple-500 bg-opacity-20 border border-purple-500 rounded-full text-sm text-purple-400">
                        <Calendar size={14} className="inline mr-1" />
                        Cursando
                      </span>
                    </div>
                    <p className="text-white text-opacity-80 mb-2">Alura</p>
                    <p className="text-white text-opacity-70">
                      Especialização em análise de dados, estatística, Python, visualização de dados e machine learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Habilidades Técnicas */}
          <div className="animate-section mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Habilidades Técnicas</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <div className="text-white text-4xl mb-4 flex justify-center">
                  <Code size={40} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">Desenvolvimento Web</h3>
                <ul className="text-white text-opacity-80 space-y-2">
                  <li>• HTML5, CSS3, JavaScript</li>
                  <li>• React.js, Next.js</li>
                  <li>• Node.js</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>

              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <div className="text-white text-4xl mb-4 flex justify-center">
                  <BarChart2 size={40} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">Análise de Dados</h3>
                <ul className="text-white text-opacity-80 space-y-2">
                  <li>• Python, Pandas</li>
                  <li>• SQL, PostgreSQL</li>
                  <li>• Estatística Descritiva</li>
                  <li>• Visualização de Dados</li>
                </ul>
              </div>

              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <div className="text-white text-4xl mb-4 flex justify-center">
                  <Server size={40} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">Ferramentas & Outros</h3>
                <ul className="text-white text-opacity-80 space-y-2">
                  <li>• Git, GitHub</li>
                  <li>• VS Code</li>
                  <li>• Figma</li>
                  <li>• Metodologias Ágeis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Objetivos e Interesses */}
          <div className="animate-section">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Objetivos e Interesses</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <h3 className="text-xl font-semibold text-white mb-4">🎯 Objetivos Profissionais</h3>
                <ul className="text-white text-opacity-80 space-y-3">
                  <li>• Tornar-me um desenvolvedor full-stack completo</li>
                  <li>• Especializar-me em análise de dados e BI</li>
                  <li>• Tornar-me Analista de CyberSecurity</li>
                  <li>• Desenvolver soluções inovadoras para problemas reais</li>
                </ul>
              </div>

              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <h3 className="text-xl font-semibold text-white mb-4">💡 Áreas de Interesse</h3>
                <ul className="text-white text-opacity-80 space-y-3">
                  <li>• Desenvolvimento Back-End</li>
                  <li>• Desenvolvimento de aplicações web modernas</li>
                  <li>• Ciência de dados e visualização</li>
                  <li>• Cyber Security</li>
                </ul>
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
