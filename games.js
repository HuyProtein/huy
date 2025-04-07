// Dữ liệu mẫu cho các trò chơi
const gamesData = [
  {
    id: "animal-quiz",
    title: "Câu đố về động vật",
    description: "Kiểm tra kiến thức của bạn về động vật hoang dã với các câu hỏi thú vị.",
    image: "/placeholder.svg?height=300&width=500",
    category: "quiz",
    difficulty: "Trung bình",
    playTime: "5-10 phút",
    ageGroup: "8+",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>',
  },
  {
    id: "animal-memory",
    title: "Trò chơi ghi nhớ động vật",
    description: "Tìm các cặp thẻ động vật giống nhau để rèn luyện trí nhớ của bạn.",
    image: "/placeholder.svg?height=300&width=500",
    category: "memory",
    difficulty: "Dễ",
    playTime: "3-5 phút",
    ageGroup: "5+",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>',
  },
  {
    id: "animal-puzzle",
    title: "Ghép hình động vật",
    description: "Ghép các mảnh ghép để tạo thành hình ảnh hoàn chỉnh của động vật hoang dã.",
    image: "/placeholder.svg?height=300&width=500",
    category: "puzzle",
    difficulty: "Trung bình",
    playTime: "5-15 phút",
    ageGroup: "6+",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>',
  },
  {
    id: "animal-coloring",
    title: "Tô màu động vật",
    description: "Thỏa sức sáng tạo với các bức tranh tô màu động vật hoang dã.",
    image: "/placeholder.svg?height=300&width=500",
    category: "coloring",
    difficulty: "Dễ",
    playTime: "10-20 phút",
    ageGroup: "3+",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"></circle><path d="M17.5 10.5c.5.667 2.1 2.9 2.5 3.5"></path><path d="M3 21c3.5-1 7-2 10.5-2.5"></path><path d="M17 21c-1-.5-2-1-3-3"></path><path d="M17 17c-2 0-5-1-5-1"></path><path d="M14 13.5c-2-1-6-1.5-7 0"></path><path d="M14 17c-1-1-2-3-2-5"></path></svg>',
  },
  {
    id: "animal-word-search",
    title: "Tìm từ về động vật",
    description: "Tìm các từ liên quan đến động vật trong bảng chữ cái.",
    image: "/placeholder.svg?height=300&width=500",
    category: "word",
    difficulty: "Trung bình",
    playTime: "5-10 phút",
    ageGroup: "7+",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>',
  },
  {
    id: "animal-trivia",
    title: "Đố vui về động vật",
    description: "Trả lời các câu hỏi thú vị về động vật hoang dã từ khắp nơi trên thế giới.",
    image: "/placeholder.svg?height=300&width=500",
    category: "quiz",
    difficulty: "Khó",
    playTime: "10-15 phút",
    ageGroup: "10+",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>',
  },
]

// Dữ liệu mẫu cho câu đố
const quizQuestions = [
  {
    id: 1,
    question: "Loài động vật nào là động vật có vú lớn nhất trên cạn?",
    options: ["Voi châu Phi", "Hà mã", "Tê giác trắng", "Hươu cao cổ"],
    correctAnswer: "Voi châu Phi",
    explanation:
      "Voi châu Phi là động vật có vú lớn nhất sống trên cạn, với chiều cao có thể đạt tới 4m và cân nặng lên đến 7 tấn.",
  },
  {
    id: 2,
    question: "Loài hổ nào lớn nhất trong họ mèo?",
    options: ["Hổ Bengal", "Hổ Siberia", "Hổ Sumatra", "Hổ Đông Dương"],
    correctAnswer: "Hổ Siberia",
    explanation:
      "Hổ Siberia (còn gọi là hổ Amur) là loài hổ lớn nhất, với con đực có thể nặng tới 300kg và dài hơn 3m.",
  },
  {
    id: 3,
    question: "Loài động vật nào có khả năng chạy nhanh nhất trên cạn?",
    options: ["Báo săn (Cheetah)", "Linh dương đầu bò", "Ngựa vằn", "Sư tử"],
    correctAnswer: "Báo săn (Cheetah)",
    explanation:
      "Báo săn có thể đạt tốc độ lên đến 112 km/h trong thời gian ngắn, khiến nó trở thành động vật trên cạn nhanh nhất thế giới.",
  },
  {
    id: 4,
    question: "Loài chim nào không thể bay?",
    options: ["Đà điểu", "Đại bàng", "Chim hải âu", "Chim ruồi"],
    correctAnswer: "Đà điểu",
    explanation: "Đà điểu là loài chim không thể bay, nhưng chúng có thể chạy với tốc độ lên đến 70 km/h.",
  },
  {
    id: 5,
    question: "Động vật nào có tuổi thọ dài nhất?",
    options: ["Rùa Galapagos", "Voi châu Phi", "Cá voi xanh", "Cá mập Greenland"],
    correctAnswer: "Cá mập Greenland",
    explanation:
      "Cá mập Greenland có thể sống đến 400 năm, khiến nó trở thành loài động vật có xương sống có tuổi thọ dài nhất được biết đến.",
  },
  {
    id: 6,
    question: "Loài động vật nào có khả năng tái tạo các bộ phận cơ thể?",
    options: ["Sao biển", "Cá heo", "Khỉ đột", "Cá sấu"],
    correctAnswer: "Sao biển",
    explanation:
      "Sao biển có khả năng tái tạo các phần cơ thể bị mất, thậm chí có thể mọc thành một cá thể mới từ một cánh tay bị đứt.",
  },
  {
    id: 7,
    question: "Loài động vật nào có thể nhìn thấy bằng đôi chân của chúng?",
    options: ["Bướm", "Ong", "Rắn", "Cá ngựa"],
    correctAnswer: "Bướm",
    explanation: "Bướm có các tế bào cảm quang ở chân, cho phép chúng 'nếm' và 'nhìn' bằng chân của mình.",
  },
  {
    id: 8,
    question: "Loài động vật nào ngủ nhiều nhất trong một ngày?",
    options: ["Koala", "Gấu trúc", "Lười ba ngón", "Sư tử"],
    correctAnswer: "Koala",
    explanation: "Koala ngủ khoảng 20-22 giờ mỗi ngày, phần lớn là do chế độ ăn lá bạch đàn ít năng lượng của chúng.",
  },
  {
    id: 9,
    question: "Loài động vật nào có trái tim lớn nhất?",
    options: ["Voi châu Phi", "Cá voi xanh", "Hươu cao cổ", "Cá mập trắng"],
    correctAnswer: "Cá voi xanh",
    explanation: "Trái tim của cá voi xanh có thể nặng tới 600kg và to bằng một chiếc xe hơi nhỏ.",
  },
  {
    id: 10,
    question: "Loài động vật nào có thể thay đổi màu sắc nhanh nhất?",
    options: ["Tắc kè hoa", "Bạch tuộc", "Cá nóc", "Ếch phi tiêu độc"],
    correctAnswer: "Bạch tuộc",
    explanation:
      "Bạch tuộc có thể thay đổi màu sắc và kết cấu da trong vòng chưa đầy một giây nhờ các tế bào sắc tố đặc biệt.",
  },
]

// Dữ liệu cho trò chơi ghi nhớ
const memoryCards = [
  { id: 1, name: "tiger", image: "/placeholder.svg?height=150&width=150&text=Tiger" },
  { id: 2, name: "tiger", image: "/placeholder.svg?height=150&width=150&text=Tiger" },
  { id: 3, name: "elephant", image: "/placeholder.svg?height=150&width=150&text=Elephant" },
  { id: 4, name: "elephant", image: "/placeholder.svg?height=150&width=150&text=Elephant" },
  { id: 5, name: "lion", image: "/placeholder.svg?height=150&width=150&text=Lion" },
  { id: 6, name: "lion", image: "/placeholder.svg?height=150&width=150&text=Lion" },
  { id: 7, name: "panda", image: "/placeholder.svg?height=150&width=150&text=Panda" },
  { id: 8, name: "panda", image: "/placeholder.svg?height=150&width=150&text=Panda" },
  { id: 9, name: "giraffe", image: "/placeholder.svg?height=150&width=150&text=Giraffe" },
  { id: 10, name: "giraffe", image: "/placeholder.svg?height=150&width=150&text=Giraffe" },
  { id: 11, name: "zebra", image: "/placeholder.svg?height=150&width=150&text=Zebra" },
  { id: 12, name: "zebra", image: "/placeholder.svg?height=150&width=150&text=Zebra" },
  { id: 13, name: "rhino", image: "/placeholder.svg?height=150&width=150&text=Rhino" },
  { id: 14, name: "rhino", image: "/placeholder.svg?height=150&width=150&text=Rhino" },
  { id: 15, name: "dolphin", image: "/placeholder.svg?height=150&width=150&text=Dolphin" },
  { id: 16, name: "dolphin", image: "/placeholder.svg?height=150&width=150&text=Dolphin" },
]

// Dữ liệu cho trò chơi ghép hình
const puzzlePieces = [
  { id: 1, position: 1, image: "/placeholder.svg?height=100&width=100&text=1" },
  { id: 2, position: 2, image: "/placeholder.svg?height=100&width=100&text=2" },
  { id: 3, position: 3, image: "/placeholder.svg?height=100&width=100&text=3" },
  { id: 4, position: 4, image: "/placeholder.svg?height=100&width=100&text=4" },
  { id: 5, position: 5, image: "/placeholder.svg?height=100&width=100&text=5" },
  { id: 6, position: 6, image: "/placeholder.svg?height=100&width=100&text=6" },
  { id: 7, position: 7, image: "/placeholder.svg?height=100&width=100&text=7" },
  { id: 8, position: 8, image: "/placeholder.svg?height=100&width=100&text=8" },
  { id: 9, position: 9, image: "/placeholder.svg?height=100&width=100&text=9" },
]

// Biến toàn cục
let activeCategory = "all"
let selectedGame = null
let currentQuestion = 0
let selectedAnswer = null
let isAnswerSubmitted = false
let score = 0
let quizCompleted = false

// Biến cho trò chơi ghi nhớ
let shuffledCards = []
let flippedCards = []
let matchedCards = []
let moves = 0
let memoryCompleted = false
let memoryTimer = 0
let memoryTimerInterval = null

// Biến cho trò chơi ghép hình
let shuffledPieces = []
let selectedPiece = null
let placedPieces = []
let puzzleCompleted = false

// Khởi tạo trang
document.addEventListener("DOMContentLoaded", () => {
  // Hiển thị danh sách trò chơi
  renderGames()

  // Xử lý sự kiện cho các tab
  const tabButtons = document.querySelectorAll(".tab-button")
  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      activeCategory = this.dataset.category
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")
      renderGames()
    })
  })

  // Xử lý sự kiện đóng dialog
  document.getElementById("close-dialog").addEventListener("click", closeGameDialog)

  // Đóng dialog khi click bên ngoài
  window.addEventListener("click", (event) => {
    const dialog = document.getElementById("game-dialog")
    if (event.target === dialog) {
      closeGameDialog()
    }
  })
})

// Hiển thị danh sách trò chơi
function renderGames() {
  const gamesContainer = document.getElementById("games-container")
  gamesContainer.innerHTML = ""

  const filteredGames =
    activeCategory === "all" ? gamesData : gamesData.filter((game) => game.category === activeCategory)

  filteredGames.forEach((game) => {
    const gameCard = document.createElement("div")
    gameCard.className = "game-card"
    gameCard.innerHTML = `
            <div class="game-image">
                <img src="${game.image}" alt="${game.title}">
                <div class="game-overlay">
                    <button class="button primary-button full-width">Chơi ngay</button>
                </div>
            </div>
            <div class="game-header">
                <div class="game-title">
                    <div class="icon-circle">${game.icon}</div>
                    <h3>${game.title}</h3>
                </div>
            </div>
            <div class="game-content">
                <p class="game-description">${game.description}</p>
                <div class="game-meta">
                    <div class="game-meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                        <span>Độ khó: ${game.difficulty}</span>
                    </div>
                    <div class="game-meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        <span>Thời gian: ${game.playTime}</span>
                    </div>
                </div>
            </div>
            <div class="game-footer">
                <span class="badge">Độ tuổi: ${game.ageGroup}</span>
            </div>
        `

    gameCard.addEventListener("click", () => selectGame(game))
    gamesContainer.appendChild(gameCard)
  })
}

// Chọn trò chơi
function selectGame(game) {
  selectedGame = game

  // Cập nhật tiêu đề và mô tả
  document.getElementById("dialog-title").textContent = game.title
  document.getElementById("dialog-description").textContent = game.description

  // Hiển thị dialog
  const dialog = document.getElementById("game-dialog")
  dialog.classList.add("open")

  // Khởi tạo trò chơi tương ứng
  if (game.id === "animal-quiz") {
    initQuizGame()
  } else if (game.id === "animal-memory") {
    initMemoryGame()
  } else if (game.id === "animal-puzzle") {
    initPuzzleGame()
  } else {
    // Trò chơi khác đang phát triển
    renderDevelopingGame()
  }
}

// Đóng dialog trò chơi
function closeGameDialog() {
  const dialog = document.getElementById("game-dialog")
  dialog.classList.remove("open")

  // Dừng timer nếu đang chạy
  if (memoryTimerInterval) {
    clearInterval(memoryTimerInterval)
    memoryTimerInterval = null
  }

  // Ẩn hiệu ứng pháo hoa
  const confettiCanvas = document.getElementById("confetti-canvas")
  confettiCanvas.style.display = "none"

  // Reset các biến trạng thái
  selectedGame = null
  currentQuestion = 0
  selectedAnswer = null
  isAnswerSubmitted = false
  score = 0
  quizCompleted = false

  flippedCards = []
  matchedCards = []
  moves = 0
  memoryCompleted = false
  memoryTimer = 0

  selectedPiece = null
  placedPieces = []
  puzzleCompleted = false
}

// Hiển thị trò chơi đang phát triển
function renderDevelopingGame() {
  const dialogBody = document.getElementById("dialog-body")
  dialogBody.innerHTML = `
        <div class="text-center py-12">
            <div class="icon-circle" style="width: 5rem; height: 5rem; margin: 0 auto 1rem;">
                ${selectedGame.icon}
            </div>
            <h3 class="text-xl font-semibold mb-4">Trò chơi đang được phát triển</h3>
            <p class="text-gray-600 mb-6">
                Chúng tôi đang nỗ lực phát triển trò chơi này. Vui lòng quay lại sau!
            </p>
            <button class="button primary-button" onclick="closeGameDialog()">Đóng</button>
        </div>
    `
}

// ===== QUIZ GAME =====

// Khởi tạo trò chơi câu đố
function initQuizGame() {
  currentQuestion = 0
  score = 0
  selectedAnswer = null
  isAnswerSubmitted = false
  quizCompleted = false

  renderQuizQuestion()
}

// Hiển thị câu hỏi quiz
function renderQuizQuestion() {
  const dialogBody = document.getElementById("dialog-body")
  const question = quizQuestions[currentQuestion]
  const progressPercent = ((currentQuestion + 1) / quizQuestions.length) * 100

  dialogBody.innerHTML = `
        <div class="quiz-container">
            <div class="quiz-progress">
                <div class="quiz-progress-header">
                    <span>Câu hỏi ${currentQuestion + 1}/${quizQuestions.length}</span>
                    <span>Điểm: ${score}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-bar-fill" style="width: ${progressPercent}%"></div>
                </div>
            </div>
            
            <div class="quiz-question">${question.question}</div>
            
            <div class="quiz-options">
                ${question.options
                  .map(
                    (option) => `
                    <div class="quiz-option" data-option="${option}" onclick="selectQuizAnswer('${option.replace(/'/g, "\\'")}')">${option}</div>
                `,
                  )
                  .join("")}
            </div>
            
            ${
              isAnswerSubmitted
                ? `
                <div class="quiz-feedback ${selectedAnswer === question.correctAnswer ? "correct" : "incorrect"}">
                    <div class="quiz-feedback-title">
                        ${
                          selectedAnswer === question.correctAnswer
                            ? "✓ Chính xác!"
                            : `✗ Không chính xác! Đáp án đúng là: ${question.correctAnswer}`
                        }
                    </div>
                    <p>${question.explanation}</p>
                </div>
            `
                : ""
            }
            
            <div class="quiz-actions">
                <button class="button outline-button" onclick="closeGameDialog()">Thoát</button>
                
                ${
                  !isAnswerSubmitted
                    ? `<button class="button primary-button" onclick="submitQuizAnswer()" ${selectedAnswer ? "" : "disabled"}>Kiểm tra</button>`
                    : `<button class="button primary-button" onclick="nextQuizQuestion()">${
                        currentQuestion < quizQuestions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"
                      }</button>`
                }
            </div>
        </div>
    `

  // Đánh dấu câu trả lời đã chọn
  if (selectedAnswer) {
    const options = document.querySelectorAll(".quiz-option")
    options.forEach((option) => {
      if (option.dataset.option === selectedAnswer) {
        option.classList.add("selected")

        if (isAnswerSubmitted) {
          if (selectedAnswer === question.correctAnswer) {
            option.classList.add("correct")
          } else {
            option.classList.add("incorrect")
          }
        }
      } else if (isAnswerSubmitted && option.dataset.option === question.correctAnswer) {
        option.classList.add("correct")
      }
    })
  }
}

// Chọn câu trả lời
function selectQuizAnswer(answer) {
  if (isAnswerSubmitted) return

  selectedAnswer = answer

  // Cập nhật giao diện
  const options = document.querySelectorAll(".quiz-option")
  options.forEach((option) => {
    option.classList.remove("selected")
    if (option.dataset.option === answer) {
      option.classList.add("selected")
    }
  })
}

// Gửi câu trả lời
function submitQuizAnswer() {
  if (!selectedAnswer || isAnswerSubmitted) return

  isAnswerSubmitted = true

  if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
    score++
  }

  renderQuizQuestion()
}

// Chuyển sang câu hỏi tiếp theo
function nextQuizQuestion() {
  if (currentQuestion < quizQuestions.length - 1) {
    currentQuestion++
    selectedAnswer = null
    isAnswerSubmitted = false
    renderQuizQuestion()
  } else {
    quizCompleted = true
    renderQuizResults()
  }
}

// Hiển thị kết quả quiz
function renderQuizResults() {
  const dialogBody = document.getElementById("dialog-body")

  // Hiển thị hiệu ứng pháo hoa
  showConfetti()

  dialogBody.innerHTML = `
        <div class="quiz-results">
            <div class="results-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            </div>
            <h3 class="text-2xl font-bold mb-2">Chúc mừng!</h3>
            <p class="text-lg mb-4">Bạn đã hoàn thành câu đố với số điểm:</p>
            <div class="results-score">${score}/${quizQuestions.length}</div>
            <p class="results-message">
                ${
                  score === quizQuestions.length
                    ? "Tuyệt vời! Bạn đã trả lời đúng tất cả các câu hỏi."
                    : score >= quizQuestions.length / 2
                      ? "Làm tốt lắm! Hãy thử lại để cải thiện điểm số của bạn."
                      : "Hãy thử lại để học hỏi thêm về động vật hoang dã nhé!"
                }
            </p>
            <div class="results-actions">
                <button class="button outline-button" onclick="closeGameDialog()">Thoát</button>
                <button class="button primary-button" onclick="initQuizGame()">Chơi lại</button>
            </div>
        </div>
    `
}

// ===== MEMORY GAME =====

// Khởi tạo trò chơi ghi nhớ
function initMemoryGame() {
  // Xáo trộn thẻ
  shuffledCards = [...memoryCards].sort(() => Math.random() - 0.5)
  flippedCards = []
  matchedCards = []
  moves = 0
  memoryCompleted = false
  memoryTimer = 0

  // Bắt đầu đếm thời gian
  if (memoryTimerInterval) {
    clearInterval(memoryTimerInterval)
  }

  memoryTimerInterval = setInterval(() => {
    memoryTimer++
    updateMemoryTimer()
  }, 1000)

  renderMemoryGame()
}

// Hiển thị trò chơi ghi nhớ
function renderMemoryGame() {
  const dialogBody = document.getElementById("dialog-body")

  dialogBody.innerHTML = `
        <div class="memory-container">
            <div class="memory-stats">
                <span>Số lượt: ${moves}</span>
                <span>Thời gian: <span id="memory-timer">00:00</span></span>
            </div>
            
            <div class="memory-grid">
                ${shuffledCards
                  .map(
                    (card) => `
                    <div class="memory-card ${flippedCards.includes(card.id) ? "flipped" : ""} ${matchedCards.includes(card.id) ? "matched" : ""}" data-id="${card.id}" onclick="flipMemoryCard(${card.id})">
                        <div class="memory-card-inner">
                            <div class="memory-card-front">?</div>
                            <div class="memory-card-back">
                                <img src="${card.image}" alt="${card.name}">
                            </div>
                        </div>
                    </div>
                `,
                  )
                  .join("")}
            </div>
            
            <div class="memory-actions">
                <button class="button outline-button" onclick="closeGameDialog()">Thoát</button>
                <button class="button outline-button" onclick="initMemoryGame()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>
                    Bắt đầu lại
                </button>
            </div>
        </div>
    `

  updateMemoryTimer()
}

// Cập nhật thời gian
function updateMemoryTimer() {
  const timerElement = document.getElementById("memory-timer")
  if (timerElement) {
    timerElement.textContent = formatTime(memoryTimer)
  }
}

// Định dạng thời gian
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
}

// Lật thẻ trong trò chơi ghi nhớ
function flipMemoryCard(cardId) {
  // Không cho phép lật thẻ đã khớp hoặc đã lật
  if (matchedCards.includes(cardId) || flippedCards.includes(cardId) || flippedCards.length >= 2) {
    return
  }

  // Lật thẻ
  flippedCards.push(cardId)

  // Cập nhật giao diện
  renderMemoryGame()

  // Nếu đã lật 2 thẻ, kiểm tra xem chúng có khớp không
  if (flippedCards.length === 2) {
    moves++

    const [firstId, secondId] = flippedCards
    const firstCard = shuffledCards.find((card) => card.id === firstId)
    const secondCard = shuffledCards.find((card) => card.id === secondId)

    if (firstCard.name === secondCard.name) {
      // Nếu khớp, thêm vào danh sách thẻ đã khớp
      matchedCards.push(firstId, secondId)
      flippedCards = []

      // Cập nhật giao diện
      renderMemoryGame()

      // Kiểm tra xem đã hoàn thành trò chơi chưa
      if (matchedCards.length === shuffledCards.length) {
        memoryCompleted = true
        clearInterval(memoryTimerInterval)

        // Hiển thị kết quả sau một chút
        setTimeout(() => {
          renderMemoryResults()
        }, 500)
      }
    } else {
      // Nếu không khớp, đợi một chút rồi lật lại
      setTimeout(() => {
        flippedCards = []
        renderMemoryGame()
      }, 1000)
    }
  }
}

// Hiển thị kết quả trò chơi ghi nhớ
function renderMemoryResults() {
  const dialogBody = document.getElementById("dialog-body")

  // Hiển thị hiệu ứng pháo hoa
  showConfetti()

  dialogBody.innerHTML = `
        <div class="memory-results">
            <div class="results-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            </div>
            <h3 class="text-2xl font-bold mb-2">Chúc mừng!</h3>
            <p class="text-lg mb-4">Bạn đã hoàn thành trò chơi ghi nhớ!</p>
            
            <div class="memory-stats-container">
                <div class="memory-stat">
                    <p class="memory-stat-label">Số lượt</p>
                    <p class="memory-stat-value">${moves}</p>
                </div>
                <div class="memory-stat">
                    <p class="memory-stat-label">Thời gian</p>
                    <p class="memory-stat-value">${formatTime(memoryTimer)}</p>
                </div>
            </div>
            
            <p class="results-message">
                Trí nhớ tuyệt vời! Bạn có thể thử lại để cải thiện thành tích của mình.
            </p>
            
            <div class="results-actions">
                <button class="button outline-button" onclick="closeGameDialog()">Thoát</button>
                <button class="button primary-button" onclick="initMemoryGame()">Chơi lại</button>
            </div>
        </div>
    `
}

// ===== PUZZLE GAME =====

// Khởi tạo trò chơi ghép hình
function initPuzzleGame() {
  // Xáo trộn các mảnh ghép
  shuffledPieces = [...puzzlePieces].sort(() => Math.random() - 0.5)
  selectedPiece = null
  placedPieces = []
  puzzleCompleted = false

  renderPuzzleGame()
}

// Hiển thị trò chơi ghép hình
function renderPuzzleGame() {
  const dialogBody = document.getElementById("dialog-body")

  dialogBody.innerHTML = `
        <div class="puzzle-container">
            <div class="puzzle-grid">
                <div class="puzzle-board">
                    <h4 class="puzzle-board-title">Bảng ghép hình</h4>
                    <div class="puzzle-board-grid">
                        ${Array.from({ length: 9 })
                          .map((_, index) => {
                            const position = index + 1
                            const placedPiece = shuffledPieces.find(
                              (piece) => piece.position === position && placedPieces.includes(piece.id),
                            )

                            return `
                                <div class="puzzle-slot ${placedPiece ? "filled" : ""}" data-position="${position}" onclick="placePuzzlePiece(${position})">
                                    ${
                                      placedPiece
                                        ? `<img src="${placedPiece.image}" alt="Piece ${placedPiece.position}">`
                                        : position
                                    }
                                </div>
                            `
                          })
                          .join("")}
                    </div>
                </div>
                
                <div class="puzzle-board">
                    <h4 class="puzzle-board-title">Các mảnh ghép</h4>
                    <div class="puzzle-pieces">
                        ${shuffledPieces
                          .map(
                            (piece) => `
                            <div class="puzzle-piece ${selectedPiece?.id === piece.id ? "selected" : ""} ${placedPieces.includes(piece.id) ? "placed" : ""}" 
                                data-id="${piece.id}" 
                                data-position="${piece.position}" 
                                onclick="selectPuzzlePiece(${piece.id})">
                                <img src="${piece.image}" alt="Piece ${piece.position}">
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            </div>
            
            <div class="puzzle-actions">
                <button class="button outline-button" onclick="closeGameDialog()">Thoát</button>
                <button class="button outline-button" onclick="initPuzzleGame()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>
                    Bắt đầu lại
                </button>
            </div>
        </div>
    `
}

// Chọn mảnh ghép
function selectPuzzlePiece(pieceId) {
  // Không cho phép chọn mảnh đã đặt
  if (placedPieces.includes(pieceId)) {
    return
  }

  selectedPiece = shuffledPieces.find((piece) => piece.id === pieceId)
  renderPuzzleGame()
}

// Đặt mảnh ghép vào vị trí
function placePuzzlePiece(position) {
  if (!selectedPiece) return

  // Kiểm tra xem vị trí có đúng không
  if (selectedPiece.position === position) {
    // Đặt mảnh ghép vào vị trí
    placedPieces.push(selectedPiece.id)
    selectedPiece = null

    // Cập nhật giao diện
    renderPuzzleGame()

    // Kiểm tra xem đã hoàn thành trò chơi chưa
    if (placedPieces.length === puzzlePieces.length) {
      puzzleCompleted = true

      // Hiển thị kết quả sau một chút
      setTimeout(() => {
        renderPuzzleResults()
      }, 500)
    }
  }
}

// Hiển thị kết quả trò chơi ghép hình
function renderPuzzleResults() {
  const dialogBody = document.getElementById("dialog-body")

  // Hiển thị hiệu ứng pháo hoa
  showConfetti()

  dialogBody.innerHTML = `
        <div class="puzzle-results">
            <div class="results-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            </div>
            <h3 class="text-2xl font-bold mb-2">Chúc mừng!</h3>
            <p class="text-lg mb-4">Bạn đã hoàn thành trò chơi ghép hình!</p>
            
            <div class="puzzle-complete-image">
                <img src="/placeholder.svg?height=300&width=300&text=Completed+Puzzle" alt="Completed Puzzle">
            </div>
            
            <p class="results-message">
                Tuyệt vời! Bạn có khả năng ghép hình rất tốt. Hãy thử với các hình khác nhé!
            </p>
            
            <div class="results-actions">
                <button class="button outline-button" onclick="closeGameDialog()">Thoát</button>
                <button class="button primary-button" onclick="initPuzzleGame()">Chơi lại</button>
            </div>
        </div>
    `
}

// ===== HIỆU ỨNG PHÁO HOA =====

// Hiển thị hiệu ứng pháo hoa
function showConfetti() {
  const canvas = document.getElementById("confetti-canvas")
  const ctx = canvas.getContext("2d")

  // Hiển thị canvas
  canvas.style.display = "block"

  // Tạo các hạt pháo hoa
  const particles = []
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      size: Math.random() * 5 + 1,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
      speedX: Math.random() * 6 - 3,
      speedY: Math.random() * 6 - 3,
      life: 100,
    })
  }

  // Hàm vẽ và cập nhật các hạt
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    let stillAlive = false

    // Cập nhật và vẽ từng hạt
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]

      // Cập nhật vị trí
      p.x += p.speedX
      p.y += p.speedY
      p.life -= 1
      p.size = Math.max(0, p.size - 0.1)

      // Vẽ hạt
      if (p.life > 0 && p.size > 0) {
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        stillAlive = true
      }
    }

    // Tiếp tục hoạt ảnh nếu còn hạt
    if (stillAlive) {
      requestAnimationFrame(animate)
    } else {
      canvas.style.display = "none"
    }
  }

  // Bắt đầu hoạt ảnh
  animate()
}

