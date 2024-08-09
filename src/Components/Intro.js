import Alert from './Alert.js'
export default function Intro(){
    const myStyle={
        textAlign: 'justify'
    }
    const btnStyle={
        textDecoration: 'none'
    }
    const handleClick=()=>{
        setTimeout(()=>{
            <Alert msg="Button is clicked"></Alert>
        },1500)
    }
    return(
        <div class="cbox">
        <div class="box">
            <h3 style={myStyle}>Are you a recruiter looking for skilled developers?</h3>
            <br></br>
            <button className="btn btn-outline-primary" onClick={handleClick}>Existing recruiter - Sign In</button>
            <br></br>
            <br></br>
            <button className="btn btn-outline-primary">New recruiter - Sign Up</button>
        </div>
        <div class="box">
            <h3 style={myStyle}>Are you a skilled developer looking for a high-paying job ?</h3>
            <br></br>
            <button className="btn btn-outline-primary"><a style={btnStyle} href="/">Existing developer - Sign In</a></button>
            <br></br>
            <br></br>
            <button className="btn btn-outline-primary">New developer - Sign Up</button>
        </div>
        </div>
    );
}