/**
 * Christmas Website Project
 * @author Gurpreet Singh & Michaela 
 * @version 12-04-2023
 * Description: This is the HomePage which short paragraph about christmas and live countdown 
 * Purpose: This page helps viewers with getting the timeleft till christmas, get a short description of christmas
 * API used: random color api, greetings api, countdown api
 */
import React, { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [greets, setGreetings] = useState("");
  const [Live, setLive] = useState("");

  
  //The useEffect() below is for the random color api
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

  //The useEffect() below is for the greetings api
  useEffect(() => {
    axios.get('https://christmasjoy.dev/api/greetings?random')
  .then((res) => {
    setGreetings(res.data);
  })
  .catch(error => {
    console.error(error);
  });
  }, []);
  //the useEffect() below is for the countdown api
  //The countdown refreshes when the page is refreshed
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

    return(
      <React.Fragment>
        
        <div class="container">
          <br></br>

          <h1 style = {{color: styles.coloring.color}}> WELCOME TO THE CHRISTMAS WEBSITE!!! </h1>
          <br></br>
          <p class="christmasFont"> Welcome to our website! We hope you have a merry Christmas and a happy holiday season!   </p>
          <br></br>

          <p>Christmas is an annual holiday celebrated by millions worldwide. Christmas is a time of </p>
          <p>togetherness and giving and is often associated with festive decorations and the exchange of </p>
          <p>gifts. Over time, Christmas has evolved from lighting homes with colorful decorations to singing </p>
          <p>carols. It's a season of love and sharing, making it one of the most cherished holidays globally. </p>

          <h2> {greets} </h2>
          <iframe src="https://christmascountdown.live/fullscreen" height="500" width="500" title="song1"></iframe>

          <p>{Live.days}: {Live.hours}: {Live.minutes} : {Live.seconds} </p>
          <br></br><br></br><br></br><br></br><br></br><br></br>
        </div> 
      </React.Fragment>
        
        
    )
}

export default HomePage
