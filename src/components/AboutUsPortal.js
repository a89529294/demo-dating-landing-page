// import React, { useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Button } from '@material-ui/core';
// import {
//   aboutUsPortalTitle,
//   aboutUsPortalContent,
//   aboutUsPortalButtonText,
// } from '../static/aboutUsContent';
// import visionImage from '../assets/vision.jpg';
// import { Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
// import { useInView } from 'react-intersection-observer';
// import { motion, useAnimation } from 'framer-motion';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     ...theme.aboutUsPortalStyle,
//     backgroundColor: theme.palette.componentBgColor.bgOne,
//     position: 'relative',
//   },
//   vision: {
//     width: '100%',
//   },
//   title: {
//     ...theme.typography.homePagePortalTitle,
//   },
//   button: {
//     position: 'absolute',
//     bottom: '1rem',
//     right: '1rem',
//   },
//   descriptionGrid: {
//     position: 'relative',
//     [theme.breakpoints.down('md')]: {
//       textAlign: 'center',
//     },
//   },
//   desc: {
//     ...theme.typography.homePagePortalDesc,
//   },
//   smallScreenButton: {},
// }));

// export default function AboutUsPortal() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const controls = useAnimation();
//   const { ref, inView } = useInView({
//     threshold: 0.5,
//   });
//   const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//   const bigScreen = useMediaQuery(theme.breakpoints.up('md'));

//   const imgVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { duration: 2 },
//     },
//   };

//   const textVariants = {
//     hidden: { x: '100%' },
//     visible: {
//       x: 0,
//       transition: {
//         duration: 2,
//       },
//     },
//   };

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//     if (!inView) {
//       controls.start('hidden');
//     }
//   }, [controls, inView]);

//   return (
//     <Grid
//       className={classes.root}
//       container
//       justify="center"
//       spacing={2}
//       ref={ref}
//       style={{ width: '100%', overflowX: 'hidden' }}
//     >
//       <Grid item xs={8} md={3}>
//         <motion.img
//           initial="hidden"
//           animate={controls}
//           variants={imgVariants}
//           className={classes.vision}
//           alt="vision"
//           src={visionImage}
//         ></motion.img>
//       </Grid>
//       <Grid
//         item
//         xs={10}
//         md={9}
//         container
//         direction="column"
//         justify="center"
//         className={classes.descriptionGrid}
//       >
//         <motion.div initial="hidden" animate={controls} variants={textVariants}>
//           <Typography className={classes.title}>
//             {aboutUsPortalTitle}
//           </Typography>
//         </motion.div>

//         <motion.div
//           animate={{ x: inView ? 0 : '100%' }}
//           transition={{ duration: 1 }}
//         >
//           <Typography className={classes.desc}>
//             {aboutUsPortalContent}
//           </Typography>
//         </motion.div>
//         {bigScreen && (
//           <Button variant="outlined" className={classes.button}>
//             {aboutUsPortalButtonText}
//           </Button>
//         )}
//       </Grid>
//       {smallScreen && (
//         <Grid xs={10} justify="flex-end" item container>
//           <Button variant="outlined">{aboutUsPortalButtonText}</Button>
//         </Grid>
//       )}
//     </Grid>
//   );
// }
