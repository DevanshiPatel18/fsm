import React from 'react';
import { useState, useEffect } from 'react';
import db from '../../../../firebase';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')

export default function usePartDetails(){

    const [defective5By2, setDefective5By2] = useState(0);
    const [good5By2, setGood5By2] = useState(0)
    const [defective3By2, setDefective3By2] = useState(0);
    const [good3By2, setGood3By2] = useState(0);

    React.useEffect(() => {
            db.collection('Order').onSnapshot((doc) => {
                doc.forEach((document) => {
                    if(document.id !== 'Status'){
                        var partType = document.data().Type;
                        
                        if(partType === '5/2'){
                            if( document.data().Good === '1'){
                                setGood5By2(parseInt(good5By2) + 1);
                            }else{
                                setDefective5By2(parseInt(defective5By2) + 1);
                            }
                        }else{
                            if( document.data().Good === '1'){
                                setGood3By2(parseInt(good3By2) + 1);
                            }else{
                                setDefective3By2(parseInt(defective3By2) + 1);
                            }
                        }
                    }
                })
            })
    }, [])

    return{
        defective3By2,
        defective5By2,
        good3By2,
        good5By2
    }
    
}