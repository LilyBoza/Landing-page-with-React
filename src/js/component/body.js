import React from "react";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";

// Aquí se colocan el body de la pagina que deseamos crear, compuesto de
// los componentes jumbotron y cards
export function Body() {
	return (
		<div className="container">
			<Jumbotron />
			<div className="d-flex flex-row">
				{/* dentro de las card van el valor del prop que se llama en el componente Card */}
				<Card image="https://www.livelikeitstheweekend.com/wp-content/uploads/2016/11/Colca-Canyon-Condors-1-of-1.jpg" />
				<Card image="https://www.livelikeitstheweekend.com/wp-content/uploads/2016/11/Salinas-de-Maras-Peru-1-of-1.jpg" />
				<Card image="https://artofcreativephotography.com/wp-content/uploads/2019/03/David-Koester-Start-In-Die-Landschaftsfotografie-I.jpg" />
				<Card image="https://digital-photography-school.com/wp-content/uploads/flickr/205125227_3f160763a0_o.jpg" />
			</div>
		</div>
	);
}
