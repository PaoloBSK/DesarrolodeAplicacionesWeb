import React, {useState} from 'react';
import { Addcounter } from './componentes/Addcounter';
import { Minuscounter } from './componentes/Minuscounter';
//import { FirstComponents } from './componentes/FirstComponents'
import { ShowCounter } from './componentes/ShowCounter';
import './styles.css'
//const myVariable = 'This is a var'
export const Main = () => {
    //Can only  return one item
    const [number, setNumber] = useState(0);
    const onAdd = () =>{
      setNumber( number + 1);
      console.log('I added one');
    }
    const onMinus = () =>{
      setNumber( number - 1);
      console.log('I subtracted one');
    }
    // const useState = (value) =>{
    //  return [value, ( ) => {}]
    //}
    
  return (
    <>

        <ShowCounter number={number}
        />
        <Addcounter onAddPress={onAdd}/>
      
        <Minuscounter onMinusPress={onMinus}/>
        {/* <FirstComponents
         title="Mi titulo"
         //subtitle = "Hola"
         /> */}
    </>
  );
};
