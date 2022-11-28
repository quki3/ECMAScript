import React from "react";

const Profile = (props) =>
 {
	/* state */
	const [ showDetails, setShowDetails ] = React.useState(true);

	/*render*/
	return (
	 <div className="card" style={{width: "18rem"}}>
		
		<div className="card-body">
			<h5 className="card-title">
				{props.name}
			</h5>
			<p className="card-subtitle">
				{props.title}
			</p>
			<button role="button" onClick={()=>setShowDetails(!showDetails)}
				className="btn btn-primary">
				{showDetails? "Hide Details" : "Display Details"}
			</button>
			
			{
				showDetails
				? (<p className="card-text-details">{props.details}</p>)
				: null
			}
		</div>
	 </div>
	);
  };
export default Profile;
