"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Code,
  ExternalLink,
  Github,
  Star,
  Calendar,
  Smartphone,
  Database,
  Globe,
  Monitor,
  Layers,
  Eye,
  Target,
} from "lucide-react"

export default function Projetos() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("todos")

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

  // Lista de projetos
  const projetos = [
    {
      id: 1,
      titulo: "Portfolio Pessoal",
      descricao: "Site de portfólio pessoal desenvolvido com HTML e CSS.",
      imagem: "/PortifolioWeb.png?height=200&width=400",
      categoria: "web",
      tecnologias: ["HTML", "CSS"],
      destaque: true,
      github: "https://github.com/chxvxxs/Perfil-Profissional",
      demo: "https://perfil-profissional-wheat.vercel.app/",
      data: "Junho 2024",
    },
    {
      id: 2,
      titulo: "Loja Sportlife",
      descricao: "Simulação de uma loja que vende produtos voltado ao público esportivo.",
      imagem: "/Sportlife.png?height=200&width=400",
      categoria: "Web",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      destaque: false,
      github: "https://github.com/chxvxxs/Loja-Sportlife",
      demo: "https://fanciful-hummingbird-525198.netlify.app/index.html",
      data: "Julho 2022",
    },
    {
      id: 3,
      titulo: "Numa",
      descricao: "Plataforma de gerenciamento teatral.",
      imagem: "/Numa.png?height=200&width=400",
      categoria: "dados",
      tecnologias: ["ChartJs", "Js", "HTML", "CSS"],
      destaque: false,
      github: "https://github.com/gabssiin/Projeto-Web-2024.2",
      demo: "https://projeto-web-2024-2.vercel.app/",
      data: "Dezembro 2024",
    },
    {
      id: 4,
      titulo: "Fragrance Perfumaria",
      descricao: "Simulação de uma perfumaria virtual, projeto vendido para amigos da época de colégio.",
      imagem: "/Fragrance.png?height=200&width=400",
      categoria: "web",
      tecnologias: ["HTMl", "JavaScript", "CSS"],
      destaque: false,
      github: "https://github.com/chxvxxs/Fragrance-Perfumaria",
      demo: "https://chxvxxs.github.io/Fragrance-Perfumaria/index.html",
      data: "Julho 2022",
    },
    {
      id: 5,
      titulo: "Conversor Universal",
      descricao: "Conversor de medidas, temperaturas e comprimentos.",
      imagem: "Conversores.png/?height=200&width=400",
      categoria: "web",
      tecnologias: ["Next Js", "CSS", "JS"],
      destaque: true,
      github: "https://github.com/chxvxxs/Conversores",
      demo: "https://conversores-one.vercel.app/",
      data: "Abril 2024",
    },
    {
      id: 6,
      titulo: "Jogo de ados",
      descricao: "Jogo feito com programação front end para praticar.",
      imagem: "/JogoDados.png?height=200&width=400",
      categoria: "web",
      tecnologias: ["Next Js", "Tailwind Css", "JavaScript"],
      destaque: true,
      github: "https://github.com/chxvxxs/JogoDoDadoPFE",
      demo: "https://jogo-do-dado-pfe.vercel.app/",
      data: "Março 2025",
    },
  ]
  const projetosFiltrados =
    activeFilter === "todos" ? projetos : projetos.filter((projeto) => projeto.categoria === activeFilter)

  const getCategoryIcon = (categoria) => {
    switch (categoria) {
      case "web":
        return <Globe className="mr-2" size={16} />
      case "mobile":
        return <Smartphone className="mr-2" size={16} />
      case "dados":
        return <Database className="mr-2" size={16} />
      default:
        return <Code className="mr-2" size={16} />
    }
  }

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
          <Link href="/profissional" className="nav-link text-white font-medium">
            Experiência Profissional
          </Link>
          <Link href="/projetos" className="nav-link text-white font-medium border-b-2 border-white">
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
            className="text-white font-medium py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded"
            onClick={() => setMobileMenuOpen(false)}
          >
            Experiência Profissional
          </Link>
          <Link
            href="/projetos"
            className="text-white font-medium py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded bg-white bg-opacity-10"
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
        <div className="profile-card max-w-6xl w-full rounded-2xl overflow-hidden shadow-2xl p-8 md:p-12">
          {/* Header da página */}
          <div className="animate-section text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meus{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Projetos</span>
            </h1>
            <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes em desenvolvimento e análise de dados.
            </p>
          </div>

          {/* Filtros */}
          <div className="animate-section mb-10">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setActiveFilter("todos")}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeFilter === "todos"
                    ? "bg-white text-black font-medium"
                    : "bg-black bg-opacity-50 text-white border border-white border-opacity-30 hover:bg-opacity-70"
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setActiveFilter("web")}
                className={`px-6 py-2 rounded-full transition-all flex items-center ${
                  activeFilter === "web"
                    ? "bg-white text-black font-medium"
                    : "bg-black bg-opacity-50 text-white border border-white border-opacity-30 hover:bg-opacity-70"
                }`}
              >
                <Monitor size={16} className="mr-2" /> Web
              </button>
              <button
                onClick={() => setActiveFilter("dados")}
                className={`px-6 py-2 rounded-full transition-all flex items-center ${
                  activeFilter === "dados"
                    ? "bg-white text-black font-medium"
                    : "bg-black bg-opacity-50 text-white border border-white border-opacity-30 hover:bg-opacity-70"
                }`}
              >
                <Database size={16} className="mr-2" /> Dados
              </button>
            </div>
          </div>

          {/* Projetos em Destaque */}
          {activeFilter === "todos" && (
            <div className="animate-section mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Star className="mr-3" size={28} />
                Projetos em Destaque
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projetos
                  .filter((projeto) => projeto.destaque)
                  .map((projeto) => (
                    <div
                      key={projeto.id}
                      className="service-card bg-black bg-opacity-50 rounded-lg backdrop-blur-sm border border-white border-opacity-20 overflow-hidden"
                    >
                      <div className="relative">
                        <img
                          src={projeto.imagem || "/placeholder.svg"}
                          alt={projeto.titulo}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute top-3 right-3 bg-black bg-opacity-70 px-3 py-1 rounded-full flex items-center">
                          {getCategoryIcon(projeto.categoria)}
                          <span className="text-white text-xs capitalize">{projeto.categoria}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{projeto.titulo}</h3>
                        <p className="text-white text-opacity-80 mb-4">{projeto.descricao}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {projeto.tecnologias.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white text-opacity-60 text-sm flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {projeto.data}
                          </span>
                          <div className="flex space-x-3">
                            <a
                              href={projeto.github}
                              className="text-white hover:text-blue-400 transition-colors"
                              aria-label="Ver código no GitHub"
                            >
                              <Github size={18} />
                            </a>
                            <a
                              href={projeto.demo}
                              className="text-white hover:text-blue-400 transition-colors"
                              aria-label="Ver demonstração"
                            >
                              <ExternalLink size={18} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Lista de Projetos */}
          <div className="animate-section">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Layers className="mr-3" size={28} />
              {activeFilter === "todos" ? "Todos os Projetos" : `Projetos de ${activeFilter}`}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projetosFiltrados.map((projeto) => (
                <div
                  key={projeto.id}
                  className="service-card bg-black bg-opacity-50 rounded-lg backdrop-blur-sm border border-white border-opacity-20 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={projeto.imagem || "/placeholder.svg"}
                      alt={projeto.titulo}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-black bg-opacity-70 px-3 py-1 rounded-full flex items-center">
                      {getCategoryIcon(projeto.categoria)}
                      <span className="text-white text-xs capitalize">{projeto.categoria}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{projeto.titulo}</h3>
                    <p className="text-white text-opacity-80 mb-4">{projeto.descricao}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projeto.tecnologias.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full text-sm text-blue-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white text-opacity-60 text-sm flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {projeto.data}
                      </span>
                      <div className="flex space-x-3">
                        <a
                          href={projeto.github}
                          className="text-white hover:text-blue-400 transition-colors"
                          aria-label="Ver código no GitHub"
                        >
                          <Github size={18} />
                        </a>
                        <a
                          href={projeto.demo}
                          className="text-white hover:text-blue-400 transition-colors"
                          aria-label="Ver demonstração"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Seção de Contato */}
          <div className="animate-section mt-16">
            <div className="service-card bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-sm border border-white border-opacity-20 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Interessado em trabalhar comigo?</h2>
              <p className="text-white text-opacity-90 mb-6 max-w-2xl mx-auto">
                Estou sempre aberto a novas oportunidades e colaborações. Se você gostou do meu trabalho e tem um
                projeto em mente, entre em contato!
              </p>
              <a
                href="https://www.instagram.com/chavesdevcode/"
                target="blank"
                className="inline-flex items-center bg-white text-black font-medium py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors"
              >
                <Eye size={18} className="mr-2" />
                Entre em contato
              </a>
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
