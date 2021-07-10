import db from '../../../../firebase';
import { useState } from 'react';
import React from 'react';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')


export default function usePartsAndOrder(){
    const [manufactured, setManufactured] = useState(0)
    const [defective, setDefective] = useState(0)
    const [process, setProcess] = useState("No Order")
    const [orderType, setOrderType] = useState('No Order')

    React.useEffect(() => {
        db.collection('Order').doc('Status').get().then((doc) => {
            setManufactured(doc.get('Total Manufactured'));
            setDefective(doc.get('Total Defective'));
            
                db.collection('OrderTest').doc('CurrentOrder').onSnapshot((doc) => {
                    
                        console.log(doc.data().Machine);
                    setProcess(doc.get('Process'));
 
                        setProcess(doc.get('Process'));
                        db.collection("Order").orderBy("Time", "desc").limit(1).onSnapshot((snapshot) => {
                          setOrderType(snapshot.docs[0].data().Type)
                        });
                    
                
                })
            
        })

        //db.collection("Order").orderBy("Time", "desc").limit(1).onSnapshot((snapshot) => {
          //  setOrderTime( new Date(snapshot.docs[0].data().Time.seconds))
        //});

    }, [0])
    return{
        defective,
        manufactured,
        process,
        orderType
    }
}