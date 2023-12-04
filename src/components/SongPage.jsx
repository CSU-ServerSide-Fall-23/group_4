//import React from "react";
import React, { useState, useEffect } from "react"; //add
import axios from "axios"; //add



const SongPage = () => {
  const [TimeinMS ,setTimeInMs] = useState("");

  useEffect(() => { //add
    axios.get("https://christmasjoy.dev/api/countdown")
      .then(response => {
        setTimeInMs(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  },[]);//add

return(
    <React.Fragment>
        <div class="container">
          <h1> Song Page </h1>
          <p> {TimeinMS.days} Days Left Until Christmas</p>
          <br></br>
          <br></br>
          <div class="row">
            <div class="col">
              <iframe src="https://www.youtube.com/embed/-tJtsKngXJU" height="200" width="300" title="song1"></iframe>
            </div>
            <div class="col">
              <iframe src="https://www.youtube.com/embed/xyB1g6TwJZ4" height="200" width="300" title="song1"></iframe>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div class="row">
            <div class="col">
              <iframe src="https://www.youtube.com/embed/yXQViqx6GMY" height="200" width="300" title="song1"></iframe>
            </div>
            <div class="col">
              <iframe src="https://www.youtube.com/embed/4PzetPqepXA" height="200" width="300" title="song1"></iframe>
            </div>
          </div>
          

        </div>
         
      </React.Fragment>
)}

export default SongPage
