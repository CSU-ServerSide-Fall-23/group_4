/**
 * Christmas Website Project
 * @author Gurpreet Singh & Michaela 
 * @version 12-04-2023
 * Description: This is the SongPage which contains 4 different songs which the user can interact with
 * Purpose: This page helps new or existing people to find what songs to listen to during christmas
 * Api: countdown api
 */
import React, { useState, useEffect } from "react";
import axios from "axios";

const SongPage = () => {
  const [TimeinDays ,setTimeInDays] = useState("");


  //the useEffect() below is the countdown api 
  useEffect(() => { 
    axios.get("https://christmascountdown.live/api/timeleft/?timezone=EST")
      .then(response => {
        setTimeInDays(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  },[]);

return(
    <React.Fragment>
        <div class="container">
          <h1> Song Page </h1>
          <p> {TimeinDays.sleeps} Days Left Until Christmas</p>
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
