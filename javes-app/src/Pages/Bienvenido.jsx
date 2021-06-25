import React from 'react';
import WelcomeScreen from '../Components/WelcomeScreen/WelcomeScreen';
import Grid from '@material-ui/core/Grid';
import {IconContext} from 'react-icons';
import {AiTwotoneUsb} from 'react-icons/ai'
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
                                <AiTwotoneUsb/>
                            </IconContext.Provider>
                        </Grid> 
                        <Grid item container direction="colum" justify="center" alignItems="center">
                            <Typography>
                               <h4>JavesApp</h4> 
                            </Typography>                            
                        </Grid>  
                        <Link  component={RouterLink} to ="/main" color="inhetir" className="link" aria-label="menu">
                                ACCEDER
                        </Link>                     
                    </Grid>
                </div>
            </Grid>             
        </WelcomeScreen>
    )
}

export default WelcomePage
