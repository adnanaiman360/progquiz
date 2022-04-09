
window.onload = function () {
    show(0);
}

let questions = [
    {
        id: 1,
        question: "1] Which of the following option leads to the portability and security of Java ?",
        answer: "Bytecode is executed by JVM",
        Option: [
            "Bytecode is executed by JVM",
            "The applet makes the Java code secure and portable",
            "Use of exception handling",
            "Dynamic binding between objects"
        ]
    },
    {
        id: 2,
        question: "2] Which of the following is not a Java features ?",
        answer: "Use of pointers",
        Option: [
            "Dynamic",
            "Architecture Neutral",
            "Use of pointers",
            "Object-oriented"
        ]
    },
    {
        id: 3,
        question: "3] What should be the execution order, if a class has a method, static block, instance block, and constructor ?",
        answer: "Static block, instance block, constructor, and method",
        Option: [
            "Instance block, method, static block, and constructor",
            "Method, constructor, instance block, and static block",
            "Static block, method, instance block, and constructor",
            "Static block, instance block, constructor, and method"
        ]
    },
    {
        id: 4,
        question: "4]  _____ is used to find and fix bugs in the Java programs.",
        answer: "JDB",
        Option: [
            "JVM",
            "JRE",
            "JDK",
            "JDB"
        ]
    },
    {
        id: 5,
        question: "5] What is the return type of the hashCode() method in the Object class ?",
        answer: "int",
        Option: [
            "Object",
            "int",
            "long",
            "void"
        ]
    },
    {
        id: 6,
        question: "6] What does the expression float a = 35 / 0 return ?",
        answer: "Infinity",
        Option: [
            "0",
            "Not a Number",
            "Infinity",
            "Run time exception"
        ]
    },
    {
        id: 7,
        question : "7] Evaluate the following Java expression, if x=3, y=5, and z=10: <br> ++z + y - y + z + x++",
        answer: "25",
        Option: [
            "24",
            "23",
            "20",
            "25"
        ]
    },
    {
        id: 8,
        question: "8] Which of the following tool is used to generate API documentation in HTML format from doc comments in source code ?",
        answer: "javadoc tool",
        Option: [
            "javap tool",
            "javaw command",
            "javadoc tool",
            "javah command"
        ]
    },
    {
        id: 9,
        question: "9] Which of the following creates a List of 3 visible items and multiple selections abled ?",
        answer: "new List(3, true)",
        Option: [
            "new List(false, 3)",
            "new List(3, true)",
            "new List(true, 3)",
            "new List(3, false)"
        ]
    },
    {
        id: 10,
        question: "10] Which of the following for loop declaration is not valid ?",
        answer: "for ( int i = 99; i >= 0; i / 9 )",
        Option: [
            "for ( int i = 99; i >= 0; i / 9 )",
            "for ( int i = 7; i <= 77; i += 7 )",
            "for ( int i = 20; i >= 2; - -i )",
            "for ( int i = 2; i <= 20; i = 2* i )"
        ]
    },
    {
        id: 11,
        question: "11] Number of primitive data types in Java are ?",
        answer: "8",
        Option: [
            "6",
            "7",
            "8",
            "9"
        ]
    },
    {
        id: 12,
        question: "12] In which process, a local variable has the same name as one of the instance variables ?",
        answer: "Variable Shadowing",
        Option: [
            "Serialization",
            "Variable Shadowing",
            "Abstraction",
            "Multi-threading"
        ]
    },
    {
        id: 13,
        question: "13] Which of the following is true about the anonymous inner class ?",
        answer: "It has no class name",
        Option: [
            "It has only methods",
            "Objects can't be created",
            "It has a fixed class name",
            "It has no class name"
        ]
    },
    {
        id: 14,
        question: "14] Which package contains the Random class ?",
        answer: "java.util package",
        Option: [
            "java.util package",
            "java.lang package",
            "java.awt package",
            "java.io package"
        ]
    },
    {
        id: 15,
        question: "15] Which option is false about the final keyword ?",
        answer: "A final class cannot extend other classes.",
        Option: [
            "A final method cannot be overridden in its subclasses.",
            "A final class cannot be extended.",
            "A final class cannot extend other classes.",
            "A final method can be inherited."
        ]
    },

]



function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
    sessionStorage.setItem("name", name);

    location.href = "Java_quiz.html";

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
