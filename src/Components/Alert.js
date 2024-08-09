export default function Alert(props){
    return(
        <div style={{height:'50px',marginTop:'60px'}}>
        {props.alert && <div className="alert alert-warning" role="alert">
        <h6>{props.alert.type}: {props.alert.msg}</h6>
        </div>}
        </div>
    )
}