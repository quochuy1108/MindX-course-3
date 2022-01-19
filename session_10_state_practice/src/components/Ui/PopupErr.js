import './PopupErr.css'

function PopupErr(props) {

    const handlePopup = () => {
        props.handlePopup(false)
    }


    return (
        <div className="popup">
            <div className="popup-form">
                <h1 className="popup-title">Error</h1>
                <p className="popup-desc">{props.descError}</p>
                <div className="popup-btn" onClick={handlePopup}>Ok</div>
            </div>
        </div>
    )
}

export default PopupErr
