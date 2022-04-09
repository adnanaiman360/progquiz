
window.onload = function () {
    show(0);
}
let questions = [
    {
        id: 1,
        question: "1] Who developed the Python language ?",
        answer: "Guido van Rossum",
        Option: [
            "Zim Den",
            "Guido van Rossum",
            "Niene Stom",
            "Wick van Rossum"
        ]
    },
    {
        id: 2,
        question: "2] In which year was the Python language developed ?",
        answer: "1989",
        Option: [
            "1995",
            "1972",
            "1981",
            "1989"
        ]
    },
    {
        id: 3,
        question: "3] In which language is Python written ?",
        answer: "C",
        Option: [
            "English",
            "PHP",
            "C",
            "All of the above"
        ]
    },
    {
        id: 4,
        question: "4] What do we use to define a block of code in Python language ?",
        answer: "Indentation",
        Option: [
            "Key",
            "Brackets",
            "Indentation",
            "None of these"
        ]
    },
    {
        id: 5,
        question: "5] What is the method inside the class in python language ?",
        answer: "Function",
        Option: [
            "Object",
            "Function",
            "Attribute",
            "Argument"
        ]
    },
    {
        id: 6,
        question: "6] Which one of the following has the same precedence level ?",
        answer: "Division and Multiplication",
        Option: [
            "Division, Power, Multiplication, Addition and Subtraction",
            "Division and Multiplication",
            "Subtraction and Division",
            "Power and Division"
        ]
    },
    {
        id: 7,
        question: "7] Which of the following option is not a core data type in the python language ?",
        answer: "Class",
        Option: [
            "Dictionary",
            "Lists",
            "Class",
            "Tuples"
        ]
    },
    {
        id: 8,
        question: "8] How many control statements python supports ?",
        answer: "Three",
        Option: [
            "Four",
            "Five",
            "Three",
            "Two"
        ]
    },
    {
        id: 9,
        question: "9] How many keywords present in the python programming language ?",
        answer: "33",
        Option: [
            "32",
            "61",
            "33",
            "27"
        ]
    },
    {
        id: 10,
        question: "10] Which of the following arithmetic operators cannot be used with strings in python ?",
        answer: "-",
        Option: [
            "+",
            "*",
            "-",
            "All of the above"
        ]
    },
    {
        id: 11,
        question: "11] PVM is often called _________.",
        answer: "Python interpreter",
        Option: [
            "Python interpreter",
            "Python compiler",
            "Python volatile machine",
            "Portable virtual machine"
        ]
    },
    {
        id: 12,
        question: "12] When a user does not use the return statement inside a function in Python, what will return the function in that case ?",
        answer: "none",
        Option: [
            "0",
            "1",
            "None",
            "Error"
        ]
    },
    {
        id: 13,
        question: "13] Which of the following functions returns a list containing all matches ?",
        answer: "findall",
        Option: [
            "find",
            "findall",
            "search",
            "searchall"
        ]
    },
    {
        id: 14,
        question: "14] Which one of the following is the right way to call a function ?",
        answer: "function_name()",
        Option: [
            "call function_name()",
            "function function_name()",
            "function_name()",
            "None of the these"
        ]
    },
    {
        id: 15,
        question: "15] Which of the following keywords is not reversed keyword in python ?",
        answer: "goto",
        Option: [
            "None",
            "class",
            "goto",
            "and"
        ]
    },

]



function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    sessionStorage.setItem("name", name);

    location.href = "Python_quiz.html";

}

let question_count = 0;

let point = 0;

function next() {

    let user_answer = document.querySelector("li.option.active").innerHTML;
    if (user_answer == questions[question_count].answer) {


        point = point + 10;

        sessionStorage.setItem("points", point);
    }

    if (question_count == questions.length - 1) {
        location.href = "end.html";
        return;
    }


    question_count++;
    show(question_count);

}

function show(count) {
    let question = document.getElementById("questions");

    // question.innerHTML = "<h2>" + questions[count].question + "</h2>";

    question.innerHTML = `

    <h2>${questions[count].question}</h2>
    
    <ul class="option_group">
    <li class="option">${questions[count].Option[0]}</li>
    <li class="option">${questions[count].Option[1]}</li>
    <li class="option">${questions[count].Option[2]}</li>
    <li class="option">${questions[count].Option[3]}</li>
 
</ul>
    `;

    toggleActive();
}

function toggleActive() {

    let option = document.querySelectorAll("li.option");

    for (let i = 0; i < option.length; i++) {

        option[i].onclick = function () {

            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }

            }
            option[i].classList.add("active");
        }
    }

}
