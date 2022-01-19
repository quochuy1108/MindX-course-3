import './Card.css'

function Card(props) {

    const className = `Card ${props.className}`

    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

export default Card