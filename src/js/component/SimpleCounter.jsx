import React from "react";
import ReactDOM from "react-dom";1
import propTypes from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function SimpleCounter (props) {
	return (
		<div className="text-center">
			<div className="BigCounter">
				<div className="Calender">
				<i class="fa-solid fa-clock"></i>
				</div>
				<div className='four'>{props.digitFour % 10}</div>
                <div className='three'>{props.digitThree % 10}</div>
                <div className='two'>{props.digitTwo % 10}</div>
                <div className='one'>{props.digitOne % 10}</div>

			</div>
		</div>
	);
};
SimpleCounter.propTypes = {
	digitFour: propTypes.number,
	digitThree: propTypes.number,
	digitTwo: propTypes.number,
	digitOne: propTypes.number,
	
  };
  let counter = 0;
setInterval(function() {
  const four = Math.floor(counter / 10000);
  const three = Math.floor(counter / 1000);
  const two = Math.floor(counter / 100);
  const one = Math.floor(counter / 10);

  
  
  

  counter ++;

  ReactDOM.render(
    <SimpleCounter
    digitOne={one}
    digitTwo={two}
    digitThree={three}
    digitFour={four}
    
/>,
document.querySelector("#app")

  )
}, 100);

export default SimpleCounter ;
