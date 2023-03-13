import { useEffect, useState } from "react"
import {RiDoubleQuotesL,RiTwitterLine} from "react-icons/ri"
import axios from "axios"
import "../styles/quote.css"

const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

const url="https://type.fit/api/quotes"
const twitter_url="https://twitter.com/intent/tweet?text=%22"
const double_line_gap="%0D%0A%0D%0A"
const initial_loader_time=500

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export default function QuoteGenerator(){
    const [pageloader,setPageloader]=useState(true)
    const [quote,setQuote]=useState("")
    const [author,setAuthor]=useState("")

    async function getQuote(){
        setPageloader(true)
        const response = await axios.get(url);
        if (response.status===200){
            const random_int=getRandomInt(response.data.length)
            const quote_data=response.data[random_int]
            setQuote(quote_data.text)
            if (quote_data.author){
                setAuthor(quote_data.author)
            }
            else{
                setAuthor("Your well-wisher")
            }
            await sleep(initial_loader_time)

            setPageloader(false)
        }
        else{
            alert("Something went wrong!")
        }
        
    }

    useEffect( ()=>{
        (async()=>{
            await getQuote()
        })();
    },[]);
    return(
        <>
        {pageloader?(
                <RiDoubleQuotesL className="loader"/>
            ):
            (   
                <div className="content">
                    <div className="quotebox">
                        <div className="display" id="display">
                            <div className="quote" id="quote">
                                {quote}
                            </div>
                            <div className="author" id="author">
                                ~ {author}
                            </div>   
                        </div>
                        <div className="actions" id="actions">
                            <button className="tweet" id="tweet" title="Tweet it!">
                                <a target="_blank"href={twitter_url+quote+"%22"+double_line_gap+"~"+author}><RiTwitterLine className="twitter-logo"/></a>
                                
                            </button>
                            <button className="new-quote" id="new-quote" onClick={(e)=>{getQuote()}}>
                                New Quote
                            </button>
                        </div>
                    </div>
                    
                </div>
            )}
            
        </>
    )
}
