import React from 'react';
import WelcomeScreen from '../Components/WelcomeScreen/WelcomeScreen';
import Grid from '@material-ui/core/Grid';
import {IconContext} from 'react-icons';
import {WiDaySunny} from 'react-icons/wi'
import Typography from '@material-ui/core/Typography';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';

const WelcomePage = () => {
    return (
        <WelcomeScreen>
           <Grid container direction ="column" justify="center" className="full">
                <div className="highlight">
                    <Grid item container xs={12} justify="center" alignItems="center">
                        <Grid item>
                            <IconContext.Provider value={{size:'8em'}}>
                                <WiDaySunny/>
                            </IconContext.Provider>
                        </Grid> 
                        <Grid item container direction="colum" justify="center" alignItems="center">
                            <Typography>
                                JavesApp
                            </Typography>                            
                        </Grid>  
                        <Link component={RouterLink} to ="/main" color="inhetir" aria-label="menu">
                                ACCEDER
                        </Link>                     
                    </Grid>
                </div>
            </Grid>             
        </WelcomeScreen>
    )
}

export default WelcomePage
