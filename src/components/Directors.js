import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>{/*{code here}*/}
  <h1>Directors Page</h1>
  {
    directors.map((director) =>(
      <div key={director.name}>
        {director.name}
        <ul>
           {director.movies.map((movie)=>{
            return <li key={movie}>{movie}</li>
           })}
        </ul>
      </div>
    ))
  }
  </div>;
}

export default Directors;
