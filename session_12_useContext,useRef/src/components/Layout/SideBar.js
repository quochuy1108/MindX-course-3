import { useContext } from 'react'
import './SideBar.css'
import LangCtx from '../../Contexts/language'
import ThemeCtx from '../../Contexts/Theme'

function SideBar() {
    const langCtxValue = useContext(LangCtx)
    const themeCtxValue = useContext(ThemeCtx)
    return (
        <div className={themeCtxValue.theme === 'light' ? "sidebar-container" : "sidebar-container dark"}>
            {langCtxValue.lang === 'en' ? 'SideBar' : 'Menu trái'}
        </div>
    )
}

export default SideBar
