  import React from 'react';
  import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  import PhoneIcon from '@mui/icons-material/Phone';
  import { Rating } from '@mui/material';


  import useStyles from './style.js';

  const PlaceDetails = ({ place, selected, refProp }) => {
    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const classes = useStyles();  


    return (
      <Card elevation={9}>

        <CardMedia
          style={{ height: 380 }}

          // use image if no image exists for an yrestuarent

          image={place.photo ? place.photo.images.large.url : 'https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg'}
          title={place.name}
        />

        <CardContent>

          <Typography gutterBottom variant="h5">{place.name}</Typography>

          <Box display="flex" justifyContent="space-between" my={2}>
            <Rating name="read-only" size=" small"value={Number(place.rating)} readOnly />
            <Typography component="legend"> Rating  , {place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography component="legend">Price</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.price}
            </Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography component="legend" >Ranking</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.ranking}
            </Typography>
          </Box>

          {place?.awards?.map((award) => (
            <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
              <img src={award.images.small} />
              <Typography variant="subtitle2" color="textSecondary">{award.name}</Typography>
            </Box>
          ))}

          {place?.cuisine?.map(({ name }) => (
            <Chip key={name} size="small" label={name} className={classes.chip} />
          ))}

          {place?.address && (
            <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
              <LocationOnIcon />{place.address}
            </Typography>
          )}

          {place?.phone && (
            <Typography variant="body2" color="textSecondary" className={classes.spacing}>
              <PhoneIcon /> {place.phone}
            </Typography>
          )} 

        </CardContent>    

        <CardActions>   
          <Button size="small" color="secondary" onClick={() => window.open(place.web_url ,'_blank')}>
            Trip Advisor
          </Button>
          <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
            Website
          </Button>
        </CardActions>

      </Card> 
    );
  };

  export default PlaceDetails;
