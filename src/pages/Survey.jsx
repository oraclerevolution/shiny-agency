import { Link, Outlet, useParams } from "react-router-dom"

function Survey(){
    return(
        <div>
            <h1>Questionnaire 🧮</h1>
            <Link to="client">Questionnaire Client</Link>
            <Link to="freelance">Questionnaire Freelance</Link>
            <h2>Question {useParams().questionNumber}</h2>
            <Outlet/>
        </div>
    )
}

export default Survey