import React,{useState} from 'react'
import Form from "./Form";
import TodoList from './TodoList';

export default function App () {

  const [yapilacaklar, setYapilacaklar] = useState([
    {
      isim: 'Yemekleri Pişir',
      id: 1528817077286,
      tamamlandi: false
    },
    {
      isim: 'Bake Cookies',
      id: 1528817084358,
      tamamlandi: false
    }
  ]);

  const [gizle, setGizle] = useState(false);

    return (
      <div>
        <TodoList yapilacaklar={yapilacaklar} setYapilacaklar={setYapilacaklar} gizle={gizle}/>
        <Form yapilacaklar={yapilacaklar} setYapilacaklar={setYapilacaklar} />
        <button value="gizle" onClick={()=>setGizle(!gizle)}>
          {
            !(gizle) ? "Yapilanlari Gizle" : "Yapilanlari Goster"
          }
        </button>
      </div>
    )
}
