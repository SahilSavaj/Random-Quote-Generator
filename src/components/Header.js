import "../styles/header.css"
import logo from "../static/random_quote_logo.png"

export default function Header(){
    return(
        <>
            <header className="header">
                <img className="logo" src={logo} alt="logo"></img>
                Random Quote Generator
            </header>
        </>
    )
}