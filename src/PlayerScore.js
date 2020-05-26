import React from 'react';
 
const PlayerScore =(props)=>{
  return (
    <table>
       <thead>
           <tr>
            <th>Single Player Score</th>
          </tr> 
       </thead>
      <tbody>
         
        <tr>
          <td>
            {props.countryData[1].scores[1].n} {props.countryData[1].scores[1].s}
          </td>
        </tr>
      </tbody>
    </table>
  );

        }

export default PlayerScore;