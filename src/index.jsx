import React from 'react'
import ReactDOM from 'react-dom'


const user = {

    nome: 'aris',
    idade: 19
}


const elemento = (
    <div>
        <h1>Olá Mundo, bem vindo {user.nome} <br></br>
             eu sei que vc tem {user.idade} anos
        </h1>
    </div>
)




function tick(){

       
       const nome = 'Ariston'
       const element = (

                
          <div>
           
                 <h1>
                    Salve {nome}
                 </h1>
                  
                  <h2>
                        Agora é  {new Date().toLocaleTimeString()} .
                  </h2>

                   

          </div>

                

       )

 
       ReactDOM.render(element, document.getElementById('root'))



}



setInterval(tick,1000);









ReactDOM.render(
    elemento, document.getElementById("root")
)