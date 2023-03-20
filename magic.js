const btn = document.querySelector(".btn");
const answers = document.querySelector("#answers");
const newQ = document.querySelector(".new");
const ball = document.querySelector(".image");

const options = ["Stretch for 5 minutes",
"Kinetic sand for 5 minutes",
"Color with crayons for 5 minutes",
"Ice dives",
"Self massage for 5 minutes",
"What coping statements or affirmations feel true right now?",
"Look around the room and descirbe the material properties of the objects you see for 5 minutes",
"Mental categories game for 5 minutes",
"Mindful eating",
"Gentle rocking and egg rolls"];

btn.addEventListener("click", () => {
    let randomAnswer = options[Math.floor(Math.random() * options.length)];
    console.log(randomAnswer)
    answers.textContent = randomAnswer;
    answers.style.display = "block";
    btn.disabled = true;
    ball.classList.remove('shaking');
})

newQ.addEventListener("click", () => {
    ball.classList.add('shaking');
    answers.style.display = "none";
    btn.disabled = false;

})

