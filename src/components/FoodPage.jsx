//import React from "react";
import greenbean from "../../src/images/greenbean.jpg"
import bakedham from "../../src/images/bakedham.jpg";
import fruitcake from "../../src/images/fruitcake.jpg";

import React, { useState, useEffect } from "react"; //add
import axios from "axios"; //add

const FoodPage = () => {
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
            <h1> Food Page</h1>
            <p> {TimeinMS.days} Days Left Until Christmas</p>

            <div class="row">
                <div class="col-6">
                    <a href="https://www.campbells.com/recipes/green-bean-casserole/"><img src={greenbean} height="200" width="200"></img></a>
                </div>
                <div class="col-4">
                    <br></br>
                    <p>Green bean casserole is a baked dish made primarily of French fried onions, green beans, and cream of mushroom soup.  </p>
                </div>
            </div>
            <br></br>
            <div class="row">
                <div class="col-6">
                    <a href="https://www.spendwithpennies.com/baked-ham-with-brown-sugar-glaze/"><img src={bakedham} height="200" width="200"></img></a>
                </div>
                <div class="col-4">
                    <br></br>
                    <p>Baked ham is a traditional Christmas dish that has a variety of glazes and seasonings to suit different tastes.  </p>
                </div>
            </div>
            <br></br>
            <div class="row">
                <div class="col-6">
                    <a href="https://www.kingarthurbaking.com/recipes/everyones-favorite-fruitcake-recipe"><img src={fruitcake} height="200" width="200"></img></a>
                </div>
                <div class="col-4">
                    <br></br>
                    <p>Fruitcake is made with spices and dried or candied fruit and can be soaked in spirits.   </p>
                </div>
            </div>
        </div>
    </React.Fragment>
)}

export default FoodPage
