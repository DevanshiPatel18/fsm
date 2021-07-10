import { useEffect } from "react";
import { useState } from "react";
import React from 'react'
import db from '../../../../firebase';
const firebase = require('firebase');

require('firebase/firestore')
require('firebase/auth')


export default function useParameterValues(){
    
    const [currentOEE, setCurrentOEE] = useState(0);
    const [currentAvail, setCurrentAvail] = useState(0);
    const [currentQual, setCurrentQual] = useState(0);
    const [currentPer, setCurrentPer] = useState(0);


    db.collection('Realtime').doc('WS 1').onSnapshot((doc) => {

      
        setCurrentOEE(doc.data().oee);
        setCurrentAvail(doc.data().availability);
        setCurrentPer(doc.data().performance);
        setCurrentQual(doc.data().quality);
        console.log(currentOEE+" "+currentAvail+" "+currentPer+" "+currentQual)
    })

return{
    
    currentAvail,
    currentOEE,
    currentPer,
    currentQual
}
}

/*const onRefresh = chart => {
  const now = Date.now();
  numberOfEntries += 1;
  let currentOEE =0;
  let currentAvail =0;
  let currentQual =0;
  let currentPer =0;
  if( props.token ){
  db.collection('Realtime').doc('WS 1').get().then((doc) => {
    console.log('hello')
    currentOEE = doc.data().oee + Math.random()*100
    currentAvail = doc.data().availability +  Math.random()*100
    currentQual = doc.data().quality +  Math.random()*100
    currentPer = doc.data().performance +  Math.random()*100
    console.log(avgOEE + "," + avgAvail+','+avgPer+','+avgQual);
    //chart.data.datasets.forEach((dataset,id) => {
      //dataset.data.push({
       // x: now,
        //y: doc.data().id
      //});
    //});
    chart.data.datasets[0].data.push({x: now, y: currentOEE})
    chart.data.datasets[1].data.push({x: now, y: currentPer})
    chart.data.datasets[2].data.push({x: now, y: currentQual})
    chart.data.datasets[3].data.push({x: now, y: currentAvail})



    
  })
  setAvgOEE((avgOEE*numberOfEntries + currentOEE)/(numberOfEntries+1));
  setAvgAvail((avgAvail*numberOfEntries + currentAvail)/(numberOfEntries+1));
  setAvgQual((avgQual*numberOfEntries + currentQual)/(numberOfEntries+1));
  setAvgPer((avgPer*numberOfEntries + currentPer)/(numberOfEntries+1));


};
}*/