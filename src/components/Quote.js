import React from 'react';
import Button from './Button';
import twitter from '../twitter.svg';
import tumblr from '../tumblr.svg';


const Quote =(props) =>{
    return(
    <div id="quote-box">
        <div id="text">
           <p> {props.selectedQuote ? `"${props.selectedQuote.quote}"` : ''}</p></div>
           <div id="author">
           <p> {props.selectedQuote ? `-${props.selectedQuote.author}` : ''}</p></div>
    
    <div id="buttons">
        <div className="social-media">
            <a href="twitter.com/intent/tweet" id="tweet-quote"><span><img src={twitter} alt="" /></span></a>
            <a href="#" id="tumblr-quote"><span><img src={tumblr} alt="" /></span></a>
            </div>
        
    <Button buttonDisplayName="Next Quote" clickHandler={props.assignNewQuote} />
    </div>
    </div>
    );
};

export default Quote;