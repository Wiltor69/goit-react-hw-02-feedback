import { Div, Title } from "./Statistics.styled"

export const Statistics = ({good, bad, neutral, total, procent}) => {

    return (
        <Div>
            <Title>Statistics</Title>

            <p>Good: {good }</p>
            <p>Bad: {bad }</p>
            <p>Neutral: {neutral}</p>
            <p>Total: {total }</p>
            <p>Positive feedback: {procent } %</p>
            


    </Div>


)



}