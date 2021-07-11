import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Card, Table, TableHead, TableBody, TableCell, TableRow , Grid, Typography} from '@material-ui/core';
import { grey, brown } from '@material-ui/core/colors';
import useOrderHistoryDetails from './orderHistoryHook';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: 5+'%',
        backgroundColor: grey[800],
        width: 80+'%',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 60px 40px -7px'
    },
    tableCell: {
        color: 'white',
        fontFamily: 'Baloo Da 2, cursive',
        textAlign: 'center',
        width: 30+'%'
    },

    }    ));


export default function OrderHistory(){

    const classes = useStyles();
    //const theme = useTheme();

    const {history} = useOrderHistoryDetails();
    console.log(history);
    return(
        <Grid style={{height: 82.75+'vh', overflow: 'hidden'}}>
            <Typography style={{textAlign : 'center', color: brown[800], fontWeight: 900}}>
                <h1>Order History</h1>
            </Typography>
            <Grid  style={{width: 100+'%', textAlign: 'center',  display: 'flex', justifyContent: 'center'}}>
               <Card className =  {classes.root} >
                   <Table style={{color: 'white'}}>
                        <TableHead>
                           <TableRow >
                                <TableCell className = {classes.tableCell}>Order Type</TableCell>
                                <TableCell className = {classes.tableCell}>Timestamp</TableCell>
                                <TableCell className = {classes.tableCell}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                    <TableBody>
                        {history.map((doc) => (
                            <TableRow key = {doc.id}>
                            <TableCell className = {classes.tableCell}>{doc.Type}</TableCell>
                            <TableCell className = {classes.tableCell}>{new Date(doc.Time.seconds * 1000).toLocaleDateString("en-IN") + " "+new Date(doc.Time.seconds * 1000).toLocaleTimeString("en-IN") }</TableCell>
                            <TableCell className = {classes.tableCell}>{doc.Good === '1' ? 'Good' : 'Defective'}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
            </Grid>
        </Grid>
    );
    
}