import Header from "./Header";
import QuoteGenerator from "./QuoteGenerator";
import {RiHeart3Fill} from "react-icons/ri"
import "../styles/main.css"

export default function MainPage(){

    return(
        <div className='main_container'>
            <Header/>
            <div className="main_content">
                <QuoteGenerator/>
            </div>
            <div className="footer">Made by Sahil Savaj</div>
		</div>
    );
}