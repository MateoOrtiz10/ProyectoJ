import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import {IconContext} from 'react-icons';
import { ImHome } from "react-icons/im";
import {Link as LinkRouter} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


const AppFrame = ({children}) => {
    return (
        <Grid container justify="center">
            <AppBar position="static">                
                <Toolbar variant="dense">
                    <IconButton color="inherit" aria-label="menu">
                        <Link 
                            to='/main'
                            color="inherit"
                            arial-label="menu"
                            component={LinkRouter}
                        >
                            <IconContext.Provider value={{size:"2em"}}>
                               <ImHome/>
                            </IconContext.Provider>    
                        </Link>
                    </IconButton>
                    <Typography color="inherit" variant="h6">
                      JavesApp
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid item xs={12}>
                    {children}
                </Grid>
        </Grid>
    )
}


export default AppFrame