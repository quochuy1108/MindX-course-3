import { useState } from 'react'
import Navigation from './components/Layout/Navigation'
import SideBar from './components/Layout/SideBar'
import Footer from './components/Layout/Footer'
import Body from './components/Layout/Body'
// import ProductList from './components/Product/ProductList'
import StopWatch from './components/StopWatch/index'
import LangCtx from './Contexts/language'
import ThemeCtx from './Contexts/Theme'
function App() {
  const [lang, setLang] = useState('en')
  const [theme, setTheme] = useState('light')

  console.log('theme: ', theme)
  const handleChangeLang = (newLang) => {
    setLang(newLang)
  }

  const handleChangeTheme = (Theme) => {
    setTheme(Theme)
  }
  return (
    <div className="App">
      <LangCtx.Provider value={{ lang: lang }}>
        <ThemeCtx.Provider value={{ theme: theme }}>
          <Navigation
            lang={lang}
            onChangeLang={handleChangeLang}
            theme={theme}
            onChangeTheme={handleChangeTheme}
          />
          <div className="main-content">
            <SideBar />
            <div>
              <Body>
                {/* <ProductList /> */}
                {<StopWatch />}
                {<StopWatch />}
                {<StopWatch />}
              </Body>
              <Footer />

            </div>
          </div>
        </ThemeCtx.Provider>
      </LangCtx.Provider>
    </div>
  );
}

export default App;
