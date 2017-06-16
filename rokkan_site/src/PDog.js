import React from 'react'

const KidFace = () => {


  let styles = {
    backgroundColor: "rgb(245, 245, 245)",
    opacity: "1"
  }
  let imgg = {
    position: "relative",
    bottom: "0",
    width: "40%",
    float: "left",
    marginRight: "5%"
  }

  return(

          <div className="Mid-Dog" style={styles} >
               <div className="Mid-Dog-inner">
                  <p> Last year, two million adorable puppies were purchased online and in pet stores. Almost every one of those dogs came with a dark secret: they were products of inhumane puppy mills operated by breeders with no regard for animal welfare.</p>
                  <p> As its Creative and Media Agency of Record (AOR), we launched the next iteration of our campaign in HSUS’s continued fight against puppy mills. Titled ‘Don’t Buy Into Puppy Mills,’ this latest work contrasts the innocently imagined origins of puppies with the hidden reality that is the still-thriving puppy mill industry.</p>
                  <p> To create awareness around this very serious issue, we gathered a group of children’s imaginative responses to the question: “Where do puppies come from?” Their optimistic and creative answers formed the basis of our animated film.</p>
                  <p> Consumers have become hyper-aware of where their food and clothes come from, but what about their pets? It’s pretty hard to believe that most dog purchasers don’t know that they’re buying from puppy mills. Puppy love blinds us from the truth. By asking this one question, we hope to spur people to think more critically about where puppies really come from.</p>
                  <p> The campaign focuses on two of the most deceptive outlets for puppy mills: puppy-selling websites and pet stores. These venues don’t allow the buyer a chance to see where the puppy was raised before making a purchase, often helping to conceal inhumane conditions. </p>
                  <p> <img src="images/puppy-puppy.jpg" alt="puupy dog" style={imgg}/> </p>
                  <p style={{marginBottom: "0"}}> <em> “Throughout the organization’s long history, we have mounted a number of campaigns to raise awareness of the horror of puppy mills,” said John Goodwin, senior director of the stop puppy mills campaign at The HSUS. “We’ve had great success in many of our previous efforts, but the fact remains that mills are still operating thanks to support from well-intentioned but unsuspecting buyers. This latest campaign aims to chip away at the puppy mill facade and stress that where your puppy comes from matters.”&nbsp; </em></p>
               </div>
          </div>

    )

}






export default KidFace



