import React from 'react';
import { useState} from 'react';
import db from '../../../../firebase';
require('firebase/firestore')
require('firebase/auth')


export default function useWorsktationTimeAnalytics(){
    const [workstation1Time, setWorkstation1Time] = useState({
        entry: false,
        entryTimestamp: new Date(),
        exitTimeStamp: new Date(),
        exit: false,
        time: 0
    });
    const [workstation2Time, setWorkstation2Time] = useState({
        entry: false,
        exit: false,
        entryTimestamp: new Date(),
        exitTimeStamp: new Date(),
        time: 0
    });
    const [workstation3Time, setWorkstation3Time] = useState({
        entry: false,
        exit: false,
        entryTimestamp: new Date(),
        exitTimeStamp: new Date(),
        time: 0
    });

    React.useEffect(() => {
   
        
        //db.collection("Order").orderBy("Time", "desc").limit(1).onSnapshot((snapshot) => {
          //  setOrderTime( new Date(snapshot.docs[0].data().Time.seconds))
        //});

        db.collection('Realtime').doc('WS 1').onSnapshot((snapshot) => {
            //console.log(snapshot.docs[0].data().timeStamp + " " +snapshot.docs[1].data().timeStamp + " " +snapshot.docs[2].data().timeStamp)
                if(workstation1Time.entry == false){
                   if(snapshot.data().entry == 'true'){
                    setWorkstation1Time({...workstation1Time, entry: true, entryTimestamp: new Date().getTime()})
                     }
            }
                if(workstation1Time.exit == false){
                    if(snapshot.data().exit == 'true'){
                        setWorkstation1Time({...workstation1Time, entryTimestamp: new Date().getTime()})
                    }
            }

            if(workstation1Time.entry == true && workstation1Time.exit == true){
                let newtime = ((workstation1Time.exit - workstation1Time.entry)/60);
                setWorkstation1Time({...workstation1Time, time : newtime })
            }

            })

            db.collection('Realtime').doc('WS 2').onSnapshot((snapshot) => {
                //console.log(snapshot.docs[0].data().timeStamp + " " +snapshot.docs[1].data().timeStamp + " " +snapshot.docs[2].data().timeStamp)
                    if(workstation2Time.entry == false){
                       if(snapshot.data().entry == 'true'){
                        setWorkstation2Time({...workstation2Time, entry: true, entryTimestamp: new Date().getTime()})
                         }
                }
                    if(workstation2Time.exit == false){
                        if(snapshot.data().exit == 'true'){
                            setWorkstation2Time({...workstation2Time, entryTimestamp: new Date().getTime()})
                        }
                }
    
                if(workstation2Time.entry == true && workstation2Time.exit == true){
                    let newtime = ((workstation2Time.exit - workstation2Time.entry)/60);
                    setWorkstation2Time({...workstation2Time, time : newtime })
                }
    
                })
    
                db.collection('Realtime').doc('WS 3').onSnapshot((snapshot) => {
                    //console.log(snapshot.docs[0].data().timeStamp + " " +snapshot.docs[1].data().timeStamp + " " +snapshot.docs[2].data().timeStamp)
                        if(workstation3Time.entry == false){
                           if(snapshot.data().entry == 'true'){
                            setWorkstation3Time({...workstation3Time, entry: true, entryTimestamp: new Date().getTime()})
                             }
                    }
                        if(workstation3Time.exit == false){
                            if(snapshot.data().exit == 'true'){
                                setWorkstation3Time({...workstation3Time, entryTimestamp: new Date().getTime()})
                            }
                    }
        
                    if(workstation3Time.entry == true && workstation3Time.exit == true){
                        let newtime = ((workstation3Time.exit - workstation3Time.entry)/60);
                        setWorkstation3Time({...workstation3Time, time : newtime })
                    }
        
                    })
        
                        
            //let time1 = snapshot.docs[0].data().timeStamp
           //let time2 = snapshot.docs[1].data().timeStamp
           //let time3 = snapshot.docs[2].data().timeStamp
            //console.log(time1.split(" ")[1].split('.'))
            
        }, [])

    
        console.log(workstation1Time.time)
    return{
        workstation1Time,
        workstation2Time,
        workstation3Time
    }
}