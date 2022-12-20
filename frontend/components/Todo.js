import React from 'react'

export default function Todo(props) {
  const {yapilacak,yapilacaklar,setYapilacaklar, gizle} = props
  
  const handleClick = () => {
    setYapilacaklar(
      yapilacaklar.map((y) => {
          if (y.id === yapilacak.id) return { ...y, tamamlandi: !(y.tamamlandi) };
          return y;
        })
      );
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
