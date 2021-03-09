import React, { Component } from 'react'

class Sinav extends Component {

    state = {
        sayac: 0,
        puan: 0,
        dogrucevap: 0,
        yanliscevap: 0,
        sonuc: "",
        
       
    }

    puanArtir(){
        this.setState({
            puan: this.state.puan + 10         
        })
    }

   
 //*******************************************************************/
    answerD(){
        
        if (this.props.question[this.state.sayac].cevap === "True" ) {

            this.dogruArtir()
            alert("Correct Answer")
           
        } 
        else  {
            this.yanlisArtir()
            alert("Wrong Answer!!!  Be Careful Next time...")
        }
    }

    answerY(){

        console.log("Deger", this.props.question[this.state.sayac].cevap)
       
        if (this.props.question[this.state.sayac].cevap === "False" ) {

            this.dogruArtir()
            alert("Correct Answer")
        } 
        else  {
            this.yanlisArtir()
            alert("Wrong Answer!!!  Be Careful Next time...")
        }
    }

    //*******************************************************************/
    
     dogruArtir(){
         this.setState({
             dogrucevap: this.state.dogrucevap + 1
         })
     }

     yanlisArtir(){
        this.setState({
            yanliscevap: this.state.yanliscevap + 1
        })
     }

    sonrakiSoru(){
        this.setState({
            sayac: this.state.sayac + 1
            
        })
    }

    


   
    render() {
        let mesaj
        let mesaj2
        if (this.state.sayac < this.props.question.length) {
        mesaj =<div> <h1>DOGRU YA DA YANLIS DIYE CEVAPLAYINIZ...</h1>
                <br/>
                <p>SORU : {this.props.question[this.state.sayac].soru}</p>
              
                <button style={{border:"solid 3px green", height:"40px",width:"120px", fontSize:"22px", color:"brown"}} onClick={()=>this.answerD()}>True</button>
                <button style={{border:"solid 3px red", height:"40px",width:"120px",fontSize:"22px",  color:"brown"}}onClick={()=>this.answerY()}>False</button>
                <button style={{border:"solid 3px blue", height:"40px",width:"160px", fontSize:"22px", color:"brown"}}onClick={()=>this.sonrakiSoru()}>Next Question</button>
                
                {/* <p>Dogru Cevap Sayisi--{this.state.dogrucevap}</p>
                <p>Yanlis Cevap Sayisi--{this.state.yanliscevap}</p>
                <p>Toplam Puan--{this.state.dogrucevap * 10}</p> */}
                        
        </div>
        } else  {
        mesaj= <div><h1>"SINAV BITTI!!!!"</h1>
                <p>Dogru Cevap Sayisi--{this.state.dogrucevap}</p>
                <p>Yanlis Cevap Sayisi--{this.state.yanliscevap}</p>
                <p>Toplam Puan--{this.state.dogrucevap * 10}</p>
                    
        </div> }
        
       
        //   if (this.state.dogrucevap * 10 >= 50) {
        //       mesaj2 = <div><p>SONUC BASARILI</p></div>

        //   }else{mesaj2=<div><p>SONUC BASARISIZ</p></div>}

        
        return(

           
            <div>
                {mesaj}


                {mesaj2}
                
            </div>

            
        )
        }
    }


export default Sinav