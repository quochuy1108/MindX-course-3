import { createContext } from 'react'

const LangCtx = createContext({
    lang: 'en',
    setlang: () => { }
})

export default LangCtx
