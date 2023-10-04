import React, { Component } from 'react';

const alphabetMajuscules = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let verticalite, sens
function retournement_bateau(x1,y1,x2,y2,type_of_ship) {

  for(let i = 0; i < alphabetMajuscules.length; i++){
    if(x1==alphabetMajuscules[i]){
      x1 = i+1
    }
  }
  for(let i = 0; i < alphabetMajuscules.length; i++){
    if(x2==alphabetMajuscules[i]){
      x2 = i+1
    }
  }
        if (x1==x2) {
          verticalite = 'horizontale'
          if (y1 < y2){
            sens = 'droite'
          }
          else {
            sens = 'gauche'       
          }
        }
        else {
          verticalite = 'verticale'
          if (x1 < x2){
            sens = 'bas'
          }
          else {
            sens = 'haut'         
          }
        }
    return ( 
      <div className="">

      </div>
    )
}

retournement_bateau('B','5','B','2','bateaux-size1_Size3');

export default retournement_bateau;