import React from "react";

const Popup = (props) => {
    // let displayPopup = true;
    const [displayPopup, setDisplayPopup] = React.useState(true)
    const handleClick = (message) =>{
        console.log(message);
        setDisplayPopup(!displayPopup);
        console.log(displayPopup)
    }
    return (
    <>
      <button onClick={()=>handleClick("jour")}>Popup</button>
      <button onClick={()=>handleClick("nuit")}>PopOp</button>
      {
        // condition classique
        // if(displayPopup){

        // } else {
            // }
        //pour une ternaire, condition ? true : false
        displayPopup ? <div>Popup trop cool</div> :  <></>
      }
    </>
  );
};

export default Popup;
