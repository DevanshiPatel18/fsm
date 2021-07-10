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
        let flag = 0;
        db.collection('OrderTest').doc('CurrentOrder').onSnapshot((snapshot) => {
        if(!snapshot.data().Machine){
            flag = 1;

        }
        })
        if(flag === 0){
            
    
        db.collection('Realtime').doc('WS 1').onSnapshot((snapshot) => {
            
            
            if(snapshot.data().status === 'Completed')
            setWorkstation1Status(100)
            else
                    setWorkstation1Status(workstation1Status + 4)
        })
    
    
        db.collection('Realtime').doc('WS 2').onSnapshot((snapshot) => {
            
            if(snapshot.data().status === 'Completed')
                    setWorkstation2Status(100)

            setWorkstation2Status(workstation2Status + 4)
        })
    
    
        db.collection('Realtime').doc('WS 3').onSnapshot((snapshot) => {
            
            if(snapshot.data().status === 'Completed')
            setWorkstation3Status(100)

                    setWorkstation3Status(workstation3Status + 4)
        })
    

        db.collection('OrderTest').doc('CurrentOrder').onSnapshot((snapshot) => {
            if(snapshot.data().Process === 'Completed')
                totalProgess(100)
            else{
                    setTotalProgress(totalProgess + 2)

            }
        })
    }else{
            setTotalProgress(0)
            setWorkstation1Status(0)
            setWorkstation2Status(0)
            setWorkstation3Status(0)}
    },[])

    return{
        workstation1Status,
        workstation2Status,
        workstation3Status,
        totalProgess
    }

}