import React from 'react'
import './Navigation.css'

function Navigation(props) {
    return (
        <div className="navigation-container">
            <div className="navigation-brandname">Shopping</div>

            <div>
                <input type="text" placeholder="Search..." />
                <select className="navigation-dropdown"
                    value={props.theme}
                    onChange={(e) => {
                        props.onChangeTheme(e.target.value)
                    }}
                >
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                </select>
                <select className="navigation-dropdown"
                    value={props.lang}
                    onChange={(e) => {
                        props.onChangeLang(e.target.value)
                    }}
                >
                    <option value="en">EN-US</option>
                    <option value="vi">VI-VN</option>
                </select>
            </div>

        </div>
    )
}

export default Navigation
