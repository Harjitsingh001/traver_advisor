// import React, {useEffect , useState} from 'react'
// import { CssBaseline ,Grid } from '@mui/material'

// import { getPlacesData } from './api'
// import Header from './components/Header/Header'
// import List from './components/List/List'
// import Map from './components/Map/Map'

// const App = () => {
//       const [places,setPlaces] = useState([]);
//       const [coordinates,setCoordinates] = useState({});
//       const [bounds,setBounds] = useState({});

//  // calling our getPlacesData function from api foler in build 

//  // use another useeffect to  show user location  

//  useEffect(() => { 
//           navigator.geolocation.getCurrentPosition(({coords: {latitude ,longitude} }) => {
//                   setCoordinates({ lat:latitude , lng: longitude})
//           })  
//  },[]);   

// useEffect(() => {
//       getPlacesData(bounds.sw , bounds.ne)
//       .then((data) => {
            
//             setPlaces(data);
//       })
// },[coordinates ,bounds]);

//   return (
//    <>
//             <CssBaseline/>
//             <Header/>
//             <Grid container spacing={3} style={{width : " 100%"}}>
//                 <Grid item xs={12} md={4}> 
//                 {/* //pass places as props */}
//                       <List places={places}/>
//                 </Grid>
//                 <Grid item xs={12} md={8}> 
//                       <Map
//                            setCoordinates={setCoordinates}
//                            setBounds={setBounds}
//                            coordinates={coordinates}
//                       />
//                 </Grid>
//             </Grid>
//    </>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'
import { CssBaseline, Grid } from '@mui/material'

import { getPlacesData } from './api'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({ sw: {}, ne: {} });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });  
    })
  }, []);

  useEffect(() => {
    if (Object.keys(bounds.sw).length !== 0 && Object.keys(bounds.ne).length !== 0) {
      getPlacesData(bounds.sw, bounds.ne)
        .then((data) => {
          setPlaces(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [coordinates, bounds]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: " 100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App
