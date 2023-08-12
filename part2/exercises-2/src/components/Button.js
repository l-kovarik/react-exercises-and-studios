import './styles.css';





function Button() {
const onLearnMore = () => {
 alert("Splish Splash MFers");
};
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;