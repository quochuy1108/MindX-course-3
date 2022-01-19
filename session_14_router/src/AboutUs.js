import { NavLink, Outlet } from 'react-router-dom'
import './AboutUs.css'

function AboutUs() {
    return (
        <div className="about-us__container">
            <div className="about-us__sidebar">
                <div>
                    <NavLink to='/about-us/members'>Members</NavLink>
                </div>
                <div>
                    <NavLink to='/about-us/contact'>Contact</NavLink>
                </div>
                <div>
                    <NavLink to='/about-us/address'>Address</NavLink>
                </div>
            </div>
            <div className="about-us__body">
                <Outlet />
            </div>
        </div>
    )
}

const Members = () => {
    return <div>Member</div>
}
const Contact = () => {
    return <div>Contact</div>
}
const Address = () => {
    return <div>Address</div>
}

export { Members, Contact, Address }
export default AboutUs
