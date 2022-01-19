import { useState, useRef } from 'react'
import Card from '../Ui/Card'
import Button from '../Ui/Button'
import './UserForm.css'
import PopupErr from '../Ui/PopupErr'

function UserForm(props) {

    const inputName = useRef()

    const [value, setValue] = useState({
        name: '',
        phone: '',
        imageUrl: '',
    })
    const [visiblePopup, setVisiblePopup] = useState(false)
    const [descError, setDescError] = useState('')

    const onChange = (e) => {
        const newValue = e.target.value;
        const field = e.target.name;
        setValue(prev => {
            return {
                ...prev,
                [field]: newValue
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!value.name && !value.phone && !value.imageUrl) {
            setDescError('Field cannot be empty')
            setVisiblePopup(true)
            return
        }
        if (!value.name) {
            setDescError('Name cannot be empty')
            setVisiblePopup(true)
            return
        }
        if (!value.phone) {
            setDescError('Phone cannot be empty')
            setVisiblePopup(true)
            return
        }
        if (!value.imageUrl) {
            setDescError('imageUrl cannot be empty')
            setVisiblePopup(true)
            return
        }
        props.onSubmit(value)
        setValue({
            name: '',
            phone: '',
            imageUrl: '',
        })

        inputName.current.focus()
    }



    return (
        <Card className='user-form'>
            { visiblePopup && <PopupErr handlePopup={setVisiblePopup} descError={descError} />}
            <form onSubmit={onSubmit}>
                <div className='user-form__control'>
                    <label className='user-form__label'>Name</label>
                    <input
                        type="text"
                        className='user-form__input'
                        value={value.name}
                        name='name'
                        onChange={onChange}
                        ref={inputName}
                    />
                </div>
                <div className='user-form__control'>
                    <label className='user-form__label'>Phone</label>
                    <input
                        type="text"
                        className='user-form__input'
                        name='phone'
                        value={value.phone}
                        onChange={onChange}

                    />
                </div>
                <div className='user-form__control'>
                    <label className='user-form__label'>Image URL</label>
                    <input
                        type="text"
                        className='user-form__input'
                        name='imageUrl'
                        value={value.imageUrl}
                        onChange={onChange}

                    />
                </div>
                <div className='user-form__control'>
                    <Button>Add</Button>
                </div>
            </form>
        </Card>
    )
}

export default UserForm
