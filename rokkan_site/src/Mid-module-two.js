import React from 'react'

const MidTwo = (props) => {


  let styles = {
    backgroundColor: "rgb(247, 247, 247)",
    opacity: "1"
  }

  return(

          <div className="Mid-Two" style={styles}>
               <div className="inner-midtwo">
                      <h5> {props.main}</h5>
                      <p>
                        {props.text}
                      </p>
               </div>

          </div>

    )

}






export default MidTwo

