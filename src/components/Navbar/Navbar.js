import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">VSA WEB</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="http://localhost:3000/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Get">Marklabel</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Manage User</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Draw">Draw</a>
            </li>
            </ul>
        </div>
      </nav>
  );
}
