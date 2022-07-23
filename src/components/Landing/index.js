import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Landing extends Component {



    constructor(props){

        super(props)

        this.state ={ renderbtn:false}
    }

   

    showAnimation(e){
   
       
        document.querySelector(".welcomePage").classList.add("startingImg")
  
        setTimeout(()=>{
            document.querySelector(".welcomePage").classList.remove("startingImg")
            this.setState( {renderbtn:true } )
        },1000)
    }


    showletfAnimation(){
        document.querySelector(".welcomePage").classList.add("leftImg")
    }

    showrightAnimation(){
        document.querySelector(".welcomePage").classList.add("rightImg")
    }

    clearImg(){
        document.querySelector(".welcomePage").classList.remove("leftImg")
        document.querySelector(".welcomePage").classList.remove("rightImg")

    }


    componentDidMount(){
      this.showAnimation();
    }



    render() {



        return (
            <main className='welcomePage' >

                <div className="leftBox">

                {this.state.renderbtn ?  <Link to="signup" className='btn-welcome' onMouseOver={this.showletfAnimation} onMouseOut={this.clearImg}> Inscription </Link> : "" }
                   
                </div>

                <div className="rightBox">
                {this.state.renderbtn ?     <Link to="login" className='btn-welcome'onMouseOver={this.showrightAnimation} onMouseOut={this.clearImg}> Connection </Link> : "" }
                </div>
                
            </main>
        );
    }
}

export default Landing;
