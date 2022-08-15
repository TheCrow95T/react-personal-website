import { Link } from "react-router-dom";

let toggleClose = () =>{
    let link = document.getElementById("link");
    link.style.transform= "translateX(100%)";
}

let toggleOpen = () =>{
    let link = document.getElementById("link");
    link.style.transform= "translateX(0%)";
}

let Navbar = () =>{
    

    return (
        <div className="navbar">
            <div className="logo"><h3>TheCrow95T</h3></div>
            <div className="link" id="link">
                <i class="fa-solid fa-xmark nav-icon nav-close" onClick={()=>toggleClose()}></i>
                <Link to="/">Home</Link>
                <Link to="about">About me</Link>
                <Link to="experience">Experience</Link>
                <Link to="contact">Contact me</Link>
            </div>
            <i class="fa-solid fa-bars nav-icon nav-open" onClick={()=>toggleOpen()}></i>
        </div>
    );
}

export default Navbar;