
BASE GENERAL : OUTPUT ES LO QUE SE REENDERISA, WHERE ES DONDE SE HARA


import React from "react"; 
import ReactDOM from "react-dom"; 


let output = <span>James is 12 years old</span>;

const myDiv = document.querySelector("#myDiv");



                //what  //where
ReactDOM.render(output, myDiv);




xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


LLAMANDO UN VALOR de una variable, objeto o array CON {}  EN EL OUTPUT

import React from "react";
import ReactDOM from "react-dom";

let age = "12";
let name = "John";

let output = (
	<span>
		{name} is {age} years old
	</span>
);
ReactDOM.render(output, document.querySelector("#myDiv"));



xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


LLAMANDO DE UN DATO DE UN OBJETO con {}


import React from "react";
import ReactDOM from "react-dom";

const customer = {
	first_name: "Bob",
	last_name: "Dylan"
};

const output = <div>
	<h1>My name is {customer.first_name}</h1>
    <h2>My last name is {customer.last_name}</h2>
</div>;

//               what     where
ReactDOM.render(output, document.querySelector("#myDiv"));


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

de un OBJETO CON MULTIPLES DATOS , LLAMAMOS SUS DATOS ------- className es FUNDAMENTAL



import React from "react"; // Main React.js library
import ReactDOM from "react-dom"; // We use ReactDOM to render into the DOM

const data = {
	image: "../../.learn/assets/Dylan.png?raw=true",
	cardTitle: "Bob Dylan",
	cardDescription:
		"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan",
		label: "Go to wikipedia",
	},
};

// Modify the 'content' variable below to display the desired bootstrap card
let content = (
	<div className="card m-5">
		<img alt="Card image cap" src={data.image} className="card-img-top" />
		<div className="card-body">
			<h5 className="card-title">{data.cardTitle}</h5>
			<p className="card-text">{data.cardDescription}</p>
			<a href={data.button.url} className="btn btn-primary">
				{data.button.label}
			</a>
		</div>
	</div>
);

ReactDOM.render(content, document.querySelector("#myDiv"));


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

pegando UNA LISTA DENTRO DE UNA CONST, ubicandole dentro de content que tiene UL.


import React from "react"; 
import ReactDOM from "react-dom"; 


const navlinkItems = [
    <li className="nav-item">
    <a className="nav-link" href="#">Link to google.com</a>
  </li>,
  <li className="nav-item">
    <a className="nav-link" href="#">Link to facebook.com</a>
  </li>,
  <li className="nav-item">
    <a className="nav-link" href="#">Link to amazon.com</a>
  </li>,
];

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));



xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

haciendo un MAPEO DE UN ARRAY , el single


import React from "react";
import ReactDOM from "react-dom";

const animals = ["Horse", "Turtle", "Elephant", "Monkey"];


const animalsInHTML = animals.map((singleAnimal, index) => {
	return <li key={index}>{singleAnimal}</li>;
});



const render = <ul>{animalsInHTML}</ul>  VERSION ALT 

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));

ReactDOM.render(
render 
,
document.querySelector("#myDiv")); VERSION ALT 

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


haciendo un mapeo de un ARRAY DE OBJETOS

import React from "react";
import ReactDOM from "react-dom";

const animals = [{ label: "Horse" }, { label: "Turtle" }, { label: "Elephant" }, { label: "Monkey" }];


const animalsInHTML = animals.map((singleAnimal, index) => {
	return <li key={index}>{singleAnimal.label}</li>;
});

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


creando un MAPEO de planetas de un ARRAY


import React from "react";
import ReactDOM from "react-dom";

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];


const planetas = planets.map((singleplanet, index) => {
	return <li key={index} className="list-group-item">{singleplanet}</li>;
});

const content = <ul className="list-group m-5">{planetas}</ul>; ------------- aqui se ve !!! 

ReactDOM.render(content, document.querySelector("#myDiv"));


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

exportando UN print de I love react con una FUNSION FLECHA

import React from "react"; 
import ReactDOM from "react-dom";

export const PrintHello = () => {
	return <h1>I Love React</h1>;
};

//              what           where
ReactDOM.render(PrintHello(), document.querySelector("#myDiv"));


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

LLAMANDO A LA FUNCION EXPORTADA DE MODO B </FLECHA> no con PrintHello()

import React from "react";
import ReactDOM from "react-dom";

export const PrintHello = () => {
	return <h1>I Love React</h1>;
};

// Change the syntax of the first parameter to make it <PrintHello /> instead of PrintHello()
ReactDOM.render(<PrintHello/>, document.querySelector("#myDiv"));


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


exportando una card de BOOTRSTRAP con el mismo metood anterior  con una FUNSION

import React from "react";
import ReactDOM from "react-dom";

export const BootstrapCard = () => {
	return (
		<div className="card m-5">
			<img className="card-img-top" src="../../.learn/assets/Dylan.png?raw=true" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">Bob Dylan</h5>
				<p className="card-text">
					Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an
					influential figure in popular music and culture for more than five decades.
				</p>
				<a href="https://en.wikipedia.org/wiki/Bob_Dylan" className="btn btn-primary">
					Go to wikipedia
				</a>
			</div>
		</div>
	);
};

// Change the syntax of the first parameter to make it <PrintHello /> instead of PrintHello()
ReactDOM.render(<BootstrapCard/>, document.querySelector("#myDiv"));


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


generando la card con propTypes que es basicamente escribir lo que ira dentro del card pero con props en el render! 


import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

const BootstrapCard = (props) => {
	return (
		<div className="card m-5">
			<img
				className="card-img-top"
				src={props.imageUrl}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonUrl} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};

BootstrapCard.propTypes = {
	title: PropTypes.string,
	imageUrl: PropTypes.string,
	description: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonLabel: PropTypes.string,
};

ReactDOM.render(
<BootstrapCard
title={"Bob Dylan"}
imageUrl={"https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"}
description={"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."}
buttonUrl={"https://en.wikipedia.org/wiki/Bob_Dylan"}
buttonLabel={"Go to wikipedia"}
/>
,
document.getElementById("myDiv")
);


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


creando lo mismo con propTypes  RECUERDA EL RETURN, aqui debes hacer que el prop cuadre con el const y el render.


import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
	return (
		<div className="jumbotron m-5">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a className="btn btn-primary btn-lg" href={props.buttonURL} role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};

Jumbotron.propTypes = {

	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string,
};

ReactDOM.render(
	<Jumbotron
		title="Welcome to react"
		description="React is the most popular rendering library in the world"
		buttonLabel="Go to the official website"
		buttonURL="https://reactjs.org/"
	/>,

	document.querySelector("#myDiv")
);



xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

creando lo mismo con proptypes , pero algo distinto, 
dijate que alert dice en 3 PaymentResponse, en el const, en el prop y en el render. 
DIFERENCIA CUAL ES LA FUNCION Y QUE ES LO QUE SE ESCRIBIRA EN EL RENDER COMO ITEM.


import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = (props) => {
	return (
		<div className="alert alert-danger" role="alert">
			{props.text}
		</div>
	);
};

Alert.propTypes = {
	text: PropTypes.string,
};

ReactDOM.render(<Alert
	 text="OMG! Something really bad has happened!" 
	 />,
	  document.querySelector("#myDiv"));


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx



CREACION DE PROPS CON VALORES BOLEANOS 

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = (props) => {
	// Add the condition inside this function
	if (props.show === false) {
		return null;
	} else {
		return (
			<div className="alert alert-primary" role="alert">
				{props.text}
			</div>
		);
	}
};

Alert.propTypes = {
	show: PropTypes.bool,
	text: PropTypes.string,
};

// Here is where the <Alert /> component is being used, you don't have to edit this part
// But it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert show={true} text="This is a primary alert - check it out!" />
		<Alert show={false} text="This alert shouldn't appear" />
	</div>,
	document.querySelector("#myDiv")
);


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

pendiente import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = (props) => {
	// Your component here
	const colorClasses = {
		red: "alert-danger",
		yellow: "alert-warning",
	};

	return (
		<div className={`alert ${colorClasses[props.color]}`} role="alert">
			{props.text}
		</div>
	);
};

Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
};

// Here is where the <Alert /> component is being used, you don't have to edit this part
// But it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happened!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="yellow" />
	</div>,
	document.querySelector("#myDiv")
);


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

AGREGANDO UNA ALERTA DE SUCCESS  EN ESTE CASO LOS DATOS EN PROP VIENEN DE ARRIBA Y <ABAJO></ABAJO>

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// Add the green inside this function
const Alert = (props) => {
	const colorClasses = {
		red: "alert-danger",
		yellow: "alert-warning",
		green: "alert-success",
	};

	if (colorClasses[props.color] === undefined) alert(`The color ${props.color} is not in the possible list of colors`);

	return (
		<div className={`alert ${colorClasses[props.color]}`} role="alert">
			{props.text}
		</div>
	);
};
Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
};

// Here is where the <Alert /> component is being used, you don't have to edit this part
// But it helps you understand what properties is the component using
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happened!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="yellow" />
		<Alert text="I am supposed to be green" color="green" />
	</div>,
	document.querySelector("#myDiv")
);


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

agrefando estilos CSS con los objetos  MY SUPERSTYLES

import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// Add the styles here
const mySuperStyles = {
	fontSize: "16px",
	background: "black",
	border: "1px solid yellow",
};

const Badge = (props) => {
	return (
		<button style={mySuperStyles} type="button" className="btn btn-primary">
			{props.label}
			<span className="badge badge-light">{props.number}</span>
		</button>
	);
};

Badge.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string,
};

ReactDOM.render(<Badge label="Notifications" number="2" />, document.querySelector("#myDiv"));


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

agregando estylos css por seprarado a un ELEMENTO COMO UN BOTON CON 2 COSAS, EL FONDO Y SUS LETRAS


import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const buttonStyles = {
	background: "yellow",
	color: "black",
	border: "none",
};

const badgeStyles = {
	background: "red",
	borderRadius: "50%",
};

const Badge = (props) => {
	return (
		<button style={buttonStyles} type="button" className="btn btn-primary">
			{props.label}
			<span style={badgeStyles} className="badge badge-light">
				{props.number}
			</span>
		</button>
	);
};

Badge.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string,
};

ReactDOM.render(<Badge label="Alerts" number="2" />, document.querySelector("#myDiv"));


xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


agregando un evento de on click pero en REACT , para ver en la consola i was clicked! 

import React from "react";
import ReactDOM from "react-dom";

const clickHandler = e => {
	console.log("I was clicked!", e);
};

const Alert = () => {
	return (
		<button className="btn btn-success btn-lg" onClick={clickHandler}>
			Click Me
		</button>
	);
};

// You don't have to edit anything below
ReactDOM.render(<Alert />, document.querySelector("#myDiv"));
