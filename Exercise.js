/*
Este es un pequeño ejercicio donde indicamos la hora local, usando jsx
<script type="text/babel" data-presets="env,react">
// Acá creamos la funcion donde le decimos que nos retorne un string de la hora local    
function getTime() {
        return (new Date()).toLocaleTimeString()
    }
//Acá se crea el componente
    // Creates a functional component
    const App = () => {
        return (
            <div>
                <div>Current Time:</div>
                //Aquí referenciamos la funcion gerTime y que la muestre en un h3s
                <h3>{getTime()}</h3>
            </div>
        );
    }

    // Renders the App component into a div with id 'root'
    ReactDOM.render(<App />, document.querySelector('#root'));
</script>

<!--The App component above will be rendered into this-->
<div id="root"></div>


<!--No need to change anything after this line!-->
<!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
*/