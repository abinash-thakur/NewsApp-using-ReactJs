import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbra() {
    const [myid, updateid] = useState(1);

    const Clicking = (event) => {
        document.getElementById(myid).classList.remove("active");
        updateid(event.target.id);
        document.getElementById(event.target.id).classList.add("active");
    }

    return (
        <div>

            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsAbinash</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link active" id='1' onClick={(Clicking)} aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" id="2" onClick={Clicking} to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" id="3" onClick={Clicking} to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" id="4" onClick={Clicking} to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" id="5" onClick={Clicking} to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" id="6" onClick={Clicking} to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" id="7" onClick={Clicking} to="/technology">Technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
