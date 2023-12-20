

const Button = (props) =>
{
    return(
             <button onClick={()=>props.btFun(props.Btn) }> {props.Btn} </button>
    )
}
export default Button;