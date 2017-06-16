import React from 'react'

const Press = (props) => {


  let styles = {
    backgroundColor: "rgb(247, 247, 247)",
    opacity: "1",
    padding: "0 50px"
  }
  let heading = {
    textAlign: "center"
  }

  return(

          <div className="Mid-Press " style={styles}>
                <div className="Mid-Two">
                    <div className="inner-press">
                        <div className="awards">
                           <h3 style={heading}> PRESS AWARDS</h3>
                           <div className="tight-row" style={{justifyContent: "space-between"}}>
                             <div className="ex-small-35" >
                                  <img src="images/MarCom_Logo_v2.png" alt="Marcom logo" id="firstIMG" style={{width: "100%"}}/>
                             </div>
                              <div className="ex-small-35" >
                                  <img src="images/Shorty_Logo.png" alt="Shorty Logo" id="secondIMG" style={{width: "100%"}}/>
                             </div>
                            </div>
                        </div>
                    </div>
                 </div>
          </div>

    )

}






export default Press


