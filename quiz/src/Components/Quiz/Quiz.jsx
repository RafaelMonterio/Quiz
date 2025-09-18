import React, { useState } from "react";
import "./Quiz.css";

export default function Quiz() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);


  const questions = [
    {
      question: "Qual foi a primeira HQ em que o Homem-Aranha apareceu?",
      options: ["Amazing Spider-Man #1", "Marvel Comics #1", "Amazing Fantasy #15", "Spectacular Spider-Man #1"],
      answer: "Amazing Fantasy #15"
    },
    {
      question: "Quem foi o primeiro grande vilão enfrentado pelo Homem-Aranha nos quadrinhos?",
      options: ["Duende Verde", "Abutre", "Doutor Octopus", "Camaleão"],
      answer: "Camaleão"
    },
    {
      question: "Qual dessas cartas é considerada um Qual destes personagens NÃO foi um interesse amoroso de Peter Parker?",
      options: ["Mary Jane Watson", "Gwen Stacy", "Felicia Hardy", "Wanda Maximoff"],
      answer: "Wanda Maximoff"
    },
    {
      question: "Em “Homem-Aranha: No Aranhaverso”, qual versão alternativa de Peter Parker ajuda Miles Morales?",
      options: ["Peter Parker jovem do universo 1610", "Peter B. Parker, mais velho e fracassado", "Superior Spider-Man", "Spider-Man 2099"],
      answer: "Peter B. Parker, mais velho e fracassado"
    },
    {
      question: "Qual o nome do editor-chefe do Clarim Diário, conhecido por odiar o Homem-Aranha?",
      options: ["Eddie Brock", "Ben Urich", "J. Jonah Jameson", "Robbie Robertson"],
      answer: "J. Jonah Jameson"
    },
    {
      question: "Quem foi responsável pela morte de Gwen Stacy nos quadrinhos clássicos?",
      options: ["Rei do Crime", "Duende Verde", "Venom", "Lagarto"],
      answer: "Duende Verde"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setStarted(false);
    setFinished(false);
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <div className="quiz-container">
      {!started ? (
        <>
          <h1>Spider Quiz</h1>
          <button onClick={() => setStarted(true)}>Começar</button>
        </>
      ) : finished ? (
        <>
          <h1>Resultado Final</h1>
          <p>
            Você acertou <strong>{score}</strong> de{" "}
            <strong>{questions.length}</strong> perguntas!
          </p>
          <button onClick={restartQuiz}>Jogar Novamente</button>
        </>
      ) : (
        <>
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </>
      )}
    </div>
  );
}

