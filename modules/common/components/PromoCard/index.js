import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 38px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

const PromoCard = ({ promo }) => {
    const classes = useStyles()

    const prettyPromoLabel = (prm) => {
        let res;

        switch (prm) {
            case 'CASHBACK':
                res = 'Cashback'
                break
            case 'FREESHIPPING':
                res = 'Free Shipping'
                break
            default:
                res = 'Invalid Label'
        } 

        return res
    } 

    const breakPoints = promo.length > 1 ? 6 : 12

    // HANYA AKAN MERENDER DATA PROMO YANG VALID, JIKA PROMO TIDAK ADA MAKA TIDAK AKAN MENJALANKAN PROMO KOMPONEN
    // {/* //MISAL JIKA ADA 2 PROMO MAKA AKAN LOOPING 2 KALI, JIKA 1 MAKA LOOPING 1 KALI */}
    // {/* classes jika komponen classes dapat override semua styles default yang dibawa material UI, jika className hanya mengganti 1 atau 2 bagian componen */}                                
    if (promo.length > 0) {
        return (
            <Grid container spacing={1}>
                {
                    promo.map(prm => {
                        return (
                            <Grid item xs={breakPoints} sm={breakPoints}>
                                <Paper variant="outlined" classes={{ root: classes.root }}> 
                                    <Typography>
                                        {prettyPromoLabel(prm)}
                                    </Typography>
                                </Paper>
                            </Grid>
                        )
                    }) 
                }
            </Grid>
        )
    } else {
        return null
    }
}

PromoCard.propTypes = {
    promo: PropTypes.array.isRequired
}

export default PromoCard