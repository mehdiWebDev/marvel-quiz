import React, { Component } from 'react';

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

                {this.state.renderbtn ?  <button className='btn-welcome' onMouseOver={this.showletfAnimation} onMouseOut={this.clearImg}> Inscription </button> : "" }
                   
                </div>

                <div className="rightBox">
                {this.state.renderbtn ?     <button className='btn-welcome'onMouseOver={this.showrightAnimation} onMouseOut={this.clearImg}> Connection </button> : "" }
                </div>
                
            </main>
        );
    }
}

export default Landing;
