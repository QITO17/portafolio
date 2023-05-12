import React from 'react'
import vf from './img/sas.png'
const Contact = () => {
    const respon = (e) => {
        e.preventDefault()
        alert('Muchas Gracias Por Comunicarte')
    }
  return (
  
    <section className='conctat'>
       
        <div className='sas'>            
        </div>

        <div>
            <form className='formulario'>
                
                <div>
                    <div>
                        <label className='motive' htmlFor="">Nombre Completo</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label className='motive' htmlFor="">Email</label>
                        <input type="email" />
                    </div>

                    <div>
                        <label className='motive' htmlFor="">Telefono</label>
                        <input type="tel" />
                    </div>

                    <div>
                        <label className='motive' htmlFor="">Fecha</label>
                        <input type="date" />
                    </div>

                    <div>
                        <button onClick={respon}>Enviar</button>
                    </div>
                </div>  

                <div className='vfa'>
                    <img src={vf} alt="" />    
                </div>              
            </form>
        </div>
     </section>
  
    )
}

export default Contact