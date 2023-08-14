import { Div, Button } from "./FeedbackOptions.styled"



export const FeedbackOptions = ({onIncrement}) => {

    return (
    
        <Div>
            
            <Button onClick={() => onIncrement('good')}>Good</Button>
            <Button onClick={() => onIncrement('bad')}>Bad</Button>
            <Button onClick={() => onIncrement('neutral')}>Neutral</Button>

</Div>

)

}