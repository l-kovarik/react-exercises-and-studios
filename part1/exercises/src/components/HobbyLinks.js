import React from 'react';
import classes from './MovieList.module.css';

class HobbyLinks extends React.Component {
   render() {

   const hobbyLinks = ["https://mostateparks.com/activity/canoeing-kayaking", "https://www.nps.gov/subjects/rivers/missouri.htm"];
   return (
   <div>
      <h3 className = {classes.hobbyHeading}>Links Related to Kayaking</h3>

      <p className={classes.hobbyLinks}><a href ={hobbyLinks[0]}>Missouri State Parks: Canoeing and Kayaking</a></p>
            <p className={classes.hobbyLinks}><a href ={hobbyLinks[1]}>National Park Service: Missouri Rivers</a></p>
   </div>
   
   )

}
}

export default HobbyLinks;