import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary'



export const getPlacesData = async (sw, ne) => {
  try {
    //request
    //pass url and option object in get method 
    const { data: { data } } = await axios.get(URL,
      {

        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,


        },
        headers: {
          'X-RapidAPI-Key': '71b8804263msh6d001b83e763162p1bdd66jsn1f44c168e0c0',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      });

    return data;
  } catch (error) {
    console.log(error);
  }
}


