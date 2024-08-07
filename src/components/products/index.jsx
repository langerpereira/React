
import { useState } from 'react';
import './style.css';

const initialState = false;

function Productlist({name, dummyItem}){
    const [flag, setflag] = useState(initialState)

    function handleToggleText(){
        setflag(!flag)
    }

    return (
        <div>
            <h3 className='title'> Ecommerse</h3>
            <button onClick={handleToggleText}>Toggle text</button>
            {
                flag ? (
                    <h4>{name}</h4>
                ):(
                    <h4>Hello!!!</h4>
                )
            }

            <h4>Name is {name}</h4>
            <ul>
                {
                    dummyItem.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Productlist