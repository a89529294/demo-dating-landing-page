// import { Grid, Typography, Grow, Slide, Button } from '@material-ui/core';
// import React, { useRef } from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// import locationImage from '../assets/location.png';
// import { address, title, buttonText } from '../static/locationContent';
// import useOnScreen from '../hooks/useOnScreen';

// const animationLength = 1000;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     ...theme.aboutUsPortalStyle,
//     backgroundColor: theme.palette.componentBgColor.bgOne,
//   },
//   locationImage: {
//     width: '100%',
//   },
//   title: {
//     ...theme.typography.homePagePortalTitle,
//   },
//   descriptionGrid: {
//     position: 'relative',
//   },
//   button: {
//     position: 'absolute',
//     bottom: '1rem',
//     right: '1rem',
//   },
//   desc: {
//     ...theme.typography.homePagePortalDesc,
//   },
// }));

// export default function LocationPortal() {
//   const classes = useStyles();
//   const ref = useRef();
//   const isVisible = useOnScreen(ref, 0.3);

//   return (
//     <Grid
//       className={classes.root}
//       container
//       justify="center"
//       spacing={2}
//       ref={ref}
//     >
//       <Grid lg={3} item>
//         <Grow in={isVisible} timeout={animationLength}>
//           <img
//             alt="vision"
//             src={locationImage}
//             className={classes.locationImage}
//           />
//         </Grow>
//       </Grid>
//       <Grid
//         item
//         lg={9}
//         container
//         direction="column"
//         justify="center"
//         className={classes.descriptionGrid}
//       >
//         <Slide
//           direction="left"
//           in={isVisible}
//           timeout={animationLength}
//           mountOnEnter
//           unmountOnExit
//         >
//           <Typography>
//             <span className={classes.title}>{title}</span> <br />
//             <span className={classes.desc}>{address}</span>
//           </Typography>
//         </Slide>
//         <Button variant="outlined" className={classes.button}>
//           {buttonText}
//         </Button>
//       </Grid>
//     </Grid>
//   );
// }
