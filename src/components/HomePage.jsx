import React, { useState, useEffect } from "react";
import axios from "axios";
import Countdown from 'react-countdown';
import ReactDOM from 'react-dom';


function HomePage() {
  const [posts, setPosts] = useState([]);
  const [greets, setGreetings] = useState("");

  useEffect(() => {
    axios.get('https://random-data-api.com/api/color/random_color') 
      .then(response => {
        setPosts(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error); 
      });
  })
  
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
          <h3> {greets} </h3>
          <iframe src="https://christmascountdown.live/fullscreen" height="500" width="500" title="song1"></iframe>
        </div> 
      </React.Fragment>
        
        
    )
}

export default HomePage
