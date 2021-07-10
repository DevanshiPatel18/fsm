import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, Grid, CardContent, Typography } from '@material-ui/core';
import { ShoppingBasket,Delete, Build,Done} from '@material-ui/icons';
import { blue, red, orange, green } from '@material-ui/core/colors';
import LinearWithValueLable from './linearProgress';
import PropTypes from 'prop-types';
import usePartsAndOrder from './partsAndOrderHook';
import db from '../../../../firebase';
import useStatusChange from './statuschange';
import { useState } from 'react';
import { useEffect } from 'react';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')

const jwt = require('jsonwebtoken');

//const useStyles = makeStyles({});

/*db.collection('Order').doc('Status').get().then((doc)=> {
   
        console.log(doc.data());
})

db.collection('Order').doc('Status').get().then((doc) => {
    totalManufactured = doc.get('Total Manufactured');
    totalDefective = doc.get('Total Defective');
    
    let orderReceived =true
    console.log(doc.get('Received'));
    if (orderReceived){
        db.collection('OrderTest').doc('CurrentOrder').onSnapshot((doc) => {
            orderProcess = doc.get('Process');
            if( orderProcess !== 'Waiting...'){
                    
            }
        })
    }
})

*/

const useStyles = makeStyles({
    card: {
        display: 'flex', 
        justifyContent: 'center',
        height: 8+'vh',
        float: 'right', 
        width: 4+'vw', 
        borderTopLeftRadius: 100+'%',
        borderBottomLeftRadius: 100+'%',
        borderBottomRightRadius: 100+'%',
    },
    shadow : {
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    }
});




export default function Overview(props){

    const classes = useStyles();
    const {manufactured, defective, process, orderType} = usePartsAndOrder();
    const [totalProgess, setTotalProgress] = useState(-2);

    useEffect(() => {
        let flag = 0;
        db.collection('OrderTest').doc('CurrentOrder').onSnapshot((snap) => {
            if(!snap.data().Machine)
            flag = 1;
        })
        if( flag === 0){
        db.collection('OrderTest').doc('CurrentOrder').onSnapshot((snapshot) => {
            if(snapshot.data().Process === 'Completed')
                totalProgess(100)
            else{
                    setTotalProgress(totalProgess + 2)

            }
        })
    }else{
        setTotalProgress(0)
    }
    },[])

    return(
        <Grid>
        
                <Card className= {classes.shadow} style={{width: 23+'%', display: 'inline-block', marginRight: 2+'%'}}>
                    <Grid className = {classes.card}  style={{backgroundColor: blue[500]}}><ShoppingBasket fontSize = 'large' style={{marginTop: 25+'%', color: 'white'}}></ShoppingBasket></Grid>
                    <CardContent style = {{marginLeft: 5+'%', marginTop:2+'%', paddingBottom: 1+'%'}}>
                        <Typography>
                            <Typography><h4 style={{marginBottom: 0}}>{manufactured}</h4></Typography>
                            <p>Total Maufactured</p>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className= {classes.shadow} style={{width: 23+'%', display: 'inline-block', marginRight: 2+'%'}}>
                    <Grid className = {classes.card} style={{backgroundColor: red[500]}}><Delete fontSize = 'large' style={{marginTop: 25+'%', color: 'white'}}></Delete></Grid>
                    <CardContent style = {{marginLeft: 5+'%', marginTop:2+'%', paddingBottom: 1+'%'}}>
                        <Typography>
                            <Typography><h4 style={{marginBottom: 0}}>{defective}</h4></Typography>
                            <p>Defective</p>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className= {classes.shadow} style={{width: 23+'%', display: 'inline-block', marginRight: 2+'%'}}>
                    <Grid className = {classes.card} style={{backgroundColor: orange[500]}}><Build fontSize = 'large' style={{marginTop: 25+'%', color: 'white'}}></Build></Grid>
                    <CardContent style = {{marginLeft: 5+'%', marginTop:2+'%', paddingBottom: 1+'%'}}>
                        <Typography>
                            <Typography><h4 style={{marginBottom: 0}}>{orderType}</h4></Typography>
                            <p>Part Maufactured</p>
                        </Typography>
                    </CardContent>
                </Card>
                <Card className= {classes.shadow} style={{width: 23+'%', display: 'inline-block', marginRight: 2+'%'}}>
                    <Grid className = {classes.card} style={{backgroundColor: green[500]}}><Done fontSize = 'large' style={{marginTop: 25+'%', color: 'white'}}></Done></Grid>
                    <CardContent style = {{marginLeft: 5+'%', marginTop:2+'%', paddingBottom: 1+'%'}}>
                        <Typography>
                            <LinearWithValueLable progress = {totalProgess}></LinearWithValueLable>
                            <p>{process}</p>
                        </Typography>
                    </CardContent>
                </Card>
                
        </Grid>
    ); 
}

Overview.propTypes = {
    token: PropTypes.func
}
/*         <Card style={{display: 'inline-block', width: 50+'%', textAlign: 'center', justifyContent: 'center'}}>
                
                <CardContent style={{padding: 10+'%'}}>
                    <Grid><ShowChart style={{display: 'inline-block', marginRight: 5+'%'}}></ShowChart><h4 style={{display: 'inline-block'}}>Total Progress</h4></Grid>
                        <CircularStatic style={{width: 100+'%', height: 200}}></CircularStatic>
                        <Typography style={{color: 'hsl(44, 83%, 60%)'}}>
                            <p >Process Review</p>
                            <h5 style={{fontWeight: 900}}>Inserting Spool</h5>
                        </Typography>
                    </CardContent>
    
            </Card>
*/