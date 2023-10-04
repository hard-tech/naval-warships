import React, { Component } from 'react';

let x1 = 'B', y1 = '2', x2 = 'E', y4 = '2', type_of_ship = 'bateaux-size1_Size3';
function retournement_bateau(x1,y1,x2,y2) {
    const condition = x1 == x2;
    return ( 
      <div>
        {condition ?(
          alert('horizontale')
        ): (
          alert('verticale')
        )
          }
      </div>
    )
}
export default retournement_bateau;