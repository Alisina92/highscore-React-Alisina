import React from "react";


const HighScoreTable = (props) => {
  return (
    <div>
      <h1>Country Score</h1>
      {props.countryData.map((element,index) => {
        console.log(index, 'country data index')
        return (
          <table key={index}>
            <thead>
              <tr>
                <th>High Score:{element.name}</th>
              </tr>
            </thead>
            <tbody>
                {element.scores.map((e,i) => {
                  console.log(i,"scores index")
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
