import React from "react";
// import { Data } from "../Data/Data";
import { Input } from "../Input/Input";
import Button from "../Button/Button";
function Card()
{
    const [score, setScore]=React.useState(0);
    // const [disable, setDisable]=React.useState("false")
    const [questions, setQuestions] = React.useState(Input);

    // React.useEffect(()=>{
        
    // },[])
     
    function hideDOM()
    {
        setScore(0)
        document.getElementById("start-quiz-id").style.display="none"
        document.getElementById("quiz-card-id").style.display="flex"
        document.getElementById("score-id").style.display="none"
        for(let index=0;index<questions.length;index++)
        {
            var btnClass= document.getElementsByClassName("btn-"+index)
            for (var i = 0; i < btnClass.length; i++) {
                btnClass[i].disabled=false
                btnClass[i].style.cursor="pointer"
             }
        }
        
    }
    function showDOM()
    {
       
        document.getElementById("quiz-card-id").style.display="none"
        document.getElementById("start-quiz-id").style.display="block"
        document.getElementById("score-id").style.display="block"
    }
    function buttonDisable(index, btn)
    {
        var btnClass= document.getElementsByClassName("btn-"+index)
        for (var i = 0; i < btnClass.length; i++) {
            btnClass[i].disabled=true
            btnClass[i].style.cursor="not-allowed"
         }
        if(questions[index].correctAnswer === btn)
        {
            setScore(score+1)
        }
       
    }
    
    return(
            <div className="quiz-root">
                <h1 id="score-id">Your have answered {score}/{questions.length} Correctly</h1>
                <button id="start-quiz-id" className="start-quiz" onClick={()=>{hideDOM()}}>Start Quiz</button>
                <div id="quiz-card-id" className="quizCard">
                {
                    questions.map((element, index)=>{
                        return(
                        <div className="Card">
                            <h1>{element.question}</h1>

                            <Button element={element} setScore={setScore} score={score} index={index} questions={questions}/>
                        </div>
                        )
                    })
                }

                {
                    // console.log(score)
                    <button className="result" onClick={()=>{showDOM()}}>Show Results</button>
                }
            </div>
        </div>
    )
}
export default Card;