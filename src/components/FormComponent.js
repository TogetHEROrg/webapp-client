import React from 'react'

function FormComponent(props) {
    return(
        <main>
            <form>
                <input
                    name="user"
                    value={props.data.user}
                    onClick={props.handleClick}
                    placeholder="User"
                />
                <br/>
                <input 
                    name="pass"
                    value={props.data.pass}
                    onChange={props.handleClick}
                    placeholder="***********"
                />
                <br/>
                <button>Enviar</button>
            </form>
        </main>
    )
}

export default FormComponent