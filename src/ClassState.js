import React from 'react'
import {Loading} from './Loading';


const SECURITY_CODE= 'paradigma';

class ClassState extends React.Component{ // es la clase que nosa da react para crear componentes, todos los componentes de clase heredan de react.component para poder usar estado, props y metodos del ciclo de vida
    constructor(props){
        super(props); // necesario para usar this.props

        this.state={
            value: '',
            error: false,
            loading: false, // se agrega dentro del objeto state //todo lo que se //quiera pasar como estado
            confirm:false,
        }
    }

    componentDidUpdate(){
        console.log('actualizacion')

        if(!!this.state.loading){ // la doble negacion lo devuelve a su estado orignal osea false, esto prptege mi estado
            setTimeout(()=>{
                console.log('Haciendo la validacion')
                if(SECURITY_CODE === this.state.value) {
                    this.setState({error: false, loading:false, confirm:true})

                }else{
                    this.setState({loading:false, error:true})
                }

                console.log('Terminando la validacion')
            },3000)
        }
    };
    render(){
//const {error,loading, value} = this.state para solo usar error, loading o value
        return(

            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>por favor escribe el codigo de seguridad</p>
                {(this.state.error && !this.state.loading) && (
                    <p>Error: el codigo es incorrecto</p>
                )}
                {this.state.confirm && (
                    <p>Codigo correcto, bienvenid@</p>
                )}
                {this.state.loading && (
                   <Loading/>
                )}
                <input
                    value={this.state.value}
                    placeholder='codigo de seguridad'
                    onChange={(event) => {
                        this.setState({value: event.target.value, confirm:false})
                    }}
                />
                <button
                onClick={()=>
                    this.setState( ({loading: true}))
                }>Comprobar </button>
            </div>
        )
    }
}

export {ClassState}