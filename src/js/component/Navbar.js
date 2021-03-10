import React from "react";

//aqí se crea el componente Navbar de bootstrap V4
export function NavBar() {
	return (
		<div>
			<nav className="navbar navbar-dark bg-dark">
				<div className="d-flex justify-content-start">
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
				</div>
				<div className="d-flex justify-content-end">
					<div>
						<a className="navbar-brand" href="#">
							Home
						</a>
					</div>
					<div>
						<a className="nav-link" href="#">
							About
						</a>
					</div>
					<div>
						<a className="nav-link" href="#">
							Services
						</a>
					</div>
					<div>
						<a className="nav-link" href="#">
							Contact
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}
