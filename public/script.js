let currentItem = null;
let isEvaluated = false;
let isCorrect = true;
let isMouseover = false;

const questionSection = document.getElementById('question-section');
const wordDisplay = document.getElementById('greek-word');
const posHint = document.getElementById('pos-hint');
const lenHint = document.getElementById('len-hint');
const hints = [posHint, lenHint];
const hintBulb = document.getElementById('hint-bulb');
const inputField = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const feedbackText1 = document.getElementById('feedback-text1');
const feedbackText2 = document.getElementById('feedback-text2');

function clearCurrentQuestion() {
    isEvaluated = false;
    inputField.value = "";
    inputField.focus();
    feedbackText1.innerText = "";
    setFeedback2(false);
    questionSection.className = "default-bg";
    for (const hint of hints) hint.classList.add('hidden');
    //posHint.classList.add('hidden'); // Hide hint for new word
    //lenHint.classList.add('hidden');
}

function loadNewQuestion() {
// Pick random word from data.js
    currentItem = vocabData[Math.floor(Math.random() * vocabData.length)];
    wordDisplay.innerText = currentItem.word;
    posHint.innerText = currentItem.pos;
    if (currentItem.pos == "n") posHint.innerText += "-" + currentItem.gen;
    if ("len" in currentItem) {
    	lenHint.innerText = currentItem.len;
    }
    else {
        lenHint.innerText = "";
    }
}

//currentItem.answers.map(item => "to " + item).concat(currentItem.answers.map(item => "I " + item))
function tosnis (answerlist) {
    //Each element of the list with "to " prepended, and
    //each element of the list with "i " prepended
    return answerlist.map(item => "to " + item).concat(answerlist.map(item => "i " + item))
}

function a (item) {
    if (item[0] == "a" || item[0] == "e" || item[0] == "i" || item[0] == "o" || item[0] == "u")
        {return "an " + item;}
    else {
        return "a " + item;
    }
}

function asnthes (answerlist) {
    //TODO: "a" and "an' should match consonant vs. vowel?
    return answerlist.map(item => a(item)).concat(
           answerlist.map(item => "the " + item))
}

function setFeedback2(booly) {
    if (booly == true) feedbackText2.innerText = `It means: ${currentItem.answers.join(", ")}`;
    else feedbackText2.innerText = "";
}

function handleSubmission() {
    if (!isEvaluated) {
        const userAnswer = inputField.value.trim().toLowerCase();
        if (currentItem.answers.includes(userAnswer) ||
          currentItem.pos == "v" && tosnis(currentItem.answers).includes(userAnswer) ||
          currentItem.pos == "n" && asnthes(currentItem.answers).includes(userAnswer)) {
            isCorrect = true;
            questionSection.className = "correct-bg";
            feedbackText1.innerText = "Correct!";
            if (isMouseover) setFeedback2(true);
        } else {
            isCorrect = false;
            questionSection.className = "wrong-bg";
            feedbackText1.innerText = "Incorrect.";
            setFeedback2(true);
        }
        isEvaluated = true;
    } else {
        clearCurrentQuestion();
        setTimeout(() => {loadNewQuestion()}, 100);
    }
}

// Hint Logic: Show on hover or click
hintBulb.addEventListener('mouseenter', () => {
     isMouseover = true;
     posHint.classList.remove('hidden');
     if (lenHint.innerHTML.length > 0) lenHint.classList.remove('hidden');
     if (isEvaluated && isCorrect) setFeedback2(true);
     })
hintBulb.addEventListener('mouseleave', () => {
    isMouseover = false;
    if (isEvaluated && isCorrect) setFeedback2(false);
    if (!isEvaluated) {posHint.classList.add('hidden'); 
                       lenHint.classList.add('hidden');}
});
//hintBulb.addEventListener('click', () => posHint.classList.toggle('hidden'));

submitBtn.addEventListener('click', handleSubmission);
inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSubmission();
});

loadNewQuestion();
