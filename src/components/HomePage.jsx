import React, { useState, useEffect } from "react";
import axios from "axios";
import Countdown from 'react-countdown';
//import ReactDOM from 'react-dom';


function HomePage() {
  const [posts, setPosts] = useState([]);
  const [greets, setGreetings] = useState("");
  const [Live, setLive] = useState("");

  useEffect(() => {
    axios.get('https://random-data-api.com/api/color/random_color') 
      .then(response => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error); 
      });
  }, [])
  

  useEffect(() => {
    axios.get('https://christmasjoy.dev/api/greetings?random')
  .then((res) => {
    setGreetings(res.data);
    //console.log(res.data);
  })
  .catch(error => {
    console.error(error);
  });
  }, []);

  useEffect(() => {
    axios.get("https://christmascountdown.live/api/timeleft/total/?timezone=EST")
      .then(response => {
        setLive(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  },[]);

  const styles = {
    coloring: {
      color: posts.hex_value
    }
  }

  const Completionist = () => <span>Santa has come!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days} Days :{hours} Hours :{minutes} Minutes :{seconds} Seconds</span>;
  }
};

    return(
      <React.Fragment>
        
        <div class="container">
          {//Countdown below doesn't work when I put "Live.seconds", I created another api call below
          }   
          <Countdown date={Date.now() + Live.seconds } renderer={renderer}/>
          

          <br></br>
          {
            //First api call in <h1 style = ...>
          }
          <h1 style = {{color: styles.coloring.color}}> WELCOME TO THE CHRISTMAS WEBSITE!!! </h1>
          <br></br>
          <p class="christmasFont"> Welcome to our website! We hope you have a merry Christmas and a happy holiday season!   </p>
          <br></br>

          <p>Christmas is an annual holiday celebrated by millions worldwide. Christmas is a time of </p>
          <p>togetherness and giving and is often associated with festive decorations and the exchange of </p>
          <p>gifts. Over time, Christmas has evolved from lighting homes with colorful decorations to singing </p>
          <p>carols. It's a season of love and sharing, making it one of the most cherished holidays globally. </p>
          {
            //2nd api call is {greets}
          }
          <h2> {greets} </h2>
          <iframe src="https://christmascountdown.live/fullscreen" height="500" width="500" title="song1"></iframe>
          {
            //3rd api call is in <p></p>
          }
          <p>{Live.days}: {Live.hours}: {Live.minutes} : {Live.seconds} </p>
          <br></br><br></br><br></br><br></br><br></br><br></br>
        </div> 
      </React.Fragment>
        
        
    )
}

export default HomePage
