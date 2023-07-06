import Card from "./Card"
import data from "../../data/Quiz.json"
import "./QuizApp.css"

export default function QuizApp(){
    return(
      <>
        <h2> Quiz App</h2>
        <Card data={data}/>
        </>
    )
}