import React, { Component } from 'react'
import Sinav from './Sinav'

export default class Sorular2 extends Component {
   constructor(props){
        super(props)
        this.state = {
            SoruListesi : [
                "Istanbul Turkiyenin Baskentidir",
                "Trabzon Karadeniz Bolgesindedir",
                "ALmanya Turkiyenin Sinir Komsusudur",
                "Londra Fransanin Baskentidir",
             ],
             sayac: 0
            

        }

   }

   artir(){
       this.setState({
           sayac : this.state.sayac + 1
       })
   }
    
    
    


    render() {
       
        let mesaj
        if (this.state.sayac < 4) {
            mesaj = <div><p>{this.state.SoruListesi[this.state.sayac]}</p></div>
            
        }

        return (
           
            <div>
                
                {mesaj}
              
                
                
                    
    
            </div>
        )
    }
}
