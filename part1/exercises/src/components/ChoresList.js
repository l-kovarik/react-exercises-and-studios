import React from 'react';
import classes from './ChoresList.module.css';


export default function ChoresList () {
   let choreTitle = "Chores for Today";
   let chore1 = "Dishes";
   let chore2 = "Laundry";
   let chore3 = "Grocery Shopping";

   return (
      <div>
         <h3 className={classes.choresHeading}>{choreTitle}</h3>
         <ul>
         <li className={classes.choresText}>{chore1}</li>
         <li className={classes.choresText}>{chore2}</li>
         <li className={classes.choresText}>{chore3}</li>
         </ul>
      </div>      
   );
}