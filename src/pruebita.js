import {useState, useEffect} from 'react'
function Prueba(){
    const [text, setText] = useState('');
    const [length, setLength] = useState(0);

    useEffect(() => {
        setLength(text.length); // aqui nosotros le damos la logica algo asi como {text}.length( como en el uso de hashtables en el (index))
    }, [text]);

    return(
        <div>
            <input
                placeholder='Digite o nome'
                onChange={(e)=>{
                    setText(e.target.value);
                    setLength(length + 1 );
                }}/>
            <p>cantidad de letras en tu nombre: {text.length}</p>
        </div>

    )
}

export {Prueba}