import Button from 'react-bootstrap/Button';

function CountActions(props){
    return(
        <>
         <Button variant="primary"   className="plus" onClick={props.methodPlus}><h2>+</h2></Button>
         <Button variant="primary" className="minus" onClick={props.methodMinus}><h2>-</h2></Button></>
    )
}

export default CountActions;