import { useEffect, useState } from 'react'

let previousScrollTop = 0

function Home(props) {

    const [navBarPosition, setNavBarPosition] = useState(0)
    const [useCount, setUseCount] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [isValidData, setIsValidData] = useState(false)

    useEffect(() => {
        const handleScroll = (e) => {
            const scrollTop = e.target.documentElement.scrollTop
            console.log(scrollTop);
            if (scrollTop > previousScrollTop) {
                setNavBarPosition(0)
            } else {
                setNavBarPosition(scrollTop)
            }
            previousScrollTop = scrollTop

        }
        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)

        }
    }, []);

    const handleRefresh = () => {
        setIsValidData(false)
    }

    useEffect(() => {
        if (!isValidData) {
            setIsLoading(true)
            setTimeout(() => {
                fetch('https://randomuser.me/api/?results=10')
                    .then(res => res.json())
                    .then(resJson => {
                        setUseCount(resJson.results.length)
                        setIsLoading(false)
                        setIsValidData(true)
                    })
            }, 1000)
        }
    }, [isValidData]);

    return (
        <div style={{ height: 2000, position: 'relative', padding: 60 }}>
            <div >
                <div style={{
                    height: 50,
                    width: '100%',
                    position: 'absolute',
                    top: navBarPosition,
                    left: 0,
                    color: 'white',
                    fontSize: 24,
                    backgroundColor: 'black'
                }}>
                    Navbar
                 </div>
                <button onClick={props.onLogout}>Logout</button>
                {isLoading ? (<div>Loading ...</div>) : (<div>Total: {useCount} user(s)</div>
                )}
            </div>
            <button onClick={handleRefresh}>Refresh</button>
        </div>
    )
}

export default Home
