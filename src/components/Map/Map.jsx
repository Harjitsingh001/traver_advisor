import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocationOnOutlined } from '@mui/icons-material';
import { Rating } from '@mui/material';


import useStyles from './styles';

const Map = ({setCoordinates,setBounds, coordinates ,places}) => {
  const isDesktop = useMediaQuery('(min-width:600px)');
  const classes = useStyles(); // Corrected typo in the class name
 
 
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBjC4cS3b4YbcY3lAqZDYjFwLt2BdgzfbY' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]} 
        option={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => { }}
      >
        {places?.map((place ,i ) => (
          <div
          className={classes.markerContainer}
          lat={Number(place.latitude)}
          lng ={Number(place.longitude)}
          key={i}

          >
            {
              !isDesktop ? (
                   <LocationOnOutlined color='primary' fontSize='large'/>
              ) : (
                <Paper elevation={3} className={classes.paper} >
                  <Typography className={classes.typography} variant='subtitle2' gutterBottom>
                    {place.name}
                  </Typography>

                 <img 
                 className={classes.pointer}
                 src={place.photo ? place.photo.images.large.url : 'https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg'}
                 alt={place.name}  
                 /> 

                 <Rating name= "readOnly" size='small' value ={Number(place.rating)} readOnly/> 
                </Paper>
              )
            }

          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
