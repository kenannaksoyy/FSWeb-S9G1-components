import React from 'react'

export default function Todo(props) {
  const {yapilacak,yapilacaklar,setYapilacaklar, gizle} = props
  
  const handleClick = () => {
      let arr= yapilacaklar.map( y => {
        if(y.id === yapilacak.id ){
          y.tamamlandi=!(y.tamamlandi);
          return y;
        }
        return y;
      });
      
      setYapilacaklar(arr);
    };
    
  
    return (
      
      <div>
        {
          !(gizle && yapilacak.tamamlandi) && 
          <li 
          key={yapilacak.id} 
          onClick={handleClick}>{yapilacak.isim} {yapilacak.tamamlandi && "Ok"}</li>
        }
        
      </div>
    )
}
