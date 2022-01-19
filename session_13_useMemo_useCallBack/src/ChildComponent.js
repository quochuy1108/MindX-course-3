import { memo } from 'react'

function ChildComponent({ visible }) {
    console.log('Child Components');
    return (
        <div>
            {visible ? 'This is child component' : null}
        </div>
    )
}

export default memo(ChildComponent)
