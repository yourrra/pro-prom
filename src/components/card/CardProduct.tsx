import React, { useEffect, useState } from 'react';
import { getTabsShortList, TabsShort } from '../../request/tabs';
//@ts-ignore
import styles from "./CardProduct.module.scss"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const CardProduct = (props: { tab: TabsShort, id: string }) => {

    return (
        <Card className={styles.cardStyleUI}>
            <CardContent >
                <Typography gutterBottom variant="h5">{props.tab.name}</Typography>
            </CardContent>
            <CardMedia component="img" height="140" image={props.tab.imgUrl} />
            <CardContent>
                <Typography variant="body2" color="text.secondary">{props.tab.shortDescription}</Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined">Enter</Button>
                <Button variant="outlined"> Xyi</Button>
                <Button variant="outlined">pizda</Button>
            </CardActions>
        </Card>
        // <div id = {props.id} className={styles.cardStyle}>
        //     <div>{props.tab.name}</div>
        //     <div></div>
        //     <div></div>
        //  <div>Name: {props.tab.name}</div>
        //  <div>Max Person: {props.tab.maxPerson}</div>
        //  <div>Current Person: {props.tab.currentPerson}</div>
        //  <div>Time Stamp: {props.tab.timestamp}</div>
        //  <div>Final Sum: {props.tab.finalSum}</div>
        //  <div>Current Sum: {props.tab.currentSum}</div>
        //  <div>Short Description: {props.tab.shortDescription}</div>
        //  <div>minContributionAmount: {props.tab.minContributionAmount}</div>
        //  <div>Header: {props.tab.header}</div>
        //  <div>ProductUuid: {props.tab.productUuid}</div>
        //  <div>User Creater Uuid: {props.tab.userCreaterUuid}</div>
        //  <div>imgUrl: {props.tab.imgUrl}</div>
        // </div>
    );
};

export default CardProduct;