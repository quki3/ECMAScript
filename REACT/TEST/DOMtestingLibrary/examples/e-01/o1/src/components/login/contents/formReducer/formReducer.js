
const formReducer = (state,action)=>{
	switch (action.type){
		case "USERNAME" : {
			return { ...state,username:action.data};
		}
		case "PASSWORD": {
			return { ...state,password:action.data};
		}
		case "REMEMBER_ME":{
			return { ...state,password:action.data};
		}
		default :
			return state;
	}
}

module.exports = formReducer;
