import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import AvatarGroup from '@mui/material/AvatarGroup';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Cards from "./allCards";

const useStyles = makeStyles({
  btn_styles: {
    marginLeft: 10,
    marginTop: 10,
    display: "flex",
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});


const App = () => {
  const classes = useStyles();
  const cardSx = {
    "&:hover": {
      marginTop: -2,
    },
  };

  return (
    <>
      <Container align="center">
        <Typography
          variant="h4"
          align="center"
          fontFamily="revert-layer"
          color="black
"
          gutterBottom
        >
          Leaderboard
        </Typography>
{/* ------------------------card component --------------------------------- */}

        <Cards />
        
{/* ------------------------card component --------------------------------- */}

        <Grid className={classes.btn_styles}>
          <Button variant="contained" startIcon={<AddIcon />}>
            Register
          </Button>
          <Button variant="outlined" startIcon={<ArrowUpwardIcon />}>
            Top Gainers
          </Button>
        </Grid>
      </Container>
      <Container>
        <Typography
          variant="h6"

          align="center"
          sx={{ marginTop: '20px', fontFamily: 'sans-serif' }}
          fontFamily="revert-layer"
          color="black
        "
          gutterBottom
        >
          All Users
        </Typography>
        <AvatarGroup total={12}>
          <Avatar alt="Remy Sharp" src="src/assets/profile.png" />
          <Avatar alt="Travis Howard" src="src/assets/profile.png" />
          <Avatar alt="Agnes Walker" src="src/assets/profile.png" />

        </AvatarGroup>

      </Container>
    </>
  );
};

export default App;