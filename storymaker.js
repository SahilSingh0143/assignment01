// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');

// Constants for p tag to display query selectors
const choosenNoun1Para = document.getElementById('choosenNoun1');
const choosenVerbPara = document.getElementById('choosenVerb');
const choosenAdjectivePara = document.getElementById('choosenAdjective');
const choosenNoun2Para = document.getElementById('choosenNoun2');
const choosenSettingPara = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
const playbackButton = document.getElementById('playback');
const randomButton = document.getElementById('random');
const storyPara = document.getElementById('story');

// Variables for pre-defined arrays
const nouns1 = ["The turkey", "Mom", "the dog", "Dad", "My teacher", "the elephant", "The cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns2 = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements
let noun1Count = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    choosenNoun1Para.textContent = nouns1[noun1Count];
    if (noun1Count < nouns1.length - 1) {
        noun1Count++;
    } else {
        noun1Count = 0;
    }
    // if-else to change count setting
}

function verb_on_click() {
    choosenVerbPara.textContent = getRandomElement(verbs);
}

function adjective_on_click() {
    choosenAdjectivePara.textContent = getRandomElement(adjectives);
}

function noun2_on_click() {
    choosenNoun2Para.textContent = getRandomElement(nouns2);
}

function setting_on_click() {
    choosenSettingPara.textContent = getRandomElement(settings);
}

// concatenate the user story and display
function playback_on_click() {
    storyPara.textContent = `${choosenNoun1Para.textContent} ${choosenVerbPara.textContent} ${choosenAdjectivePara.textContent} ${choosenNoun2Para.textContent} ${choosenSettingPara.textContent}`;

}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    storyPara.textContent = `${getRandomElement(nouns1)} ${getRandomElement(verbs)} ${getRandomElement(adjectives)} ${getRandomElement(nouns2)} ${getRandomElement(settings)}`;

}
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);

// Function to show student name and ID
function showStudentInfo() {
    // Get student name and ID from server or any other source
    const student = {
        name: "Sahil Singh",
        id: "200553813"
    };
    // Display student name and ID
    document.getElementById('studentName').textContent = student.name;
    document.getElementById('studentID').textContent = student.id;
}

// Event listener for the button to show student info
document.getElementById('showStudentInfo').addEventListener('click', showStudentInfo);
