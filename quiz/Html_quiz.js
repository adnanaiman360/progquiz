
window.onload = function () {
    show(0);
}
let questions = [
    {
        id: 1,
        question: "1] HTML stands for ?",
        answer: "HyperText Markup Language",
        Option: [
            "HighText Machine Language",
            "HyperText and links Markup Language",
            "HyperText Markup Language",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "2] The correct sequence of HTML tags for starting a webpage is ?",
        answer: "HTML, Head, Title, Body",
        Option: [
            "Head, Title, HTML, body",
            "HTML, Body, Title, Head",
            "HTML, Head, Title, Body",
            "HTML, Title, Head, Body"
        ]
    },
    {
        id: 3,
        question: "3] Which of the following element is responsible for making the text bold in HTML ?",
        answer: "&lt;b&gt;",
        Option: [
            "&lt;pre&gt;",
            "&lt;a&gt;",
            "&lt;b&gt;",
            "&lt;br&gt;"
        ]
    },
    {
        id: 4,
        question: "4] Which of the following tag is used for inserting the largest heading in HTML ?",
        answer: "&lt;h1&gt;",
        Option: [
            "&lt;h3&gt;",
            "&lt;h1&gt;",
            "&lt;h5&gt;",
            "&lt;h6&gt;"
        ]
    },
    {
        id: 5,
        question: "5] Which of the following tag is used to insert a line-break in HTML ?",
        answer: "&lt;br&gt;",
        Option: [
            "&lt;br&gt;",
            "&lt;break&gt;",
            "&lt;pre&gt;",
            "&lt;b&gt;"
        ]
    },
    {
        id: 6,
        question: "6] How to create an unordered list (a list with the list items in bullets) in HTML ?",
        answer: "&lt;ul&gt;",
        Option: [
            "&lt;ul&gt;",
            "&lt;ol&gt;",
            "&lt;li&gt;",
            "&lt;i&gt;"
        ]
    },
    {
        id: 7,
        question: "7] How to create an ordered list (a list with the list items in numbers) in HTML ?",
        answer: "&lt;ol&gt;",
        Option: [
            "&lt;ul&gt;",
            "&lt;ol&gt;",
            "&lt;li&gt;",
            "&lt;i&gt;"
        ]
    },
    {
        id: 8,
        question: "8] Which of the following tag is used to define options in a drop-down selection list ?",
        answer: "&lt;option&gt;",
        Option: [
            "&lt;select&gt;",
            "&lt;list&gt;",
            "&lt;dropdown&gt;",
            "&lt;option&gt;"
        ]
    },
    {
        id: 9,
        question: "9] Which of the following tag is used to add rows in the table ?",
        answer: "&lt;tr&gt; and &lt;/tr&gt;",
        Option: [
            "&lt;td&gt; and &lt;/td&gt;",
            "&lt;trow&gt; and &lt;/trow&gt;",
            "&lt;tr&gt; and &lt;/tr&gt;",
            "&lt;row&gt; and &lt;/row&gt;"
        ]
    },
    {
        id: 10,
        question: "10] The &lt;hr&gt; tag in HTML is used for ?",
        answer: "horizontal ruler",
        Option: [
            "new line",
            "vertical ruler",
            "new paragraph",
            "horizontal ruler"
        ]
    },
    {
        id: 11,
        question: "11] Which of the following attribute is used to provide a unique name to an element ?",
        answer: "id",
        Option: [
            "class",
            "id",
            "type",
            "href"
        ]
    },
    {
        id: 12,
        question: "12] Which of the following HTML tag is used to display the text with scrolling effect ?",
        answer: "&lt;marquee&gt;",
        Option: [
            "&lt;marquee&gt;",
            "&lt;div&gt;",
            "&lt;scroll&gt;",
            "&lt;txtscroll&gt;"
        ]
    },
    {
        id: 13,
        question: "13] What are the types of unordered or bulleted list in HTML ?",
        answer: "disc, circle, square",
        Option: [
            "disc, square, triangle",
            "polygon, triangle, circle",
            "disc, circle, square",
            "All of the above"
        ]
    },
    {
        id: 14,
        question: "14] The tags in HTML are :",
        answer: "not case-sensitive",
        Option: [
            "case-sensitive",
            "in upper case",
            "not case-sensitive",
            "in lowercase"
        ]
    },
    {
        id: 15,
        question: "15] In HTML5, which of the following tag is used to initialize the document type ?",
        answer: "&lt;!DOCTYPE html&gt;",
        Option: [
            "&lt;Doctype HTML&gt;",
            "&lt;\Doctype html&gt;",
            "&lt;Doctype&gt;",
            "&lt;!DOCTYPE html&gt;"
        ]
    },

]



function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    sessionStorage.setItem("name", name);

    location.href = "Html_quiz.html";

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
