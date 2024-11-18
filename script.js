// #1
const root = document.getElementById("rootID");
root.classList.add("rootClass");

// #2
const immediateElements = document.querySelectorAll("#rootID > .someClassName");

// #3
const allElement = document.querySelectorAll("#rootID .someClassName");

// #4
const elements = document.querySelectorAll('.someClassName[oid="newDoc"]');

// #5
const lastChild = document.querySelector(
    "#rootID > .someClassName:last-child p",
);

if (lastChild) {
    lastChild.textContent = "Последняя строка";
}
