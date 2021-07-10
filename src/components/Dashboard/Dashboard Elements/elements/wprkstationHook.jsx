import db from '../../../../firebase';
import { useState } from 'react';
import { useEffect } from 'react';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')

export default function useWorkstationData(){
    const [workstation1, setWorkstation1] = useState([{
        power: false,
        pnumatic: false,
        user: 'None',
        inventory: 'None',
        pressure: 0,
        process: 'NA',
        part: 'None'
    }]);
    const [workstation2, setWorkstation2] = useState([{
        power: false,
        pnumatic: false,
        user: 'None',
        inventory: 'None',
        pressure: 0,
        process: 'NA',
        part: 'None'
    }]);
    const [workstation3, setWorkstation3] = useState([{
        power: false,
        pnumatic: false,
        user: 'None',
        inventory: 'None',
        pressure: 0,
        process: 'NA',
        part: 'None'
    }]);

    useEffect(() => {
        db.collection('Realtime').doc('WS 1').onSnapshot((doc) => {
            setWorkstation1({
                ...workstation1, 
                power : doc.data().powerStatus ? doc.data().powerStatus : false,
                pnumatic: doc.data().stnPressure ? doc.data().stnPressure : false,
                user: doc.data().user ? doc.data().user : "NA",
                inventory: doc.data().inventory ? doc.data().inventory : 0,
                pressure: doc.data().bar ? doc.data().bar : 0,
                process: doc.data().status ? doc.data().status  : 'NA'
            })
        })
    
        db.collection('Realtime').doc('WS 2').onSnapshot((doc) => {
            setWorkstation2({
                ...workstation2, 
                power : doc.data().powerStatus ? doc.data().powerStatus : false,
                pnumatic: doc.data().stnPressure ? doc.data().stnPressure : false,
                user: doc.data().user ? doc.data().user : "NA",
                inventory: doc.data().inventory ? doc.data().inventory : 0,
                pressure: doc.data().bar ? doc.data().bar : 0,
                process: doc.data().status ? doc.data().status  : 'NA'
            })
        })
    
        db.collection('Realtime').doc('WS 3').onSnapshot((doc) => {
            setWorkstation3({
                ...workstation3, 
                power : doc.data().powerStatus ? doc.data().powerStatus : false,
                pnumatic: doc.data().stnPressure ? doc.data().stnPressure : false,
                user: doc.data().user ? doc.data().user : "NA",
                inventory: doc.data().inventory ? doc.data().inventory : 0,
                pressure: doc.data().bar ? doc.data().bar : 0,
                process: doc.data().status ? doc.data().status  : 'NA'
            })
        })
    }, [])
    

   console.log(workstation1)
    return{
        workstation1,
        workstation2,
        workstation3
    }
}