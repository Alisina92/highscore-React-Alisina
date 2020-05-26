import React from "react";


const HighScoreTable = (props) => {
  return (
    <div>
      <h1>Country Score</h1>
      {props.countryData.map((element,index) => {
        return (
          <table key={index}>
            <thead>
              <tr>
                <th>High Score:{element.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {element.scores.map((e) => {
                  return (
                    <td className="list">
                      {e.n} {e.s}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};
export default HighScoreTable;
