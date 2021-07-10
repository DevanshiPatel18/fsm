import React from 'react';
//import { makeStyles } from '@material-ui/styles';
import { Grid} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Clock from 'react-live-clock';
import PropTypes from 'prop-types';
import db from '../../../../firebase';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')

const jwt = require('jsonwebtoken');

//const useStyles = makeStyles({});

/*db.collection('Order').doc('Status').get().then((doc)=> {
   
        console.log(doc.data());
})
*/


const getDate = () => {
    var today = new Date();
    var dayName = getDayName(today.getDay());

    return (dayName + ',' +today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear())
}

function getDayName(number){
    switch(number){
        case 0 : return ('Sunday');
        case 1: return ('Monday');
        case 2: return ('Tuesday');
        case 3: return ('Wednesday');
        case 4: return('Thrusday');
        case 5: return('Friday');
        case 6: return('Saturday');
        default: return 'not a number';
    }
}
export default function UserDetails(props){
    const username = jwt.decode(props.token)
    console.log(username)

    return(
        <Grid style={{color: '#13154e',width: 100+'%', height: 5+'vh'}}>
            <Grid style={{float: 'left'}}>
                <h4>Hello, {username.username}</h4>
            </Grid>
            <Grid style= {{float: 'right'}}>
                <Typography > 
                {getDate()} &nbsp;
                <Clock format = 'HH:mm:ss' ticking = {true}></Clock>
                </Typography>
            </Grid>
        </Grid>
    );

}

UserDetails.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
    token: PropTypes.string
  };