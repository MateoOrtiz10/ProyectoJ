import React from "react";
import Grid from "@material-ui/core/Grid";
import { IconContext } from "react-icons";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const NotFoundPage = () => {
  return (
    <Grid container direction="column" justify="center" className="full">
      <div className="highlight">
        <Grid item container xs={12} justify="center" alignItems="center">
          <Grid item>
            <IconContext.Provider value={{ size: "8em" }}>
              <BsFillExclamationDiamondFill />
            </IconContext.Provider>
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography>
              <h4>404 Pagina no encontrada</h4>
            </Typography>
          </Grid>
          <Link component={RouterLink} to="/" color="inhetir" aria-label="menu">
            Ir a Principal
          </Link>
        </Grid>
      </div>
    </Grid>
  );
};

export default NotFoundPage;
