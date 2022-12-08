import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const SimpleCounter = () => {
	return (
		<div className="text-center">
			<div className="BigCounter">
				<div className="Calender">
				   <i className="fa-solid fa-clock"></i>
				</div>
				<div className="four">0</div>
				<div className="three">0</div>
				<div className="two">0</div>
				<div className="one">0</div>
			</div>
		</div>
	);
};

export default SimpleCounter ;
