import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NavBar } from "./Navbar.js";
import { Body } from "./body.js";
import { Footer } from "./footer.js";

// Aquí se unifican los componentes principales para la pagina
export function Home() {
	return (
		<div>
			<NavBar />
			<Body />
			<Footer />
		</div>
	);
}
