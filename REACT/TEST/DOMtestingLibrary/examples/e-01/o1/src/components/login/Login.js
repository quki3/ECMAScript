import * as React from "react";
const formReducer = require("./contents/formReducer/formReducer.js");
const initialState = require ("./contents/initialState/initialState.js");
const Profile = require ("./contents/cards/cardProfile/Profile.js");
const {handleSubmit} = require("./contents/handle/handleSumit/handleSumit.js");

const Login = () => {

	const [state,dispatch]= React.useReducer(formReducer,initialState);

return (
	<div>
	<div className='d-flex justify-content-center mt-5 login'>
	
        <div className='login-header'>
          	<h3>Sign In</h3>
        </div>
	<div className='login-form'>
        <form onSubmit={handleSubmit} data-testid="login-form">
            	<div className='input-group form-group'>
              		<label htmlFor='username' className='input-group'>
                		Username
              		</label>
			<div className='input-group-prepend'>
                		<span className='input-group-text rounded-sm'></span>
              		</div>
              		<input
                	value={state.username}
                	onChange={(e) =>
                  	dispatch({ type: 'USERNAME', data: e.target.value })
                	}
                	name='username'
                	id='username'
                	type='text'
                	className='form-control'
                	placeholder='username'
              		/>
        	</div>
        	<div className='input-group form-group'>
              		<label htmlFor='password' className='input-group'>
                		Password
              		</label>
              		<div className='input-group-prepend'>
               		<span className='input-group-text rounded-sm'></span>
              		</div>
              		<input
                	value={state.password}
                	onChange={(e) =>
                  	dispatch({ type: 'PASSWORD', data: e.target.value })
                	}
                	name='password'
                	id='password'
                	type='password'
                	className='form-control'
                	placeholder='password'
              		/>
            	</div>
            	<div>
              		<input
                	onChange={(e) =>
                  	dispatch({ type: 'REMEMBER_ME', data: e.target.checked })
                	}
                	checked={state.rememberMe}
                	name='rememberMe'
                	type='checkbox'
              		/>
              		<span className='ml-2'>Remember Me</span>
            	</div>
            	<div className='form-group mt-2'>
              		<input
			role='button'
                	disabled={!state.username || !state.password ? true : false}
                	type='submit'
                	value='Login'
                	className='btn btn-primary w-100'
              		/>
            	</div>
        </form>
        </div>
</div>
</div>
  )
};

export default Login;
