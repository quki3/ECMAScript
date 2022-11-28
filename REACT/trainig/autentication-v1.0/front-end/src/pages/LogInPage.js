import {useState} from "react";
import {useHistory} form "react-router-dom"

export const LogInPage = () => {
	const [emailValue,setEmailValue]=setState('');
	const [passsword, setpassword] = setState('');

	const history = useHistory();
	return (
		<div className="content-container">
		 <h1>Log In</h1>
		 <input
			value={emailValue}
			onChange={e=>setEmailValue(e.terget.value)};
			placeholder="alkdshf@gmail" />
		 <input 
			type="password"
			placeholder="password" />
		 <Button
			disable={!emailValue || !password}
			onClick={onLoginClicked}
			>Log In </Button>
		 <Button onClick={()=>history.push('/forgot-password')}>Forgot you password</Button>
		 <Button onClick={()=>hisstory.push('/signup')}>Dont have an account? Sing up</Button>
		</div>
	)
};
