import React, { Component } from 'react';


class Footer extends Component {
        constructor(props){
          super(props)
          this.images = ["images/case-study-hero.jpg", "images/GLEN_HERO_pour.jpg", "images/GLEN_HERO_glass.jpg"]
              this.state = {

              }

        }


        render(){

          let styles = {
              position: "relative",
              zIndex: 100,
              backgroundColor: "#222",
              opacity: this.state.opacity,
              transition: "opacity .5s ease"
            }

          return(
            <div className="Footer" style={styles}>
                <div className="footer-top">

                    <div className="footer-nav">
                        <ul className="theUL">
                          <li className="pages">
                            <a href="http://www.rokkan.com/work/"  rel="noopener noreferrer" target="_blank"> work </a>
                           </li>
                            <li className="pages">
                            <a href="http://www.rokkan.com/news/"  rel="noopener noreferrer" target="_blank"> news </a>
                           </li>
                            <li className="pages">
                            <a href="http://www.rokkan.com/about/"  rel="noopener noreferrer" target="_blank"> about </a>
                           </li>
                            <li className="pages">
                            <a href="http://www.rokkan.com/contact/"  rel="noopener noreferrer" target="_blank"> contact </a>
                           </li>
                            <li className="pages">
                            <a href="http://www.rokkan.com/careers/"  rel="noopener noreferrer" target="_blank"> careers </a>
                           </li>
                        </ul>
                     </div>


                    <div className="footer-social">
                        <nav>
                          <a href="https://www.facebook.com/rokkanmedia/"  rel="noopener noreferrer" target="_blank"> <i className="fa fa-facebook-square" aria-hidden="true" style={{fontSize: "1.5em"}}></i></a>
                          <a href="https://www.instagram.com/rokkan/"  rel="noopener noreferrer" target="_blank"> <i className="fa fa-instagram" aria-hidden="true" style={{fontSize: "1.5em"}}></i></a>
                          <a href="https://twitter.com/ROKKAN"  rel="noopener noreferrer" target="_blank"> <i className="fa fa-twitter" aria-hidden="true" style={{fontSize: "1.5em"}}></i></a>
                        </nav>
                    </div>
                    <div className="ROKKAN-logo">
                        <a href="http://www.rokkan.com/" style={{fontWeight: "600", fontSize: "1.6em"}}>  ROK<br/>KAN </a>
                    </div>
                </div>

           </div>
            )
        }


}


export default Footer;





