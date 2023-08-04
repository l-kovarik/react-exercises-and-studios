import React from 'react';
import styles from './Description.module.css';

function recipeAuthor() {
    let authorLink = "https://www.gimmesomeoven.com/";
    let authorPhoto = "https://www.gimmesomeoven.com/images/about-new-round.jpg"
    let authorName = "Ali Martin";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Ali Martin" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Gimme Some Oven</a> 
           </div>
        </div>
     );
} 


class RecipeDescription extends React.Component {
    render() {
      
       return (
        <div> 
        <div>
           <h1>Creamy Tortellini and Sausage Soup</h1>
           <p>This Creamy Tortellini and Sausage Soup is quick and easy to make, full of great flavor, and so rich and creamy and comforting.</p>
        </div>
        <recipeAuthor />
     </div>
       );
    }
 }

export default RecipeDescription