import db from '../../../../firebase';
import { useState } from 'react';
import React from 'react';
import { useEffect } from 'react';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')


export default function useProcessStatus(){
    const [process, setProcess] = useState([])

    React.useEffect(() => {
    db.collection('OrderTest').doc('CurrentOrder').onSnapshot((doc) => {
        const date = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(Date.now());
        //console.log(enUSFormatter.format(date) + new Date().getTime());
        const processPart = doc.data().Process
        console.log(processPart);
        setProcess([...process, {process : processPart, date : date}]);
        
    })
}, [])
    console.log(process)
    return{
        process
    }
}