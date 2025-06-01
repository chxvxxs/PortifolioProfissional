"use client"

import { useState, useEffect } from "react"
import { Code, BarChart2, Server, Download, Linkedin, Github, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Animação de entrada dos elementos
    const cards = document.querySelectorAll(".profile-card > div")
    cards.forEach((card, index) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(20px)"
      setTimeout(
        () => {
          card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
          card.style.opacity = "1"
          card.style.transform = "translateY(0)"
        },
        300 + index * 200,
      )
    })
  }, [])

  return (
    <>
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

      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="profile-card max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl p-8 md:p-12 text-center md:text-left">
          <div className="md:flex md:items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white border-opacity-20 shadow-lg">
                <img src="/Foto-Portifolio.JPG"></img>
              </div>
            </div>

            <div className="md:w-2/3 md:pl-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Olá, sou{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Matheus Chaves</span>
              </h1>

              <p className="text-xl text-white text-opacity-90 mb-6">
                Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais incríveis.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                <a href="/Matheus.pdf" className="btn-primary text-white font-medium py-3 px-6 rounded-full flex items-center" target="blank">
                  <Download className="w-5 h-5 mr-2" />
                  Baixar CV
                </a>

                <a
                  href="https://www.instagram.com/chavesdevcode/" target="blank"
                  className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-full hover:bg-white hover:bg-opacity-10 transition duration-300"
                >
                  Contato
                </a>
              </div>

              <div className="flex justify-center md:justify-start space-x-6">
                <a href="https://www.linkedin.com/in/matheuschavesdev/" className="social-icon text-white text-2xl" target="blank">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/chxvxxs" className="social-icon text-white text-2xl" target="blank">
                  <Github size={24} />
                </a>
                <a href="https://www.instagram.com/chavesdevcode/" className="social-icon text-white text-2xl" target="blank">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-white text-4xl mb-4 flex justify-center md:justify-start">
                <Code size={40} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Desenvolvimento Web</h3>
              <p className="text-white text-opacity-80">Criação de sites e aplicações web modernas e responsivas.</p>
            </div>

            <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-white text-4xl mb-4 flex justify-center md:justify-start">
                <BarChart2 size={40} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Análise de Dados</h3>
              <p className="text-white text-opacity-80">
                Processamento e visualização de dados para insights valiosos.
              </p>
            </div>

            <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
              <div className="text-white text-4xl mb-4 flex justify-center md:justify-start">
                <Server size={40} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Backend</h3>
              <p className="text-white text-opacity-80">Desenvolvimento de APIs e serviços robustos e escaláveis.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="w-full py-6 px-6 md:px-12 text-center text-white text-opacity-80">
        <p>&copy; 2025 Matheus Chaves. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}
