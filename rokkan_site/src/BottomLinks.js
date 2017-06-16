import React, { Component } from 'react';


class Bottom extends Component {
        constructor(props){
          super(props)
          this.images = ["images/case-study-hero.jpg", "images/GLEN_HERO_pour.jpg", "images/GLEN_HERO_glass.jpg"]
              this.state = {
                link: this.images[0],
                count: 0,
                opacity: 0
              }

        }

        change(){
          let r = this.state.count + 1
          console.log(r)
          if(r === this.images.length-1){r = 0}
          this.setState({
           count: r,
           opacity: 1

          })

      }
        render(){

          let styles = {
              backgroundColor: "rgb(245, 245, 245)",
              opacity: this.state.opacity,
              transition: "opacity .5s ease",
              position: "relative"
            }
            let imgg = {
              width: "inherit",

            }
          return(
            <div className="Bottom" style={styles} onMouseEnter={this.change.bind(this)} >
               <div className="Bottom-links" style={{width: "100%"}}>
                 <a href="http://www.dontbuyintopuppymills.com/"  rel="noopener noreferrer" target="_blank" style={imgg}>
                  <img src={this.images[this.state.count]} alt="women on a hammock" style={imgg}/>
                 </a>
               </div>
                <div className="brick" style={{width: "100%", backgroundColor: "#b6a86f", position: "absolute", bottom: "0"}}> </div>
           </div>
            )
        }


}


export default Bottom;




