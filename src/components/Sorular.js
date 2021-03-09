import React from 'react'
import Sinav from './Sinav'

function Sorular(){
    const SoruListesi = [
        {id: 1, soru:"Istanbul Turkiyenin Baskentidir", cevap:"False"},
        {id: 2, soru:"Trabzon Karadeniz Bolgesindedir", cevap:"True"},
        {id: 3, soru:"ALmanya Turkiyenin Sinir Komsusudur", cevap:"False"},
        {id: 4, soru:"Londra Fransanin Baskentidir", cevap:"False"},
        {id: 5, soru:"Canakkalenin plaka Kodu 17 dir", cevap:"True"},
        {id: 6, soru:"Ankaranin plaka kodu 45 tir", cevap:"False"},
        {id: 7, soru:"Gaziantep Ic Anadolu Bolgesindedir", cevap:"False"},
        {id: 8, soru:"Erzurum Marmara Bolgesindedir", cevap:"False"},
        {id: 9, soru:"Aydin Ege Bolgesindedir", cevap:"True"},
        {id: 10, soru:"Antalya Akdeniz Bolgesindedir", cevap:"True"},


     ]
    
    

 return(
     <div>       
        {          
         <Sinav
          key = {SoruListesi.id}
         question = {SoruListesi}/>    
         }
      </div>
        
 )   
}
export default Sorular