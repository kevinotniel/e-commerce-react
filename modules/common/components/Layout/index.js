import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import MobileHeader from '../../../mobile/components/Header'
// import MobileHeader from '@mobile/components/Header'

const useStyles = makeStyles({
    content: {
        marginTop: 74
    }
})

const Layout = ({ children }) => {
    const classes = useStyles()

    return ( 
        <React.Fragment>
            <MobileHeader />
            <div className={classes.content}>
                {children}
            </div>
        </React.Fragment>
    )   
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node), //KUMPULAN DARI SEKIAN BANYAK NODE/REACT KOMPONEN
        PropTypes.node // ATAU HANYAN 1 REACT KOMPONEN
    ])
}

export default Layout;