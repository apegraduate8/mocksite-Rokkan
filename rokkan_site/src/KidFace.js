import React from 'react'

const KidFace = (props) => {
    console.log(props)


   const changeDisplay = () => {
            props.modal()
   }
   const closeDisplay = () => {
            props.modal()
   }

  let styles = {
    backgroundColor: "rgb(255, 255, 255)",
    opacity: "1"
  }

  let modal = {
    zIndex: 1,
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "opacity 1s ease",
    opacity: props.modVal
  }

  let close = {
    position: "absolute",
    right: "10%",
    color: "#b6a86f",
    cursor: "pointer"
  }

let roll = props.modVal === 1 ? "none" : "inline";
  return(

          <div className="Mid-Three" style={styles} >
            <picture>
            <img src="images/ROKKAN_WORK_HSUS_PUPPIES_1600x900_kidFace.jpg" alt="kid face" />
            </picture>
            <span className="play_btn" style={{zIndex: "10", display: roll}}> <img src="images/play_btn.png" alt="play button" onClick={() => {changeDisplay()} }/> </span>
              <div className="modal" style={modal}>
                    <div className="center-modal" >
                        <iframe title="promo video" width="100%" height="100%" src="https://www.youtube.com/embed/ydhrQNE-QE0"> </iframe>
                    </div>
                    <div className="close" style={close} onClick={() => {closeDisplay()} }> X </div>
              </div>
          </div>

    )

}






export default KidFace


