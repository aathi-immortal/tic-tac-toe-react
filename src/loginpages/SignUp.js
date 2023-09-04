export function SignUp(props)
{
    function signSubmit()
    {
        console.log("signSUbmit");
    }
    return(
        <div>
        <div className="header-container">
            <div className="title">
                <h1>Sign up</h1>

            </div>
            <div className="break-line"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <div className="name">
                <label>name:</label>
                <input type="text"/>
                </div>
            </div>
            <div className="input">
                <div className="email">
                <label>email:</label>
                <input type="email"/>
                </div>
            </div>
            <div className="input">
                <div className="password">
                <label>password:</label>
                <input type="password"/>
                </div>
            </div>
            <div className="input">
                <div className="confirm-password">
                <label>confirmpassword:</label>
                <input type="password"/>
                </div>
            </div>
        </div>
        
        <div className="submit">
            <div className="sign in"><button onClick={signSubmit}>Sign Up</button></div>
            <div className="login"><button onClick={props.login}>login</button></div>
        </div>
    </div>
    )
}