export function Login(props)

{
    function loginSubmited()
    {
        console.log("submited");
    }
    return(
        <div>
            <div className="header-container">
                <div className="title">
                    <h1>Login</h1>

                </div>
                <div className="break-line"></div>
            </div>
            <div className="inputs">
                
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

            </div>
            <div className="forger-password">
                <div>forgot password <span>Click here</span></div>
            </div>
            <div className="submit">
                <div className="sign-in" ><button onClick={props.signUp}>Sign Up</button></div>
                <div className="login"><button onClick={loginSubmited}>Login</button></div> 
            </div>
        </div>
    )
}