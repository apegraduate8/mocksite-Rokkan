import React, { Component } from 'react';
import './App.css';
class Letters extends Component {

                constructor(props){
                  super(props)
                  this.place = 200;
                  this.state = {
                    backdrop: 0,
                    padTop: 0,
                    modalVal: 0,
                    place: 0
                  }
                }


      componentDidMount(){
        let self = this
            window.addEventListener("scroll", function(e){

                self.place = window.pageYOffset
                console.log(e, window.pageYOffset)
                console.log("this.place ", self.place)
                self.setState({place: self.place})
            })
      }



  render() {


    let R = this.state.place / 4
    let O = this.state.place / 3.5
    let K = this.state.place / 3.1
    console.log(this.place, "R >> ", R)
    return (
      <div className="Bontainer">
          <span className="letters" style={{ transform: "translateY("+R+"px)", position: "fixed"}}> R </span>
          <span className="letters" style={{transform: "translateY("+O+"px)", position: "fixed"}}> O </span>
          <span className="letters" style={{transform: "translateY("+K+"px)", position: "fixed"}}> K </span>

           <span className="letters" style={{transform: "translateY("+R+"px)", position: "fixed", right: "20px"}}> K </span>
          <span className="letters" style={{transform: "translateY("+O+"px)", position: "fixed", right: "20px"}}> A</span>
          <span className="letters" style={{transform: "translateY("+K+"px)", position: "fixed", right: "20px"}}> N </span>
      </div>

    );
  }
}

export default Letters;



