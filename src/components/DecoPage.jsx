/**
 * Christmas Website Project
 * @author Gurpreet Singh & Michaela 
 * @version 12-04-2023
 * Description: This is the DecoPage which contains 6 types of decorations, with amazon links to purchase when clicking on images
 * Purpose: This page helps new or existing people to find what decorations to put during christmas
 * Api used: countdown api
 */

import inflate from "../../src/decoimg/inflate.jpg";
import lights from "../../src/decoimg/lights.jpg";
import ornaments from "../../src/decoimg/ornament.jpg";
import stockings from "../../src/decoimg/stockings.jpg";
import tree from "../../src/decoimg/tree.jpg";
import wreath from "../../src/decoimg/wreath.jpg";

import React, { useState, useEffect } from "react"; 
import axios from "axios"; 

const DecoPage = () => {
  const [TimeinDays ,setTimeInDays] = useState("");

  //the useEffect() below is for the countdown api
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
        
          <h1> Deco Page </h1>
          <p> {TimeinDays.sleeps} Days Left Until Christmas</p>
          <div class="row">
            <div class="col">
                <a href="https://www.amazon.com/OurWarm-Christmas-Inflatables-Decorations-Inflatable/dp/B08GKF1KJH/ref=sr_1_4?crid=VW6T41EDTZXI&keywords=christmas+inflatable+outdoor+decoration&qid=1699150519&sprefix=christmas+infla%2Caps%2C282&sr=8-4"><img src={inflate} height="200" width ="200"></img></a>
                <p> inflatables </p>
            </div>
            <div class="col">
                <a href="https://www.amazon.com/Prextex-Christmas-100-Count-Multi-Decorations/dp/B07N8CNQ2R/ref=sr_1_5?keywords=christmas%2Blights&qid=1699150342&refinements=p_72%3A1248909011&rnid=1248907011&s=hi&sr=1-5&th=1"><img src={lights} height="200" width ="200"></img></a>
                <p> lights </p>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="col">
                <a href="https://www.amazon.com/Lulu-Home-Christmas-Ornaments-Decorations/dp/B07Y1V1KRS/ref=sr_1_2?crid=1H3921XBK3K4T&keywords=christmas%2Bornaments&qid=1699151422&sprefix=christmas%2Bor%2Caps%2C281&sr=8-2&th=1"><img src={ornaments} height="200" width ="200"></img></a>
                <p> ornaments </p>
            </div>
            <div class="col">
                <a href="https://www.amazon.com/Bailey-Unique-Burgundy-Christmas-Stockings/dp/B07HY3G43L/ref=sr_1_5?keywords=christmas%2Bstockings&qid=1699150386&sr=8-5&th=1"><img src={stockings} height="200" width ="200"></img></a>
                <p> stockings </p>
            </div>
          </div>
          <br></br>
          <div class="row">
            <div class="col">
                <a href="https://www.amazon.com/Best-Choice-Products-Artificial-Christmas/dp/B018FDYGVM/ref=sr_1_3?keywords=christmas%2Btree&qid=1699150081&refinements=p_72%3A1248915011&rnid=1248913011&s=home-garden&sr=1-3&th=1"><img src={tree} height="200" width ="200"></img></a>
                <p> christmas trees </p>
            </div>
            <div class="col">
                <a href="https://www.amazon.com/National-Tree-Crestwood-Bristles-CW7-306-24W-B1/dp/B00LKRMNWK/ref=sr_1_2?keywords=christmas%2Bwreath&qid=1699150924&sr=8-2&th=1"><img src={wreath} height="200" width ="200"></img></a>
                <p> wreaths </p>
            </div>
          </div>
        </div>
      </React.Fragment>
)}

export default DecoPage
