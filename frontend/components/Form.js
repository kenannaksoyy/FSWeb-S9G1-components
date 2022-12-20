import React,{useState} from 'react';

export default function Form(props) {
  const {yapilacaklar, setYapilacaklar } = props
  const [yeni, setYeni] = useState("");

  const handleSubmit = ( e ) => {
    e.preventDefault();
    setYapilacaklar([
      ...yapilacaklar,
      {
        isim: yeni,
        id: Date.now(),
        tamamlandi: false
      }
    ]);
    setYeni("");
  };

  const handleChange = ( e ) => {
    setYeni(e.target.value);
  };

    return (
      <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name='yeni' value={yeni} placeholder='Yapilcak Girin' onChange={handleChange}/>
            <input type="submit" value="Yapilacak Ekle" disabled= {yeni.length===0 && true}/>
        </form>
      </div>
    )
}
