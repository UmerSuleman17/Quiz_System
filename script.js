const questions = [
  {
    question: "What is the function of RAM in a computer?",
    options: ["Store permanent data", "Run the operating system", "Store temporary data", "Manage network connections"],
    answerHash: "3"
  },
  {
    question: "What is the main page of a website called?",
    options: ["Start page", "Main menu", "Home page", "Root page"],
    answerHash: "3"
  },
  {
    question: "Which protocol is used to send emails?",
    options: ["FTP", "SMTP", "HTTP", "SSH"],
    answerHash: "2"
  },
  {
    question: "Which file extension is commonly associated with Python files?",
    options: [".py", ".java", ".html", ".exe"],
    answerHash: "1"
  },
  {
    question: "What does BIOS stand for?",
    options: ["Basic Input Output System", "Binary Input Output Software", "Base Internal Operating Setup", "None of the above"],
    answerHash: "1"
  },
  {
    question: "Which one is a spreadsheet application?",
    options: ["Word", "PowerPoint", "Excel", "Paint"],
    answerHash: "3"
  },
  {
    question: "What does URL stand for?",
    options: ["Uniform Resource Locator", "Universal Resource List", "Uniform Reference Link", "Universal Routing Link"],
    answerHash: "1"
  },
  {
    question: "Which company created the iPhone?",
    options: ["Google", "Apple", "Samsung", "Nokia"],
    answerHash: "2"
  },
  {
    question: "Which one is used to create presentations?",
    options: ["Excel", "Word", "Paint", "PowerPoint"],
    answerHash: "4"
  },
  {
    question: "Which programming language is primarily used for Android app development?",
    options: ["Swift", "Java", "Python", "Ruby"],
    answerHash: "2"
  },
  {
    question: "What type of device is a keyboard?",
    options: ["Output", "Storage", "Processing", "Input"],
    answerHash: "4"
  },
  {
    question: "Which of the following is a database management system?",
    options: ["HTML", "CSS", "MySQL", "TCP/IP"],
    answerHash: "3"
  },
  {
    question: "What does SSD stand for?",
    options: ["Solid State Drive", "Software System Drive", "Secure Storage Device", "Static Storage Disk"],
    answerHash: "1"
  },
  {
    question: "What does CPU stand for?",
    options: ["Central Processing Unit", "Computer Personal Unit", "Central Performance Unit", "Control Processing Unit"],
    answerHash: "1"
  },
  {
    question: "Which programming language is used in web browsers?",
    options: ["Java", "C++", "JavaScript", "Python"],
    answerHash: "3"
  },
  {
    question: "What is phishing?",
    options: ["Data encryption", "Online Fraud", "Software update", "Spam filtering"],
    answerHash: "2"
  },
  {
    question: "Which company developed the Windows operating system?",
    options: ["Apple", "Microsoft", "IBM", "Google"],
    answerHash: "2"
  },
  {
    question: "Which of the following is not hardware?",
    options: ["Monitor", "Keyboard", "Mouse", "Linux"],
    answerHash: "4"
  },
  {
    question: "Which key is used to refresh a webpage in most browsers?",
    options: ["F2", "F5", "Ctrl", "Esc"],
    answerHash: "2"
  },
  {
    question: "What is the brain of the computer?",
    options: ["RAM", "Hard Drive", "CPU", "GPU"],
    answerHash: "3"
  },
  {
    question: "Which one is an open-source operating system?",
    options: ["Windows", "macOS", "Linux", "DOS"],
    answerHash: "3"
  },
  {
    question: "Which technology is used for wireless communication?",
    options: ["Bluetooth", "LAN", "HDMI", "USB"],
    answerHash: "1"
  },
  {
    question: "Which device stores the operating system?",
    options: ["RAM", "CPU", "Hard Drive", "ROM"],
    answerHash: "3"
  },
  {
    question: "Which part of the computer handles graphics?",
    options: ["CPU", "RAM", "GPU", "SSD"],
    answerHash: "3"
  },
  {
    question: "Which of these is not an operating system?",
    options: ["Windows", "Linux", "Oracle", "macOS"],
    answerHash: "3"
  },
  {
    question: "Which storage device is non-volatile?",
    options: ["RAM", "ROM", "Cache", "Registers"],
    answerHash: "2"
  },
  {
    question: "Which of the following is not a programming language?",
    options: ["Python", "HTML", "Java", "C++"],
    answerHash: "2"
  },
  {
    question: "What does GPU stand for?",
    options: ["General Processing Unit", "Graphics Processing Unit", "Graphics Performance Unit", "General Performance Unit"],
    answerHash: "2"
  },
  {
    question: "What is the main function of an operating system?",
    options: ["Manage hardware resources", "Develop software", "Create webpages", "Control internet access"],
    answerHash: "1"
  },
  {
    question: "Which port is used for HTTP?",
    options: ["21", "23", "80", "110"],
    answerHash: "3"
  },
  {
    question: "What is an IP address used for?",
    options: ["Storing files", "Identifying a device on a network", "Encrypting data", "Running applications"],
    answerHash: "2"
  },
  {
    question: "Which one is a web browser?",
    options: ["Google", "Chrome", "Linux", "Windows"],
    answerHash: "2"
  },
  {
    question: "Who is the founder of Microsoft?",
    options: ["Steve Jobs", "Bill Gates", "Larry Page", "Mark Zuckerberg"],
    answerHash: "2"
  },
  {
    question: "Which protocol is used to transfer files?",
    options: ["HTTP", "SMTP", "FTP", "IP"],
    answerHash: "3"
  },
  {
    question: "What does HTML stand for?",
    options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Text Module Language", "None of the above"],
    answerHash: "1"
  },
  {
    question: "Which of these is a high-level programming language?",
    options: ["Assembly", "Machine Code", "Python", "Binary"],
    answerHash: "3"
  },
  {
    question: "What does HTTP stand for?",
    options: ["Hyper Transfer Text Protocol", "HyperText Transfer Protocol", "HighText Transfer Protocol", "Hyper Transfer Traffic Protocol"],
    answerHash: "2"
  },
  {
    question: "Which of these is an input device?",
    options: ["Monitor", "Speaker", "Mouse", "Printer"],
    answerHash: "3"
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answerHash: "3"
  },
  {
    question: "Which of these is used to compile Java code?",
    options: ["javac", "java", "javadoc", "jre"],
    answerHash: "1"
  }
];

let currentQuestion = 0;
let score = 0;
const totalQuestions = questions.length;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = `Q${currentQuestion + 1}: ${q.question}`;
  optionsEl.innerHTML = "";
  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.onclick = () => selectOption(index);
    optionsEl.appendChild(btn);
  });
}


function selectOption(selectedIndex) {
  const correctIndex = parseInt(questions[currentQuestion].answerHash) - 1;
  if (selectedIndex === correctIndex) {
    score++;
  }

  // Disable all buttons after one is clicked
  Array.from(optionsEl.children).forEach(btn => {
    btn.disabled = true;
  });

  nextBtn.style.display = "inline-block";
}


// function selectOption(selectedIndex) {
//   const correctIndex = questions[currentQuestion].answer;
//   if (selectedIndex === correctIndex) {
//     score++;
//   }

//   // Disable all buttons after one is clicked
//   Array.from(optionsEl.children).forEach(btn => {
//     btn.disabled = true;
//   });

//   nextBtn.style.display = "inline-block";
// }

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < totalQuestions) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz-box").style.display = "none";
  resultBox.style.display = "block";
  scoreEl.textContent = `${score} out of ${totalQuestions}`;
}

loadQuestion();
const registerId = localStorage.getItem("register_id");
// On successful login or registration
localStorage.setItem("register_id", userData.id); // replace `userData.id` with actual value
console.log({
  register_id: registerId,
  score: score,
  total_questions: questions.length
});
