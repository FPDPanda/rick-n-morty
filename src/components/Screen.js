import React, {useState, useEffect} from 'react'

// CSS
import '../styles/Screen.css'

function Screen() {
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
            data.push(JSON.parse(localStorage.getItem('episode'+(i+1))))
        }
        if(data) {
            setLoading(false)
        }
    }, [data])

    if(loading) {
        return(
            <aside className="App-main-screen">
                <p style={{color:'#fff', textAlign:'center'}}>Loading episodes...</p>
            </aside>
        )
    } else {    
        return (
            <aside className="App-main-screen">
                )
                }
            </aside>
        )
    }
}

export default Screen;