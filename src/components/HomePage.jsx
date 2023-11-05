import React, { useState, useEffect } from "react";
import axios from "axios";


function HomePage() {
  const [posts, setPosts] = useState([]);

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

  const styles = {
    coloring: {
      color: posts.hex_value
    }
  }

    return(
        <div class="container">
          <h1 style = {{color: styles.coloring.color}}> WELCOME TO THE CHRISTMAS WEBSITE!!! </h1>
        </div>  
      
    )
}

export default HomePage
