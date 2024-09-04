'use strict';

const pieces = nomeUC.split(" ");
    if (pieces.length === 1) {
      return nomeUC; 
    }
    const abrev = pieces[0].substring(0, 4);
    
    pieces.splice(-2, 2);
    return abrev + ". " + pieces.pop();


export default abreviaUC;