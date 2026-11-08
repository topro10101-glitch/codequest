// ===================================
// CODEQUEST - COMPLETE WEBSITE SCRIPT
// ===================================

const courses = [
    {
        id: "html",
        name: "HTML Foundations",
        icon: "5",
        description: "Learn to build the structure of websites.",
        lessons: [
            ["Introduction to HTML",
                "HTML stands for HyperText Markup Language. It creates the structure of a website.",
                `<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>My first website.</p>
</body>
</html>`,
                "Create a heading and a paragraph."],

            ["Headings and Paragraphs",
                "Headings organize your page. HTML has six heading levels, from h1 to h6. Paragraphs use p.",
                `<h1>Main heading</h1>
<h2>Second heading</h2>
<h3>Third heading</h3>
<p>This is a paragraph.</p>`,
                "Create one main heading, two smaller headings, and paragraphs."],

            ["Links and Images",
                "Links use the a tag. Images use img. The src attribute tells the browser where the image is.",
                `<a href="https://example.com">Visit website</a>

<img src="photo.jpg" alt="A photo">`,
                "Add a link to a website and an image."],

            ["HTML Lists",
                "Use ul for bullet lists and ol for numbered lists. Each item goes inside li.",
                `<h2>My favorite games</h2>
<ul>
    <li>Game One</li>
    <li>Game Two</li>
    <li>Game Three</li>
</ul>`,
                "Create a list with three items."],

            ["Forms and Inputs",
                "Forms collect information from users. Inputs allow users to type or select values.",
                `<form>
    <label for="name">Your name:</label>
    <input id="name" type="text">
    <button type="submit">Send</button>
</form>`,
                "Create a form with a name input and a button."],

            ["Semantic HTML",
                "Semantic elements describe what different parts of your page mean.",
                `<header>My Website</header>
<nav>Home | About</nav>
<main>
    <section>
        <h2>Welcome</h2>
        <p>Hello!</p>
    </section>
</main>
<footer>My Footer</footer>`,
                "Build a page using header, main, section, and footer."]
        ]
    },

    {
        id: "css",
        name: "CSS Styling",
        icon: "✦",
        description: "Make websites beautiful with CSS.",
        lessons: [
            ["Introduction to CSS",
                "CSS means Cascading Style Sheets. It changes how HTML elements look.",
                `h1 {
    color: purple;
    font-size: 40px;
}

p {
    color: gray;
}`,
                "Change a heading color and its font size."],

            ["Colors and Backgrounds",
                "CSS supports named colors, HEX colors, RGB, and HSL.",
                `body {
    background-color: #101827;
    color: white;
}

.card {
    background-color: purple;
}`,
                "Create a box with a colored background."],

            ["Spacing and Borders",
                "Padding is space inside an element. Margin is space outside it.",
                `.card {
    padding: 20px;
    margin: 15px;
    border: 2px solid purple;
    border-radius: 12px;
}`,
                "Give a box padding, margin, and rounded corners."],

            ["CSS Classes",
                "Classes let you style multiple elements. A class selector begins with a dot.",
                `.highlight {
    color: orange;
    font-weight: bold;
}

/* HTML:
<p class="highlight">Hello</p>
*/`,
                "Create a class called highlight and use it twice."],

            ["Flexbox",
                "Flexbox helps arrange elements in rows or columns.",
                `.container {
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
}`,
                "Create a row containing three boxes."],

            ["Responsive CSS",
                "Media queries let you change your layout for different screen sizes.",
                `.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

@media(max-width:600px) {
    .container {
        grid-template-columns: 1fr;
    }
}`,
                "Make a two-column layout become one column on phones."]
        ]
    },

    {
        id: "js",
        name: "JavaScript Basics",
        icon: "JS",
        description: "Make websites interactive.",
        lessons: [
            ["Introduction to JavaScript",
                "JavaScript adds behavior to websites. It can react to clicks and change page content.",
                `console.log("Hello World!");

alert("Welcome to JavaScript!");`,
                "Print your favorite game using console.log."],

            ["Variables",
                "Use const for values that should not be reassigned and let for values that can change.",
                `const name = "Alex";
let score = 0;

score = score + 10;

console.log(name);
console.log(score);`,
                "Create a name variable and a score variable."],

            ["Data Types",
                "JavaScript has strings, numbers, booleans, arrays, and objects.",
                `const name = "Sam";
const age = 15;
const learning = true;

const colors = ["red", "blue"];

console.log(colors);`,
                "Create a string, a number, a boolean, and an array."],

            ["Conditions",
                "If statements let your program make decisions.",
                `let score = 75;

if (score >= 50) {
    console.log("You passed!");
} else {
    console.log("Try again!");
}`,
                "Check whether a number is greater than 10."],

            ["Functions",
                "Functions are reusable blocks of code.",
                `function greet(name) {
    return "Hello " + name;
}

console.log(greet("Alex"));`,
                "Create a function that adds two numbers."],

            ["Button Events",
                "Events let JavaScript react to user actions, such as clicking a button.",
                `const button = document.querySelector("button");

button.addEventListener("click", function() {
    document.querySelector("h1").textContent = "Clicked!";
});`,
                "Create a button that changes a heading."]
        ]
    },

    {
        id: "java",
        name: "Java Essentials",
        icon: "☕",
        description: "Learn the Java programming language.",
        lessons: [
            ["Introduction to Java",
                "Java is a programming language. Java and JavaScript are different languages.",
                `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`,
                "Change the message printed by the program."],

            ["Java Variables",
                "Java uses declared data types such as int, double, boolean, and String.",
                `int age = 15;
double price = 4.99;
boolean learning = true;
String name = "Alex";

System.out.println(name);`,
                "Create variables for your name and age."],

            ["Java Operators",
                "Operators perform mathematical calculations and comparisons.",
                `int a = 10;
int b = 5;

System.out.println(a + b);
System.out.println(a - b);
System.out.println(a * b);`,
                "Calculate the total price of three items."],

            ["Java Conditions",
                "Use if and else to make decisions.",
                `int age = 18;

if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Not yet");
}`,
                "Check whether a score is at least 50."],

            ["Java Loops",
                "Loops repeat code. A for loop is useful when you know how many times to repeat.",
                `for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}`,
                "Print numbers from 1 to 10."],

            ["Java Methods",
                "Methods are reusable blocks of code. They can accept parameters and return values.",
                `public class Main {
    static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(add(3, 4));
    }
}`,
                "Create a method that multiplies two numbers."]
        ]
    }
];

// ===================================
// PROGRESS SYSTEM
// ===================================

const TOTAL_LESSONS = courses.reduce(
    (total, course) => total + course.lessons.length, 0
);

let completed = JSON.parse(
    localStorage.getItem("codequestProgress") || "[]"
);

function saveProgress() {
    localStorage.setItem(
        "codequestProgress",
        JSON.stringify(completed)
    );
}

function isCompleted(courseId, lessonIndex) {
    return completed.includes(courseId + "-" + lessonIndex);
}

function courseCompleted(course) {
    return course.lessons.filter((lesson, index) =>
        isCompleted(course.id, index)
    ).length;
}

function getPercent() {
    return Math.round(completed.length / TOTAL_LESSONS * 100);
}

// ===================================
// DASHBOARD
// ===================================

function updateDashboard() {
    const percent = getPercent();

    document.getElementById("completedCount").textContent =
        completed.length;

    document.getElementById("topProgress").textContent =
        completed.length + " lessons completed";

    document.getElementById("percentCount").textContent =
        percent + "%";

    document.getElementById("bigPercent").textContent =
        percent + "%";

    document.getElementById("bigProgress").style.width =
        percent + "%";

    let level = "Starter";

    if (percent >= 75) level = "Creator";
    else if (percent >= 40) level = "Builder";
    else if (percent >= 15) level = "Explorer";

    document.getElementById("levelName").textContent = level;

    renderCourses();
    renderProgress();
}

// ===================================
// COURSE CARDS
// ===================================

function makeCourseCard(course) {
    const done = courseCompleted(course);
    const percent = Math.round(
        done / course.lessons.length * 100
    );

    return `
        <div class="course-card" data-course="${course.id}">
            <div class="course-icon">${course.icon}</div>
            <h3>${course.name}</h3>
            <p>${course.description}</p>

            <div class="course-meta">
                <span>${course.lessons.length} lessons</span>
                <span>${done}/${course.lessons.length} completed</span>
            </div>

            <div class="progress-track">
                <div style="width:${percent}%"></div>
            </div>
        </div>
    `;
}

function renderCourses() {
    document.getElementById("dashboardCourses").innerHTML =
        courses.map(makeCourseCard).join("");

    document.getElementById("allCourses").innerHTML =
        courses.map(makeCourseCard).join("");

    document.querySelectorAll(".course-card").forEach(card => {
        card.addEventListener("click", () => {
            openCourse(card.dataset.course);
        });
    });
}

// ===================================
// PAGE NAVIGATION
// ===================================

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    document.querySelectorAll(".nav").forEach(link => {
        link.classList.toggle(
            "active",
            link.dataset.page === pageId
        );
    });

    const names = {
        dashboard: "Dashboard",
        courses: "Courses",
        lesson: "Lesson",
        playground: "Playground",
        quiz: "Quiz",
        progress: "Progress"
    };

    document.getElementById("pageName").textContent =
        names[pageId] || pageId;

    document.querySelector(".sidebar").classList.remove("open");

    window.scrollTo(0, 0);
}

document.querySelectorAll(".nav").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        showPage(link.dataset.page);
    });
});

document.querySelectorAll("[data-go]").forEach(button => {
    button.addEventListener("click", () => {
        showPage(button.dataset.go);
    });
});

document.getElementById("menuButton").addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("open");
});

// ===================================
// LESSON SYSTEM
// ===================================

let currentCourse = null;
let currentLesson = 0;

function openCourse(courseId) {
    currentCourse = courses.find(course => course.id === courseId);
    currentLesson = 0;

    showPage("lesson");
    renderLesson();
}

function renderLesson() {
    const course = currentCourse;
    const lesson = course.lessons[currentLesson];

    const lessonButtons = course.lessons.map((item, index) => {
        const done = isCompleted(course.id, index);

        return `
            <button
                class="${index === currentLesson ? "active" : ""}"
                data-lesson="${index}">
                ${done ? "✓" : "○"} ${index + 1}. ${item[0]}
            </button>
        `;
    }).join("");

    document.getElementById("lessonContent").innerHTML = `
        <h1>${course.name}</h1>
        <p class="muted">
            Lesson ${currentLesson + 1} of ${course.lessons.length}
        </p>

        <div class="lesson-layout">
            <div class="lesson-menu">
                ${lessonButtons}
            </div>

            <div class="lesson-body">
                <h2>${lesson[0]}</h2>
                <p>${lesson[1]}</p>

                <h3>Code example</h3>
                <pre><code></code></pre>

                <h3>Your challenge</h3>
                <div class="task">
                    ${lesson[3]}
                </div>

                <button id="completeLesson" class="primary">
                    ${isCompleted(course.id, currentLesson)
                        ? "✓ Completed"
                        : "Mark lesson complete"}
                </button>

                <button id="nextLesson" class="secondary">
                    ${currentLesson === course.lessons.length - 1
                        ? "Back to courses"
                        : "Next lesson →"}
                </button>
            </div>
        </div>
    `;

    document.querySelector("#lessonContent pre code").textContent =
        lesson[2];

    document.querySelectorAll(".lesson-menu button").forEach(button => {
        button.addEventListener("click", () => {
            currentLesson = Number(button.dataset.lesson);
            renderLesson();
        });
    });

    document.getElementById("completeLesson").addEventListener("click", () => {
        const key = course.id + "-" + currentLesson;

        if (!completed.includes(key)) {
            completed.push(key);
        }

        saveProgress();
        updateDashboard();
        renderLesson();
    });

    document.getElementById("nextLesson").addEventListener("click", () => {
        if (currentLesson < course.lessons.length - 1) {
            currentLesson++;
            renderLesson();
        } else {
            showPage("courses");
        }
    });
}

document.getElementById("backCourses").addEventListener("click", () => {
    showPage("courses");
});

// ===================================
// PROGRESS PAGE
// ===================================

function renderProgress() {
    document.getElementById("progressCourses").innerHTML =
        courses.map(course => {
            const done = courseCompleted(course);
            const percent = Math.round(
                done / course.lessons.length * 100
            );

            return `
                <div class="progress-item">
                    <h3>${course.icon} ${course.name}</h3>
                    <p>${done} / ${course.lessons.length} completed</p>
                    <div class="progress-track">
                        <div style="width:${percent}%"></div>
                    </div>
                    <p>${percent}%</p>
                </div>
            `;
        }).join("");
}

document.getElementById("resetProgress").addEventListener("click", () => {
    if (confirm("Are you sure you want to reset all your progress?")) {
        completed = [];
        saveProgress();
        updateDashboard();
    }
});

// ===================================
// CODE PLAYGROUND
// ===================================

const starterCode = {
    html: `<div class="card">
    <h1>Hello, coder! 👋</h1>
    <p>Welcome to my website.</p>
    <button id="hello">Click me!</button>
</div>`,

    css: `body {
    font-family: Arial;
    background: #eef2ff;
    padding: 30px;
}

.card {
    background: white;
    padding: 25px;
    border-radius: 15px;
    text-align: center;
}

h1 {
    color: #7058df;
}

button {
    background: #7058df;
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
}`,

    js: `document.querySelector("#hello").addEventListener("click", function() {
    document.querySelector("p").textContent = "You did it! 🚀";
});`
};

let code = {...starterCode};
let activeTab = "html";

const editor = document.getElementById("codeEditor");

function updateEditor() {
    editor.value = code[activeTab];

    document.querySelectorAll(".tab").forEach(tab => {
        tab.classList.toggle(
            "active",
            tab.dataset.tab === activeTab
        );
    });
}

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        code[activeTab] = editor.value;
        activeTab = tab.dataset.tab;
        updateEditor();
    });
});

editor.addEventListener("input", () => {
    code[activeTab] = editor.value;
});

function runCode() {
    const html = code.html;
    const css = code.css;
    const js = code.js.replace(/<\/script/gi, "<\\/script");

    const output = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>${css}</style>
        </head>
        <body>
            ${html}
            <script>${js}<\/script>
        </body>
        </html>
    `;

    document.getElementById("preview").srcdoc = output;
}

document.getElementById("runCode").addEventListener("click", () => {
    code[activeTab] = editor.value;
    runCode();
});

document.getElementById("resetCode").addEventListener("click", () => {
    code = {...starterCode};
    updateEditor();
    runCode();
});

updateEditor();
runCode();

// ===================================
// QUIZ SYSTEM
// ===================================

const questions = [
    {
        question: "Which language creates website structure?",
        answers: ["CSS", "HTML", "JavaScript", "Java"],
        correct: 1,
        explanation: "HTML creates the structure of a web page."
    },
    {
        question: "Which CSS property changes text color?",
        answers: ["background", "font-size", "color", "margin"],
        correct: 2,
        explanation: "The color property changes text color."
    },
    {
        question: "Which keyword declares a reassignable JavaScript variable?",
        answers: ["const", "let", "class", "return"],
        correct: 1,
        explanation: "let creates a variable that can be reassigned."
    },
    {
        question: "What does console.log() do?",
        answers: [
            "Deletes a file",
            "Prints information to the console",
            "Changes the page color",
            "Creates a website"
        ],
        correct: 1,
        explanation: "console.log() prints information in the developer console."
    },
    {
        question: "Are Java and JavaScript the same language?",
        answers: [
            "Yes",
            "JavaScript is part of Java",
            "No, they are different",
            "Only on computers"
        ],
        correct: 2,
        explanation: "Java and JavaScript are two different programming languages."
    }
];

let questionIndex = 0;
let score = 0;
let answered = false;

function renderQuestion() {
    const q = questions[questionIndex];
    answered = false;

    document.getElementById("questionNumber").textContent =
        `QUESTION ${questionIndex + 1} / ${questions.length}`;

    document.getElementById("question").textContent = q.question;
    document.getElementById("score").textContent = "Score: " + score;

    document.getElementById("quizProgress").style.width =
        (questionIndex / questions.length * 100) + "%";

    document.getElementById("feedback").textContent = "";

    document.getElementById("nextQuestion").disabled = true;

    document.getElementById("nextQuestion").textContent =
        questionIndex === questions.length - 1
            ? "See results →"
            : "Next question →";

    document.getElementById("answers").innerHTML =
        q.answers.map((answer, index) => `
            <button class="answer" data-answer="${index}">
                ${String.fromCharCode(65 + index)}. ${answer}
            </button>
        `).join("");

    document.querySelectorAll(".answer").forEach(button => {
        button.addEventListener("click", () => {
            chooseAnswer(Number(button.dataset.answer));
        });
    });
}

function chooseAnswer(index) {
    if (answered) return;

    answered = true;

    const q = questions[questionIndex];
    const correct = index === q.correct;

    if (correct) score++;

    document.querySelectorAll(".answer").forEach((button, i) => {
        button.disabled = true;

        if (i === q.correct) {
            button.classList.add("correct");
        } else if (i === index) {
            button.classList.add("wrong");
        }
    });

    document.getElementById("feedback").textContent =
        (correct ? "Correct! " : "Not quite. ") + q.explanation;

    document.getElementById("score").textContent =
        "Score: " + score;

    document.getElementById("nextQuestion").disabled = false;
}

document.getElementById("nextQuestion").addEventListener("click", () => {
    if (questionIndex < questions.length - 1) {
        questionIndex++;
        renderQuestion();
    } else {
        document.getElementById("question").textContent =
            `You scored ${score} out of ${questions.length}!`;

        document.getElementById("answers").innerHTML = "";

        document.getElementById("feedback").textContent =
            score === 5
                ? "Perfect! Amazing work! 🎉"
                : "Good job! Review the lessons and try again.";

        document.getElementById("questionNumber").textContent =
            "QUIZ COMPLETE";

        document.getElementById("quizProgress").style.width = "100%";

        const button = document.getElementById("nextQuestion");
        button.textContent = "Try again";
        button.disabled = false;

        button.onclick = () => {
            questionIndex = 0;
            score = 0;
            button.onclick = null;
            renderQuestion();
        };
    }
});

// ===================================
// START WEBSITE
// ===================================

renderQuestion();
updateDashboard();

console.log("CodeQuest successfully loaded!");