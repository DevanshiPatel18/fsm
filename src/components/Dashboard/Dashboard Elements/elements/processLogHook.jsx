import db from '../../../../firebase';
import { useState } from 'react';
import React from 'react';
import { useEffect } from 'react';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')

const processLog = [{
}];

export default function useProcessStatus(){
    const [process, setProcess] = useState(["No Order"])
    React.useEffect(() => {
    db.collection('OrderTest').doc('CurrentOrder').onSnapshot((doc) => {
        const date = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(Date.now());
        //console.log(enUSFormatter.format(date) + new Date().getTime());
        const processPart = doc.data().Process
        processLog.push({ process : processPart, date : date});
        setProcess(processLog)
    })
}, [])
    console.log(processLog)
    return{
        process
    }
}