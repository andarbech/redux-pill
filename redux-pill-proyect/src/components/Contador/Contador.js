import { useDispatch, useSelector } from "react-redux";
import {sumar,restar,sumar5,restar5,reset}from "../../redux/actions/contadorActions"


const Contador = () => {
    const state = useSelector(state => state);
    const dispatch= useDispatch()
    return (<>
        <div>
            <h2>Contador redux</h2>
            <nav>
                <button onClick={()=>dispatch(sumar()) }>+1</button>
                <button onClick={()=>dispatch(restar()) }>-1</button>
                <button onClick={()=>dispatch(sumar5())}>+5</button>
                <button onClick={()=>dispatch(restar5())}>-5</button>
                <button onClick={()=>dispatch(reset())}>reset</button>
            </nav>
            <h3>{ state.contador}</h3>
        </div>
    </> );
}
 
export default Contador;

