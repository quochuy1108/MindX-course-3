import "./Card.css"
import './Expenses.css'

const Card = (props) => {
    const className = 'card ' + props.className
    return <div className={className}>{props.children}</div>
}

export default Card