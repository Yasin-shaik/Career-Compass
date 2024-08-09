import './style.css'
import pic from './Pictures/riki.jpg'
export default function TextForm()
{
    const myStyle={
        width:'2000px',
        backgroundImage: `url(${pic})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        margin:'50px'
    }
    return(
        <>
            <div className="background-gradient">
                <div className="login-card d-flex">
                    <div style={myStyle}>
                    </div>
                    <div style={{marginTop:'50px',marginRight: '40px'}}>
                        <h2>Welcome Back!</h2>
                        <form id="login-form" action="/login" method="POST">
                            <div className="form-group">
                                <label for="username">Username or Email</label>
                                <input type="text" id="username" name="username" required/>
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" required/>
                            </div>
                            <button type="submit" className="login-button">Login</button>
                            <div className="additional-links">
                                <a href="/forgot-password">Forgot Password?</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="/signup">Don't have an account? Sign up</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}