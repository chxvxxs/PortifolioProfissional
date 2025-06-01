"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Target, RotateCcw, Trophy, HelpCircle, Lightbulb, History } from "lucide-react"

export default function Jogo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [secretNumber, setSecretNumber] = useState("")
  const [currentGuess, setCurrentGuess] = useState("")
  const [attempts, setAttempts] = useState([])
  const [gameWon, setGameWon] = useState(false)
  const [showRules, setShowRules] = useState(false)

  // Gerar número secreto com 4 dígitos únicos
  const generateSecretNumber = () => {
    const digits = []
    while (digits.length < 4) {
      const digit = Math.floor(Math.random() * 10).toString()
      if (!digits.includes(digit)) {
        digits.push(digit)
      }
    }
    return digits.join("")
  }

  // Inicializar jogo
  useEffect(() => {
    setSecretNumber(generateSecretNumber())
  }, [])

  // Calcular bulls e cows
  const calculateBullsAndCows = (guess, secret) => {
    let bulls = 0
    let cows = 0

    for (let i = 0; i < 4; i++) {
      if (guess[i] === secret[i]) {
        bulls++
      } else if (secret.includes(guess[i])) {
        cows++
      }
    }

    return { bulls, cows }
  }

  // Validar entrada
  const isValidGuess = (guess) => {
    if (guess.length !== 4) return false
    if (!/^\d+$/.test(guess)) return false
    const uniqueDigits = new Set(guess)
    return uniqueDigits.size === 4
  }

  // Fazer tentativa
  const makeGuess = () => {
    if (!isValidGuess(currentGuess)) {
      alert("Por favor, digite 4 dígitos únicos (0-9)")
      return
    }

    const result = calculateBullsAndCows(currentGuess, secretNumber)
    const newAttempt = {
      guess: currentGuess,
      bulls: result.bulls,
      cows: result.cows,
      attemptNumber: attempts.length + 1,
    }

    setAttempts([...attempts, newAttempt])
    setCurrentGuess("")

    if (result.bulls === 4) {
      setGameWon(true)
    }
  }

  // Reiniciar jogo
  const resetGame = () => {
    setSecretNumber(generateSecretNumber())
    setCurrentGuess("")
    setAttempts([])
    setGameWon(false)
  }

  // Animação de entrada
  useEffect(() => {
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Portfólio</span>
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
          <Link href="/jogo" className="nav-link text-white font-medium border-b-2 border-white">
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
            className="text-white font-medium py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded"
            onClick={() => setMobileMenuOpen(false)}
          >
            Projetos
          </Link>
          <Link
            href="/jogo"
            className="text-white font-medium py-2 px-4 hover:bg-white hover:bg-opacity-10 rounded bg-white bg-opacity-10"
            onClick={() => setMobileMenuOpen(false)}
          >
            Jogo
          </Link>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="profile-card max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl p-8 md:p-12">
          {/* Header da página */}
          <div className="animate-section text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Bulls and{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Cows</span>
            </h1>
            <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
              Jogo clássico de dedução lógica. Adivinhe o número secreto de 4 dígitos únicos!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Área do Jogo */}
            <div className="animate-section">
              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Target size={40} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Área de Jogo</h2>
                  {gameWon ? (
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎉</div>
                      <p className="text-green-400 text-xl font-bold mb-2">Parabéns! Você venceu!</p>
                      <p className="text-white text-opacity-80">
                        Você descobriu o número {secretNumber} em {attempts.length} tentativas!
                      </p>
                    </div>
                  ) : (
                    <p className="text-white text-opacity-80">Digite 4 dígitos únicos para fazer sua tentativa</p>
                  )}
                </div>

                {!gameWon && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Sua tentativa:</label>
                      <input
                        type="text"
                        value={currentGuess}
                        onChange={(e) => setCurrentGuess(e.target.value.slice(0, 4))}
                        onKeyPress={(e) => e.key === "Enter" && makeGuess()}
                        placeholder="Ex: 1234"
                        className="w-full px-4 py-3 bg-black bg-opacity-50 border border-white border-opacity-30 rounded-lg text-white text-center text-2xl font-mono tracking-widest focus:outline-none focus:border-blue-400"
                        maxLength="4"
                      />
                    </div>

                    <button
                      onClick={makeGuess}
                      disabled={!isValidGuess(currentGuess)}
                      className="w-full btn-primary text-white font-medium py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Fazer Tentativa
                    </button>
                  </div>
                )}

                <div className="mt-6 flex justify-center">
                  <button
                    onClick={resetGame}
                    className="flex items-center bg-transparent border-2 border-white text-white font-medium py-2 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300"
                  >
                    <RotateCcw size={18} className="mr-2" />
                    Novo Jogo
                  </button>
                </div>

                {gameWon && (
                  <div className="mt-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                      <Trophy size={32} className="text-white" />
                    </div>
                    <p className="text-white text-opacity-80">
                      Número de tentativas: <span className="text-yellow-400 font-bold">{attempts.length}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Regras e Histórico */}
            <div className="animate-section space-y-6">
              {/* Regras */}
              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white flex items-center">
                    <HelpCircle size={24} className="mr-2" />
                    Como Jogar
                  </h3>
                  <button
                    onClick={() => setShowRules(!showRules)}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {showRules ? "Ocultar" : "Mostrar"}
                  </button>
                </div>

                {showRules && (
                  <div className="space-y-4 text-white text-opacity-80">
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center">
                        <Lightbulb size={18} className="mr-2 text-yellow-400" />
                        Objetivo:
                      </h4>
                      <p>Adivinhe o número secreto de 4 dígitos únicos.</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Regras:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• O número secreto tem 4 dígitos diferentes</li>
                        <li>• Cada dígito é de 0 a 9</li>
                        <li>• Não há dígitos repetidos</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Feedback:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                            🐂
                          </span>
                          <span>
                            <strong>Bulls:</strong> Dígito correto na posição correta
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                            🐄
                          </span>
                          <span>
                            <strong>Cows:</strong> Dígito correto na posição errada
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-500 bg-opacity-20 p-3 rounded-lg">
                      <h4 className="font-semibold text-white mb-1">Exemplo:</h4>
                      <p className="text-sm">
                        Se o número secreto for <strong>4271</strong> e você tentar <strong>1234</strong>:
                      </p>
                      <p className="text-sm">
                        Resultado: <strong>1 Bull</strong> (2 na posição correta) e <strong>2 Cows</strong> (1 e 4
                        presentes, mas em posições erradas)
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Histórico */}
              <div className="service-card bg-black bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-white border-opacity-20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <History size={24} className="mr-2" />
                  Histórico de Tentativas
                </h3>

                {attempts.length === 0 ? (
                  <p className="text-white text-opacity-60 text-center py-4">Nenhuma tentativa ainda</p>
                ) : (
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {attempts.map((attempt, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-black bg-opacity-30 p-3 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <span className="text-white text-opacity-60 text-sm">#{attempt.attemptNumber}</span>
                          <span className="text-white font-mono text-lg tracking-wider">{attempt.guess}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <span className="text-green-400 mr-1">🐂</span>
                            <span className="text-white font-bold">{attempt.bulls}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="text-yellow-400 mr-1">🐄</span>
                            <span className="text-white font-bold">{attempt.cows}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
