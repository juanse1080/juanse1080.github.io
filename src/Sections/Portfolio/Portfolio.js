import React, { useState } from "react";

// Import Material UI components
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Grow from "@material-ui/core/Grow";
import Box from "@material-ui/core/Box";

const images = [
   {
      img: "https://material-ui.com/static/images/grid-list/honey.jpg",
      title: "honey",
      author: "Author",
      featured: false,
      kind: [0, 1],
   },
   {
      img: "https://material-ui.com/static/images/grid-list/breakfast.jpg",
      title: "breakfast",
      author: "Author",
      featured: false,
      kind: [0, 2],
   },
   {
      img: "https://material-ui.com/static/images/grid-list/burgers.jpg",
      title: "burgers",
      author: "Author",
      featured: false,
      kind: [0, 3],
   },
   {
      img: "https://material-ui.com/static/images/grid-list/camera.jpg",
      title: "camera",
      author: "Author",
      featured: false,
      kind: [0, 4],
   },
   {
      img: "https://material-ui.com/static/images/grid-list/hats.jpg",
      title: "hats",
      author: "Author",
      featured: false,
      kind: [0, 1],
   },
   {
      img: "https://material-ui.com/static/images/grid-list/morning.jpg",
      title: "morning",
      author: "Author",
      featured: true,
      kind: [0, 2],
   },
   {
      img: "https://material-ui.com/static/images/grid-list/mushroom.jpg",
      title: "mushroom",
      author: "Author",
      featured: true,
      kind: [0, 2],
   },
   {
      img: "https://material-ui.com/static/images/grid-list/olive.jpg",
      title: "olive",
      author: "Author",
      featured: false,
      kind: [0, 4],
   },
   {
      img: "https://material-ui.com/static/images/grid-list/plant.jpg",
      title: "plant",
      author: "Author",
      featured: false,
      kind: [0, 1],
   },
   {
      img: "https://material-ui.com/static/images/grid-list/star.jpg",
      title: "star",
      author: "Author",
      featured: false,
      kind: [0, 2],
   },
   {
      img: "https://material-ui.com/static/images/grid-list/vegetables.jpg",
      title: "vegetables",
      author: "Author",
      featured: false,
      kind: [0, 3],
   },
];

const kinds = {
   0: "Todas",
   1: "PHP",
   2: "Python",
   3: "React JS",
   4: "Django",
};

const useStyles = makeStyles(theme => ({
   root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      width: theme.shape.viewWidth,
      backgroundColor: theme.palette.background.paper,
   },
   gridList: {
      // width: theme.shape.viewWidth,
      // height: 450,
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      // transform: "translateZ(0)",
   },
   titleBar: {
      background:
         "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
         "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
   },
   icon: {
      color: "white",
   },
}));

const Portfolio = ({ theme, ...other }) => {
   const classes = useStyles();
   const [kind, setKind] = useState(0);

   return (
      <div className={classes.root}>
         <GridList
            cellHeight={200}
            spacing={0}
            className={classes.gridList}
            cols={3}
         >
            {images.map(tile => (
               <Grow in={tile.kind.includes(kind)} key={tile.img}>
                  <GridListTile>
                     <img src={tile.img} alt={tile.title} />
                     <GridListTileBar
                        title={tile.title}
                        titlePosition="top"
                        actionIcon={
                           <IconButton
                              aria-label={`star ${tile.title}`}
                              className={classes.icon}
                           >
                              <StarBorderIcon />
                           </IconButton>
                        }
                        actionPosition="left"
                        className={classes.titleBar}
                     />
                  </GridListTile>
               </Grow>
            ))}
         </GridList>
      </div>
   );
};

export default Portfolio;
