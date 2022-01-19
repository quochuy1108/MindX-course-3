import Card from '../Ui/Card'
import './UserCard.css'
function UserCard(props) {
    return (
        <Card className="user-card">
            <img className="user-card__avatar" alt='avatar' src={props.user.avatar} />
            <div className="user-card__info">
                <div className="user-card__name">{props.user.name}</div>
                <div className="user-card__phone">{props.user.phone}</div>
            </div>
        </Card>
    )
}

export default UserCard
