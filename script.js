let questions = [
  {
    question: 'Was ist das Hauptziel von HTML ?',
    answer_1: 'Datenbankmanagement',
    answer_2: 'Gestaltung von Webseiten',
    answer_3: 'Strukturierung von Inhalten',
    answer_4: 'Programmierung von Apps',
    answer_5: 'Netzwerksicherheit',
    right_answer: 3,
  },
  {
    question: 'Was bewirkt das CSS-Attribut "display: none"?',
    answer_1: 'Das Element wird zentriert',
    answer_2: 'Das Element wird versteckt und nimmt keinen Platz ein',
    answer_3: 'Das Element wird nicht bearbeitbar',
    answer_4: 'Das Element wird hervorgehoben',
    answer_5: 'Das Element wird in einen Block umgewandelt',
    right_answer: 2,
  },
  {
    question:
      'Welche HTML-Tags werden verwendet, um eine ungeordnete Liste zu erstellen?',
    answer_1: '<ol>',
    answer_2: '<ul>',
    answer_3: '<list>',
    answer_4: '<item>',
    answer_5: '<li>',
    right_answer: 2,
  },
  {
    question:
      'Welches der folgenden CSS-Attribute wird verwendet, um den Text auszurichten?',
    answer_1: 'text-align',
    answer_2: 'font-size',
    answer_3: 'padding',
    answer_4: 'color',
    answer_5: 'margin',
    right_answer: 1,
  },
  {
    question: 'Was macht das HTML-Tag <a>?',
    answer_1: 'Es erstellt ein Bild',
    answer_2: 'Es erstellt einen Link',
    answer_3: 'Es definiert eine Überschrift',
    answer_4: 'Es erstellt eine Tabelle',
    answer_5: 'Es formatiert den Text',
    right_answer: 2,
  },
  {
    question: 'Was ist das Hauptziel von HTML?',
    answer_1: 'Datenbankmanagement',
    answer_2: 'Gestaltung von Webseiten',
    answer_3: 'Strukturierung von Inhalten',
    answer_4: 'Programmierung von Apps',
    answer_5: 'Netzwerksicherheit',
    right_answer: 3,
  },
  {
    question: 'Welche Eigenschaft in CSS wird verwendet, um die Textfarbe zu ändern?',
    answer_1: 'background-color',
    answer_2: 'font-size',
    answer_3: 'text-align',
    answer_4: 'color',
    answer_5: 'display',
    right_answer: 4,
  },
  {
    question: 'Welche HTML-Tags werden verwendet, um eine Tabelle zu erstellen?',
    answer_1: '<table>, <tr>, <td>',
    answer_2: '<div>, <span>, <p>',
    answer_3: '<ul>, <li>, <ol>',
    answer_4: '<header>, <footer>, <main>',
    answer_5: '<form>, <input>, <label>',
    right_answer: 1,
  }
];

function init(){
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}
let currentQuestion = 0;

function showQuestion() {
  let question = questions[currentQuestion];
  document.getElementById('questiontext').innerHTML = question['question'];
  document.getElementById('answer_1').innerHTML = question['answer_1'];
  document.getElementById('answer_2').innerHTML = question['answer_2'];
  document.getElementById('answer_3').innerHTML = question['answer_3'];
  document.getElementById('answer_4').innerHTML = question['answer_4'];
  document.getElementById('answer_5').innerHTML = question['answer_5'];
}

function answer(slection) {

}