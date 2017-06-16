import React, { Component } from 'react';
import './App.css';
import Mid from './Mid-module';
import MidTwo from './Mid-module-two';
import KidFace from './KidFace';
import PDog from './PDog';
import Press from './Press_awards';
import BottomLinks from './BottomLinks';
import Footer from "./Footer";
import Letters from './Letters';

class App extends Component {

                constructor(props){
                  super(props)
                  this.state = {
                    backdrop: 0,
                    padTop: 0,
                    modalVal: 0
                  }
                }


      componentDidMount(){
        let self = this
        setTimeout(function(){
          self.setState({
            backdrop: 1,
            padTop: "10%",
            modalVal: 0
          })
        }, 500)

      }

      startModal(){
        if(this.state.modalVal === 1){
          return this.setState({ modalVal: 0})
          console.log(this.state)
        }
        this.setState({ modalVal: 1})
       console.log(this.state)
      }

  render() {

    let styles = {
      opacity: this.state.backdrop,
      display: "flex",
      justifyContent: "center",
      paddingTop: this.state.padTop
    }
    return (
      <div className="Container">
        <div className="App">

          <div className="hero-img">
             <picture>
                  <img src="images/ROKKAN_WORK_HSUS_PUPPIES_HERO_1600x900_acf_cropped.jpg" alt="hero image" />
             </picture>
             <div className="hero-inner"></div>
             <div className="overlay" style={styles}>
                   <div className="ROKKAN-logo">
                        <a href="http://www.rokkan.com/">  ROK<br/>KAN </a>
                    </div>
             </div>
          </div>


            <Mid />
            <MidTwo  main="the question" text=" How do YOU FIGHT A CULTURE OF CRUELTY WITHOUT MAKING PEOPLE FEEL GUILTY FOR BUYING PUPPIES?"/>
            <KidFace modal={this.startModal.bind(this)} modVal={this.state.modalVal}/>
            <PDog />
            <Press />
            <BottomLinks />
            <Footer />
            <Letters />


        </div>
      </div>

    );
  }
}

export default App;
// https://rokkan.wpengine.com/wp-content/uploads/2017/02/ROKKAN_WORK_HSUS_PUPPIES_HERO_1600x900_acf_cropped.jpg
            // <MidTwo  main="the question" text=" How do YOU FIGHT A CULTURE OF CRUELTY WITHOUT MAKING PEOPLE FEEL GUILTY FOR BUYING PUPPIES?"/>
            // <KidFace modal={this.startModal.bind(this)} modVal={this.state.modalVal}/>
            // <MidTwo main="the answer" text="HOW CAN OUR AUDIENCE REEXAMINE EVERYTHING THEY THINK THEY KNOW ABOUT SCOTCH?"/>
            // <PDog />
            // <Press />
            // <BottomLinks />
            // <Footer />
            // <Letters />



            // tender-library-test.surge.sh
