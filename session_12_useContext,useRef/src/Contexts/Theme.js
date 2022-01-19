import { createContext } from 'react'

const ThemeCtx = createContext({
    theme: 'Light',
    setTheme: () => { },
})

export default ThemeCtx