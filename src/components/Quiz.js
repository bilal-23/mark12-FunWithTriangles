import { useRef, useState } from "react";
import styles from "./Quiz.module.css";

const quizQuestions = [
  {
    questionNumber: 1,
    question:
      "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
    options: [
      {
        value: 45,
        name: "question_1",
        text: "45°"
      },
      {
        value: 90,
        name: "question_1",
        text: "90°"
      },
      {
        value: 60,
        name: "question_1",
        text: "60°"
      }
    ]
  },
  {
    questionNumber: 2,
    question:
      "What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?",
    options: [
      {
        value: "obtuse",
        name: "question_2",
        text: "Obtuse angled"
      },
      {
        value: "acute",
        name: "question_2",
        text: "Acute angled°"
      },
      {
        value: "right",
        name: "question_2",
        text: "Right Angled"
      }
    ]
  },
  {
    questionNumber: 3,
    question: "A triangle can have",
    options: [
      {
        value: "one right angle",
        name: "question_3",
        text: "One right angle"
      },
      {
        value: "Two right angle",
        name: "question_3",
        text: "Two right angle"
      }
    ]
  },
  {
    questionNumber: 4,
    question: "Which of the following triangles are always similar?",
    options: [
      {
        value: "Equilateral triangle",
        name: "question_4",
        text: "Equilateral triangle"
      },
      {
        value: "Isosceles triangle",
        name: "question_4",
        text: "Isosceles triangle"
      }
    ]
  },
  {
    questionNumber: 5,
    question:
      "If the largest angle in a triangle is 70°, what is the least possible value of the smallest angle of the triangle?",
    options: [
      {
        value: "30",
        name: "question_5",
        text: "30°"
      },
      {
        value: "10",
        name: "question_5",
        text: "10°"
      }
    ]
  }
];
const answers = {
  1: 90,
  2: "right",
  3: "one right angle",
  4: "Equilateral triangle",
  5: "10"
};
export default function Quiz() {
  const [userAns, setUserAns] = useState({});
  const [output, setOutput] = useState();
  // const formRef = useRef();

  function answerHandler(answer, question) {
    let ans = userAns;
    ans[question] = answer;
    setUserAns(ans);
  }


  function QuizSubmitHandler(e) {
    e.preventDefault();
    let score = 0;
    // let formData = new FormData(formRef.current);
    // console.log(formData.values())
    const keys = Object.keys(userAns);
    keys.forEach((item) => {
      if (answers[item] === userAns[item]) {
        score++;
      }
    });
    setOutput(`Your Score is ${score}`);
  }
  return (
    <>
      <main className="App">
        <header className="header">
          <h1 className="heading">Quiz on triangle</h1>
          <p className="sm-text">
            Each correct answer will increase your sccore by 1
          </p>
        </header>
        <form className="container" onSubmit={QuizSubmitHandler}>
          <div className={styles.question_grp}>
            {quizQuestions.map((item, index) => {
              return (
                <>
                  <div className={styles.question} key={index + Math.random()}>
                    <p className="medium-text">{item.questionNumber}.</p>
                    <p className="medium-text">{item.question}</p>
                  </div>
                  <div className={styles.radio_container}>
                    {item.options.map((option, index) => {
                      return (
                        <>
                          <div key={index + Math.random()}>
                            <input
                              type="radio"
                              id={option.value}
                              name={option.name}
                              value={option.value}
                              onChange={answerHandler.bind(
                                this,
                                option.value,
                                item.questionNumber
                              )}
                            />
                            <label htmlFor={option.value}>{option.text}</label>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
          <div className="btn-container">
            <button className="button">Submit Answer</button>
          </div>
        </form>
        {output && (
          <div className={styles.output}>
            <p className={styles.output}>{output}</p>
          </div>
        )}
      </main>
    </>
  );
}
