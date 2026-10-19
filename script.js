
const questionBank = {
    
technology: [
    // EASY
    { level: "easy", q: "What does HTML stand for?", o: ["Hyper Text Markup Language", "High Text Machine Language", "Home Tool Markup Language", "Hyper Transfer Main Link"], a: 0 },
    { level: "easy", q: "Which language styles web pages?", o: ["HTML", "CSS", "SQL", "Java"], a: 1 },
    { level: "easy", q: "Which symbol starts a JavaScript single-line comment?", o: ["<!--", "//", "**", "##"], a: 1 },
    { level: "easy", q: "Which data type stores true or false?", o: ["String", "Number", "Boolean", "Array"], a: 2 },
    { level: "easy", q: "Which HTML tag creates a hyperlink?", o: ["<link>", "<a>", "<href>", "<url>"], a: 1 },
    { level: "easy", q: "Which keyword declares a constant in JavaScript?", o: ["let", "var", "const", "static"], a: 2 },
    { level: "easy", q: "Which language is commonly used to query databases?", o: ["SQL", "CSS", "HTML", "XML"], a: 0 },
    { level: "easy", q: "Which HTML tag inserts an image?", o: ["<picture>", "<image>", "<img>", "<src>"], a: 2 },
    { level: "easy", q: "Which of these is a programming language?", o: ["Python", "HTTP", "HTML", "JPEG"], a: 0 },
    { level: "easy", q: "What does CPU stand for?", o: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Control Processing User"], a: 0 },

    // MEDIUM
    { level: "medium", q: "Which JavaScript method selects an element by its ID?", o: ["queryAll()", "getElementById()", "selectId()", "findElement()"], a: 1 },
    { level: "medium", q: "Which data structure follows FIFO?", o: ["Stack", "Queue", "Tree", "Graph"], a: 1 },
    { level: "medium", q: "Which SQL command retrieves data?", o: ["GET", "OPEN", "SELECT", "FETCHALL"], a: 2 },
    { level: "medium", q: "What is the usual time complexity of binary search on a sorted array?", o: ["O(n)", "O(log n)", "O(n²)", "O(1)"], a: 1 },
    { level: "medium", q: "Which Java keyword is used to inherit a class?", o: ["implements", "inherits", "extends", "superclass"], a: 2 },
    { level: "medium", q: "Which CSS layout system is designed for two-dimensional layouts?", o: ["Float", "Grid", "Inline", "Position"], a: 1 },
    { level: "medium", q: "Which Python structure stores key-value pairs?", o: ["List", "Tuple", "Dictionary", "Set"], a: 2 },
    { level: "medium", q: "What does API stand for?", o: ["Application Programming Interface", "Applied Program Internet", "Advanced Processing Input", "Application Process Integration"], a: 0 },
    { level: "medium", q: "Which Git command downloads a repository to your computer?", o: ["git push", "git clone", "git commit", "git status"], a: 1 },
    { level: "medium", q: "Which JavaScript method converts JSON text into an object?", o: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"], a: 1 },

    // HARD
    { level: "hard", q: "Which data structure is commonly used in depth-first search?", o: ["Queue", "Stack", "Heap only", "Hash table only"], a: 1 },
    { level: "hard", q: "What is the average time complexity of hash table lookup?", o: ["O(n²)", "O(n)", "O(1)", "O(log n)"], a: 2 },
    { level: "hard", q: "Which SQL clause filters grouped results?", o: ["WHERE", "ORDER BY", "HAVING", "DISTINCT"], a: 2 },
    { level: "hard", q: "Which Java concept allows one method name to have different parameter lists?", o: ["Overriding", "Overloading", "Encapsulation", "Abstraction"], a: 1 },
    { level: "hard", q: "Which traversal of a binary search tree returns values in sorted order?", o: ["Preorder", "Postorder", "Inorder", "Level order"], a: 2 },
    { level: "hard", q: "Which HTTP method is commonly used to partially update a resource?", o: ["GET", "PATCH", "TRACE", "HEAD"], a: 1 },
    { level: "hard", q: "What is the purpose of a database index?", o: ["Encrypt every record", "Speed up data retrieval", "Delete duplicate tables", "Replace all constraints"], a: 1 },
    { level: "hard", q: "Which principle hides internal implementation details and exposes essential features?", o: ["Abstraction", "Recursion", "Iteration", "Compilation"], a: 0 },
    { level: "hard", q: "Which algorithm finds shortest paths from a source in a graph with non-negative edge weights?", o: ["Bubble sort", "Dijkstra's algorithm", "Binary search", "KMP"], a: 1 },
    { level: "hard", q: "What is the worst-case time complexity of merge sort?", o: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"], a: 2 }
],

science: [
    // EASY
    { level: "easy", q: "Which planet is known as the Red Planet?", o: ["Earth", "Mars", "Venus", "Jupiter"], a: 1 },
    { level: "easy", q: "What gas do humans need to breathe?", o: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], a: 0 },
    { level: "easy", q: "What is the chemical formula of water?", o: ["CO2", "O2", "H2O", "NaCl"], a: 2 },

    // MEDIUM
    { level: "medium", q: "What is the chemical symbol for sodium?", o: ["So", "S", "Na", "N"], a: 2 },
    { level: "medium", q: "Which organ pumps blood around the human body?", o: ["Lungs", "Brain", "Heart", "Liver"], a: 2 },
    { level: "medium", q: "What force keeps planets in orbit around the Sun?", o: ["Friction", "Gravity", "Magnetism", "Tension"], a: 1 },

    // HARD
    { level: "hard", q: "Which particles have a negative electric charge?", o: ["Protons", "Neutrons", "Electrons", "Photons"], a: 2 },
    { level: "hard", q: "What is the SI unit of electric resistance?", o: ["Volt", "Ampere", "Ohm", "Watt"], a: 2 },
    { level: "hard", q: "Which cell organelle produces most of the cell's ATP?", o: ["Ribosome", "Mitochondrion", "Golgi apparatus", "Lysosome"], a: 1 }
],

math: [
    // EASY
    { level: "easy", q: "What is 12 × 8?", o: ["84", "96", "108", "88"], a: 1 },
    { level: "easy", q: "What is 25 + 37?", o: ["52", "62", "72", "57"], a: 1 },
    { level: "easy", q: "What is 10% of 200?", o: ["10", "20", "30", "40"], a: 1 },

    // MEDIUM
    { level: "medium", q: "What is the square root of 225?", o: ["12", "13", "15", "25"], a: 2 },
    { level: "medium", q: "If x + 7 = 15, what is x?", o: ["6", "7", "8", "9"], a: 2 },
    { level: "medium", q: "A train travels 120 km in 2 hours. What is its average speed?", o: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"], a: 2 },

    // HARD
    { level: "hard", q: "What is the probability of getting heads on a fair coin?", o: ["1/4", "1/3", "1/2", "1"], a: 2 },
    { level: "hard", q: "If 3x - 5 = 16, what is x?", o: ["5", "6", "7", "8"], a: 2 },
    { level: "hard", q: "What is the next number in the sequence: 2, 6, 12, 20, 30, ...?", o: ["36", "40", "42", "44"], a: 2 }
],

engineering: [
    // EASY
    { level: "easy", q: "What is the unit of electric current?", o: ["Volt", "Ampere", "Ohm", "Watt"], a: 1 },
    { level: "easy", q: "Which material is a good conductor of electricity?", o: ["Rubber", "Glass", "Copper", "Wood"], a: 2 },
    { level: "easy", q: "Which device converts electrical energy into mechanical energy?", o: ["Motor", "Generator", "Transformer", "Battery"], a: 0 },

    // MEDIUM
    { level: "medium", q: "Which law relates voltage, current, and resistance?", o: ["Faraday's law", "Ohm's law", "Newton's law", "Hooke's law"], a: 1 },
    { level: "medium", q: "Which component stores electrical energy in an electric field?", o: ["Resistor", "Capacitor", "Diode", "Fuse"], a: 1 },
    { level: "medium", q: "What is the main function of a transformer?", o: ["Convert AC to DC", "Change AC voltage", "Store charge", "Measure current"], a: 1 },

    // HARD
    { level: "hard", q: "Which logic gate produces an output of 1 only when all inputs are 1?", o: ["OR", "XOR", "AND", "NOR"], a: 2 },
    { level: "hard", q: "According to Kirchhoff's Current Law, what is true at a circuit node?", o: ["Voltage is always zero", "Current entering equals current leaving", "Resistance is infinite", "Power is always constant"], a: 1 },
    { level: "hard", q: "Which semiconductor device is commonly used for AC-to-DC rectification?", o: ["Transistor", "Diode", "Capacitor", "Inductor"], a: 1 }
],

english: [
    // EASY
    { level: "easy", q: "Choose the correct plural of 'child'.", o: ["Childs", "Children", "Childes", "Childrens"], a: 1 },
    { level: "easy", q: "What is the opposite of 'hot'?", o: ["Warm", "Cold", "Dry", "Bright"], a: 1 },
    { level: "easy", q: "Choose the correctly spelled word.", o: ["Beautifull", "Beutiful", "Beautiful", "Beautifal"], a: 2 },

    // MEDIUM
    { level: "medium", q: "Choose the synonym of 'rapid'.", o: ["Slow", "Quick", "Weak", "Quiet"], a: 1 },
    { level: "medium", q: "Choose the correct sentence.", o: ["They is playing.", "They are playing.", "They am playing.", "They be playing."], a: 1 },
    { level: "medium", q: "Fill in the blank: She has lived here ___ 2020.", o: ["for", "since", "during", "by"], a: 1 },

    // HARD
    { level: "hard", q: "Which sentence is grammatically correct?", o: ["Neither of them are ready.", "Neither of them is ready.", "Neither them is ready.", "Neither of they is ready."], a: 1 },
    { level: "hard", q: "What does the idiom 'break the ice' mean?", o: ["Destroy something", "Start a friendly conversation", "Become angry", "End a meeting"], a: 1 },
    { level: "hard", q: "Choose the antonym of 'abundant'.", o: ["Plentiful", "Ample", "Scarce", "Numerous"], a: 2 }
],

gk: [
    // EASY
    { level: "easy", q: "What is the capital of India?", o: ["Mumbai", "New Delhi", "Hyderabad", "Chennai"], a: 1 },
    { level: "easy", q: "How many days are there in a leap year?", o: ["364", "365", "366", "367"], a: 2 },
    { level: "easy", q: "Which is the national animal of India?", o: ["Lion", "Tiger", "Elephant", "Peacock"], a: 1 },

    // MEDIUM
    { level: "medium", q: "How many continents are there?", o: ["Five", "Six", "Seven", "Eight"], a: 2 },
    { level: "medium", q: "Who wrote India's national anthem?", o: ["Mahatma Gandhi", "Rabindranath Tagore", "Jawaharlal Nehru", "Sarojini Naidu"], a: 1 },
    { level: "medium", q: "Which is the largest hot desert in the world?", o: ["Gobi", "Sahara", "Thar", "Kalahari"], a: 1 },

    // HARD
    { level: "hard", q: "Which is the largest ocean on Earth?", o: ["Atlantic", "Indian", "Arctic", "Pacific"], a: 3 },
    { level: "hard", q: "Which ancient civilization developed along the Nile River?", o: ["Roman", "Egyptian", "Mayan", "Indus Valley"], a: 1 },
    { level: "hard", q: "Which strait separates India and Sri Lanka?", o: ["Bering Strait", "Palk Strait", "Strait of Malacca", "Gibraltar Strait"], a: 1 }
],

sports: [
    // EASY
    { level: "easy", q: "How many players from one team are on the field in cricket?", o: ["9", "10", "11", "12"], a: 2 },
    { level: "easy", q: "How many players from one team are on the court in basketball?", o: ["4", "5", "6", "7"], a: 1 },
    { level: "easy", q: "Which sport uses a shuttlecock?", o: ["Tennis", "Badminton", "Hockey", "Golf"], a: 1 },

    // MEDIUM
    { level: "medium", q: "How many rings are on the Olympic symbol?", o: ["Four", "Five", "Six", "Seven"], a: 1 },
    { level: "medium", q: "In which sport is the term 'checkmate' used?", o: ["Boxing", "Chess", "Football", "Tennis"], a: 1 },
    { level: "medium", q: "How many points is a free throw worth in basketball?", o: ["1", "2", "3", "4"], a: 0 },

    // HARD
    { level: "hard", q: "In tennis, what does 'love' mean?", o: ["One point", "Two points", "Zero points", "Game point"], a: 2 },
    { level: "hard", q: "What is the maximum standard break in snooker without a free ball?", o: ["100", "147", "155", "180"], a: 1 },
    { level: "hard", q: "How long is a standard Olympic swimming pool?", o: ["25 metres", "40 metres", "50 metres", "100 metres"], a: 2 }
],

entertainment: [
    // EASY
    { level: "easy", q: "Which instrument has black and white keys?", o: ["Piano", "Drum", "Flute", "Violin"], a: 0 },
    { level: "easy", q: "Which award is famous for excellence in films?", o: ["Grammy", "Oscar", "Nobel", "Pulitzer"], a: 1 },
    { level: "easy", q: "Which platform is mainly known for streaming videos?", o: ["YouTube", "Excel", "Git", "Notepad"], a: 0 },

    // MEDIUM
    { level: "medium", q: "Which award is primarily associated with music recording?", o: ["Oscar", "Grammy", "Booker Prize", "Ballon d'Or"], a: 1 },
    { level: "medium", q: "Which instrument commonly has six strings?", o: ["Guitar", "Trumpet", "Flute", "Drum"], a: 0 },
    { level: "medium", q: "Which term describes a film made using animated images?", o: ["Documentary", "Animation", "Biography", "Thriller"], a: 1 },

    // HARD
    { level: "hard", q: "Which film-editing technique alternates between two scenes happening at the same time?", o: ["Cross-cutting", "Slow motion", "Freeze frame", "Fade-out"], a: 0 },
    { level: "hard", q: "What is the written dialogue and action plan for a film called?", o: ["Storyboard only", "Screenplay", "Soundtrack", "Credits"], a: 1 },
    { level: "hard", q: "In music, what does 'a cappella' mean?", o: ["Music played very loudly", "Singing without instrumental accompaniment", "A fast rhythm", "A solo instrumental piece"], a: 1 }
],

business: [
    // EASY
    { level: "easy", q: "What does profit mean?", o: ["Revenue minus costs", "Total expenses", "A loan", "A tax"], a: 0 },
    { level: "easy", q: "What is money deposited in a bank account called?", o: ["Savings", "Debt", "Loss", "Expense"], a: 0 },
    { level: "easy", q: "Which document records income and expenses?", o: ["Invoice only", "Budget", "Passport", "Timetable"], a: 1 },

    // MEDIUM
    { level: "medium", q: "What does GDP stand for?", o: ["General Domestic Price", "Gross Domestic Product", "Global Development Plan", "Gross Deposit Percentage"], a: 1 },
    { level: "medium", q: "What is interest?", o: ["A fee or return for borrowing or lending money", "A type of tax only", "A business address", "A product discount"], a: 0 },
    { level: "medium", q: "What is an entrepreneur?", o: ["A person who starts or runs a business", "A bank building", "A government tax", "A type of currency"], a: 0 },

    // HARD
    { level: "hard", q: "What is inflation?", o: ["A general rise in prices", "A fall in all prices", "A business loan", "A type of investment account"], a: 0 },
    { level: "hard", q: "What is diversification in investing?", o: ["Putting all money into one asset", "Spreading investments across different assets", "Avoiding all financial records", "Borrowing without repayment"], a: 1 },
    { level: "hard", q: "What does a company's balance sheet show?", o: ["Only its daily sales", "Assets, liabilities, and equity", "Only employee attendance", "Future weather conditions"], a: 1 }
],

nature: [
    // EASY
    { level: "easy", q: "Which gas do plants absorb during photosynthesis?", o: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], a: 2 },
    { level: "easy", q: "Which is the largest land animal?", o: ["Lion", "African elephant", "Giraffe", "Hippopotamus"], a: 1 },
    { level: "easy", q: "What is the process of water changing into vapour called?", o: ["Freezing", "Condensation", "Evaporation", "Melting"], a: 2 },

    // MEDIUM
    { level: "medium", q: "What is the variety of life in an ecosystem called?", o: ["Climate", "Biodiversity", "Pollution", "Weather"], a: 1 },
    { level: "medium", q: "Which layer of the atmosphere protects Earth from much of the Sun's harmful UV radiation?", o: ["Troposphere", "Ozone layer", "Mesosphere", "Exosphere"], a: 1 },
    { level: "medium", q: "Which of these is a renewable energy source?", o: ["Coal", "Petroleum", "Solar energy", "Natural gas"], a: 2 },

    // HARD
    { level: "hard", q: "Which gas is the largest contributor to human-caused global warming?", o: ["Helium", "Carbon dioxide", "Neon", "Hydrogen"], a: 1 },
    { level: "hard", q: "What is the term for a species that no longer exists anywhere on Earth?", o: ["Endangered", "Invasive", "Extinct", "Migratory"], a: 2 },
    { level: "hard", q: "What is the main purpose of a wildlife corridor?", o: ["To separate all animal populations", "To connect habitats for wildlife movement", "To increase urban traffic", "To prevent plant growth"], a: 1 }
]
};

const categorySelect = document.getElementById("category");
const difficultySelect = document.getElementById("difficulty");
const startBtn = document.getElementById("start-btn");
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const questionCount = document.getElementById("question-count");
const scoreText = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");
const retryBtn = document.getElementById("retry-btn");
const homeBtn = document.getElementById("home-btn");

let questions = [];
let currentQuestion = 0;
let score = 0;
let answered = false;

function startQuiz() {
    const category = categorySelect.value;
    const level = difficultySelect.value;

    if (!category) {
        alert("Please select a category first!");
        return;
    }

    questions = questionBank[category].filter(
        question => question.level === level
    );

    currentQuestion = 0;
    score = 0;

    document.querySelector("main > section").hidden = true;
    document.querySelector(".quiz-box").hidden = true;
    quizSection.hidden = false;
    resultSection.hidden = true;

    showQuestion();
}

function showQuestion() {
    answered = false;
    const question = questions[currentQuestion];

    questionCount.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    scoreText.textContent = `Score: ${score}`;
    questionText.textContent = question.q;
    optionsContainer.innerHTML = "";
    feedback.textContent = "";
    nextBtn.hidden = true;

    progressBar.style.width =
        `${(currentQuestion / questions.length) * 100}%`;

    question.o.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "option-btn";
        button.addEventListener("click", () => checkAnswer(index, button));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selected, selectedButton) {
    if (answered) return;
    answered = true;

    const question = questions[currentQuestion];
    const optionButtons = optionsContainer.querySelectorAll("button");

    optionButtons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.a) {
            button.classList.add("correct");
        }
    });

    if (selected === question.a) {
        score++;
        feedback.textContent = "Correct! Well done!";
        feedback.style.color = "#059669";
    } else {
        selectedButton.classList.add("wrong");
        feedback.textContent =
            `Incorrect. Correct answer: ${question.o[question.a]}`;
        feedback.style.color = "#dc2626";
    }

    scoreText.textContent = `Score: ${score}`;
    nextBtn.textContent =
        currentQuestion === questions.length - 1
            ? "View Results"
            : "Next Question";

    nextBtn.hidden = false;
}

function showResults() {
    quizSection.hidden = true;
    resultSection.hidden = false;

    const percentage = Math.round((score / questions.length) * 100);

    finalScore.textContent =
        `You scored ${score} out of ${questions.length} (${percentage}%).`;

    resultMessage.textContent =
        percentage >= 70
            ? "Excellent work! Keep learning!"
            : "Good effort! Try again to improve your score.";
}

function goHome() {
    resultSection.hidden = true;
    quizSection.hidden = true;
    document.querySelector("main > section").hidden = false;
    document.querySelector(".quiz-box").hidden = false;
}

startBtn.addEventListener("click", startQuiz);

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        progressBar.style.width = "100%";
        showResults();
    }
});

retryBtn.addEventListener("click", startQuiz);
homeBtn.addEventListener("click", goHome);