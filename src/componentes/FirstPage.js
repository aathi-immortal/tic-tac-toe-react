import { Link } from "react-router-dom"


export function FirstPage()
{
    return (
        <div className="first-page-body d-flex justify-content-center align-items-center">
        <div className="container">
            <div className="row   d-flex ">
                <div className="col-md-12 btn-container">

{/*                 
                    <a href="/friends"><button class="  custom-btn btn-11 ">play with fridens<div class="dot"></div></button></a>
                <a href="/online"><button class="  custom-btn btn-11 ">play in online<div class="dot"></div></button></a>      */}
                    <Link to="/friends">    <button class="  custom-btn btn-11 ">play with fridens<div class="dot"></div></button> </Link>
                        <Link to="/online">    <button class="  custom-btn btn-11 ">play in online<div class="dot"></div></button> </Link>
                </div>
            </div>        
            </div>
        </div>
        
        
    )
}