console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector("#login"); // Fill the selector for the login element in ""
let login_text = login_element.innerText;

let question = login_text.split("\n")[3]; // Use split and array operations on the login_text string to extract the question

let answer = ""; // Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked

if (question.includes("first")) {
    answer = question.split(" ")[4];
}
else if (question.includes("second")) {
    answer = question.split(" ")[6];
}
else if (question.includes("add")) {
    let a = Number(question.split(" ")[2]);
    let b = Number(question.split(" ")[4]);
    answer = a + b

}
else if (question.includes("subtract")) {
    let a = Number(question.split(" ")[2]);
    let b = Number(question.split(" ")[4]);
    answer = a - b
};

const captcha_input_element = document.querySelector("#valuepkg3"); // Fill the selector for the captcha input element in ""
const username_input_element = document.querySelector("#username");
const password_input_element = document.querySelector("#password");

captcha_input_element.value = answer;
username_input_element.value = "<username>"
password_input_element.value = "<password>"