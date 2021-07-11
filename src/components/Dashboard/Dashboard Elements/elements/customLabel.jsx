import React from 'react';
import { withStyles} from '@material-ui/core';
import {Line, Chart} from 'react-chartjs-2';
import StreamingPlugin from 'chartjs-plugin-streaming';
import 'chartjs-adapter-luxon';
import { ShowChart } from '@material-ui/icons';
import { grey } from '@material-ui/core/colors';
import {Grid,Card, CardContent, CardHeader,CardActionArea, Table, TableRow, TableCell, TableBody, TableHead} from '@material-ui/core'
import {Scrollbars } from 'rc-scrollbars';
import useParameterValues from './parametValues';
import useProcessStatus from './processLogHook';
import db from '../../../../firebase';
import { useState } from 'react';
import { useEffect } from 'react';
const firebase = require('firebase');
require('firebase/firestore')
require('firebase/auth')


export default function CustomLabel(){

    const {currentQual, currentPer, currentOEE, currentAvail} = useParameterValues();
    const customLabel =  [
        {
          icon: ShowChart,
          text: 'OEE',
          value: currentOEE,
          color: '#1199EE',
        },{
          icon: ShowChart,
          text: 'Performance',
          value: currentPer,
          color: '#D1A166',
        },{
          icon: ShowChart,
          text: 'Quality',
          value: currentQual,
          color: '#E03409',
        },{
          icon: ShowChart,
          text: 'Availibility',
          value: currentAvail,
          color: '#000000',
        }
      ]
    return(
        <CardActionArea style={{textAlign :'center'}}>
            {customLabel.map((label) => (
                <Grid style= {{ margin: 1+'%',width: 20+'%', display: 'inline-block'}}>
                <Grid style={{display: 'inline-block',padding: 6+'%', backgroundColor: label.color, borderRadius: 100+'%'}}>
                <ShowChart style={{color: 'white'}} size = 'large'></ShowChart>
                </Grid>
                  <Grid style={{display: 'inline-block', marginLeft: 5+ '%', verticalAlign: 'top'}}>
                  <h4 style={{marginBottom: 0}} >{label.value}</h4>
                  <p variant = 'body2' >{label.text}</p>
                  </Grid>
                </Grid>
            ))}
            </CardActionArea>
    )
}