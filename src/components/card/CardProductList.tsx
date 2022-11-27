import React, { useEffect, useState } from 'react';
import { getTabsShortList, TabsShort } from '../../request/tabs';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CardProduct from './CardProduct';
//@ts-ignore
import styles from "./CardProduct.module.scss"
import { Container, Grid, LinearProgress } from '@mui/material';
import { useFetching } from '../hooks/useFetching';


const CardProductList = () => {
    const [x, setX] = useState({} as TabsShort[]);
    const [fetching, isLoad, _] = useFetching(async () => {
        const res = await getTabsShortList<TabsShort[]>()
        setX(res)
    })
    useEffect(() => {
        //@ts-ignore
        fetching()
    }, [])


    if (!x.length) {
        return (
            <div>
                NOT TABS
            </div>
        )
    }

    return (
        <Container className={styles.cardGrid}>
            {isLoad ? <LinearProgress /> : null}
            <Grid container spacing={4} >

                {x.map((tab, index) =>
                    <Grid item={true} xs={9} sm={7} md={5} lg={3}  >
                        <CardProduct tab={tab} id={String(index)} />
                    </Grid>
                )}
            </Grid>
        </Container>
    );
};

export default CardProductList;