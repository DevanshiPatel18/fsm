import React from 'react';
import { useState } from 'react';
import db from '../../../../firebase';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')


export default function useStatusChange(){

    const [workstation1Status, setWorkstation1Status] = useState(0);
    const [workstation2Status, setWorkstation2Status] = useState(0);
    const [workstation3Status, setWorkstation3Status] = useState(0);
    const [totalProgess, setTotalProgress] = useState(0);

    React.useEffect(() => {
        if(workstation1Status !== 100){
        db.collection('Realtime').doc('WS 1').onSnapshot((snapshot) => {
            
            
            if(snapshot.data().status !== workstation1Status){
                    setWorkstation1Status(workstation1Status + 4)

            }
            if(snapshot.data().status === 'Completed')
            setWorkstation1Status(100)
        })
    }
    if(workstation2Status !== 100 && workstation1Status == 100){
        db.collection('Realtime').doc('WS 2').onSnapshot((snapshot) => {
             if(snapshot.data().status !== workstation2Status){
                    setWorkstation2Status(workstation2Status + 4)
                
            }
            if(snapshot.data().status === 'Completed')
                    setWorkstation2Status(100)
        })
    }
    if(workstation3Status !== 100 && workstation3Status == 100){
        db.collection('Realtime').doc('WS 3').onSnapshot((snapshot) => {
            
            if(snapshot.data().status !== workstation3Status){
                    setWorkstation3Status(workstation3Status + 4)

            }
            if(snapshot.data().status === 'Completed')
            setWorkstation3Status(100)
        })
    }

        db.collection('OrderTest').doc('CurrentOrder').onSnapshot((snapshot) => {
            if(snapshot.data().Process === 'Completed')
                totalProgess(100)
            else if(snapshot.data().Process !== totalProgess){
                    setTotalProgress(totalProgess + 0.4)

            }
        })
    },[])

    return{
        workstation1Status,
        workstation2Status,
        workstation3Status,
        totalProgess
    }

}