import React, {useEffect, useState} from 'react'
const SECURITY_CODE= 'paradigma'

function UseState({name}){
    const [state,setState] = useState({
        value:'',
        error:false,
        loading:false,
        confirm:false,
        deleted:false,
    });
    console.log(state)
    useEffect(() => {
        console.log('Empezando el efecto')
        if(!!state.loading){
            setTimeout(()=>{
                console.log('Haciendo la validation')
                if(state.value === SECURITY_CODE){
                    setState({
                        ...state,
                        error:false,
                        loading:false,
                        confirm:true,
                    });

                }else{
                    setTimeout(()=>{
                        setState({
                            ...state,
                            loading:false,
                            error:true,
                        })
                    },2000)
                }
                console.log('Terminando la validation')
            },3000)
        }
        console.log('Terminando el efecto ');
    },[state.loading]);

  if(!state.deleted && !state.confirm){
      return(
          <div>
              <h2>Eliminar {name}</h2>
              <p>por favor escribe el codigo de seguridad</p>
              {state.error && (
                  <p>Error: el codigo es incorrecto, vuelve a intentarlo</p>
              )}
              {state.loading && (
                  <p>Validando...</p>
              )}
              {state.confirm && (
                  <p>Codigo correcto, puedes entrar</p>
              )}

              <input
                  placeholder='codigo de seguridad'
                  value={state.value}
                  onChange={(event)=>{
                      setState({
                          ...state, //copia el estado actual NO el valor incial
                          error:false,//si no pongo est e react solo reconoce les estado actual y error se queda en true para que cambie en cada onchage debo declaralo de forma explicita aqui y asi con cualueier evento que necesito que cambie
                          confirm:false,
                          value:event.target.value,
                      })}}/>

              <button
                  onClick={ ()=>{
                      setState({
                          ...state,
                          error:false,
                          loading:true,
                          confirm:false
                      })
                  } }>Comprobar </button>
          </div>
      )
  }else if(!!state.confirm && !state.deleted){
      return (
          <React.Fragment>
              <p>Pedimos confirmacion .¿estas Seguro?</p>
              <button
                  onClick = {()=>{
                      setState({
                          ...state,
                          confirm:true,
                          deleted:true,
                      })
                  }}
              > si,eliminar
              </button>
              <button
              onClick = {()=>{
                  setState({
                      ...state,
                      confirm:false,
                  })
              }}
              >no, me arrepenti </button>
          </React.Fragment>
      )
  }else{
      return(
          <React.Fragment>
              <p>Eliminado con exito</p>
              <button
                  onClick = {()=>{
                      setState({
                          ...state,
                          confirm:false,
                          deleted:false,
                          value:'',
                      })
                  }}
              >Resetear, volver atras </button>
          </React.Fragment>
      )
  }

};

export {UseState};
