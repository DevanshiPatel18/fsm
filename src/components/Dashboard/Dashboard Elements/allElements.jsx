import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {  Grid, CardContent} from '@material-ui/core';
import UserDetails from './elements/userDetails';
import Overview from './elements/overview';
import PerformanceGraph from './elements/performanceGraph';
import Workstations from './elements/workstations';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    performanceGraph: {
        display: 'block',
        width: 100+'%',
        [theme.breakpoints.down('md')]:{
            display: 'block',
            width: 100+'%'
        }
    },
    overView: {
        display: 'inline-block',
        width:100+'%',
        [theme.breakpoints.down('md')]:{
            display: 'block',
            width: 100+'%'
        }
    },
    ProcessLog: {
        display: 'inline-block',
        float: 'left',
        width: 100+'%',
        [theme.breakpoints.down('md')]:{
            display: 'block',
            width: 100+'%'
        }
    },
    OrderHistory: {
        display: 'inline-block',
        float: 'right',
        width: 40+'%',
        marginBottom: 2+'%',
        [theme.breakpoints.down('md')]:{
            display: 'block',
            width: 100+'%',
            marginBottom: 2+'%'
        }
    },
    cardIcon: {
        display: 'flex', 
        justifyContent: 'center',
        height: 8+'vh',
        float: 'right', 
        width: 4+'vw', 
        borderTopLeftRadius: 100+'%',
        borderBottomLeftRadius: 100+'%',
        borderBottomRightRadius: 100+'%'
    }
}));
AllDashboardElements.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
    token: PropTypes.string
  };

export default function AllDashboardElements(props){
    
    const theme = useTheme();
    const classes = useStyles();
    console.log(props.token)
    return(
        <Grid>
                <Grid>
                    <UserDetails token = {props.token}></UserDetails>
                    <hr />
                </Grid>
                
                    <Grid id = 'Overview' className = {classes.overView} style= {{padding: 2+'%'}}>
                        <Overview token = {props.token}></Overview>
                    </Grid>
                    <Grid>
                        <Grid   id = 'PerformanceGraph' className = {classes.performanceGraph} style= {{ height:100+'%', width: 100+'%' }}>
                        <Grid>
                            <CardContent style={{}}>
                                <Grid>
                                    <PerformanceGraph token = {props.token} style={{ }}></PerformanceGraph>
                                </Grid>
                            </CardContent>
                        </Grid>
                        </Grid>
                    </Grid>
                
                <Grid  id = 'Workstations' style={{display: 'inline-block', width: 100+'%'}}>
                    <Workstations></Workstations>
                </Grid>
        </Grid>
    );


}
