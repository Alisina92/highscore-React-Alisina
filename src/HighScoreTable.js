import React from "react";


const HighScoreTable = (props) => {
  const sortedArray = props.countryData.sort(function(a,b){
          if(a.name.toLowerCase()<b.name.toLowerCase())return-1;
          if(a.name.toLowerCase()>b.name.toLowerCase())return+1;
           return 0;
        })
  
  return (
    <div>
      <h1>Country Score</h1>
        {sortedArray.map((element,index) => {
        
        return (
          <table key={index}>
            <thead>
              <tr>
                <th>High Score:{element.name}</th>
              </tr>
            </thead>
            <tbody>
                {element.scores.map((e,i) => {
                 
                 return (
                   <tr key = {i}>
                     <td >
                       {e.n} 
                     </td>
                     <td >
                       {e.s}
                     </td>
                   </tr>
                 );
                })}
            </tbody>
          </table>
        );
      })}
    </div>
  );
};
export default HighScoreTable;
