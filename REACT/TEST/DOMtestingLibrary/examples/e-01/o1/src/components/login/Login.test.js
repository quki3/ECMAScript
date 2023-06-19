import {render, screen, fireEvent} from '@testing-library/react' // (or /dom, /vue, ...)
import Login from "./Login.js";
describe('<Login/>',()=>{
	test('should show login form', () => {
  		render(<Login />)
  		const input = screen.getByLabelText('Username');
  		// Events and assertions...
	})
	test('showld have a buttom called login', ()=>{
		render(<Login />)
		const button = screen.getByRole('button',{name:'Login'});
		expect(button).toBeTruthy();
	});
	test('Login,given credentials, return enabled submit button',()=>{
		render(<Login/>);
		const username = screen.getByRole('textbox',{name:
			/username/i});
		const password = screen.getByLabelText(/password/i);
		const rememberMe = screen.getByRole('checkbox');
		const loginBtn =screen.getByRole('button',{name:
			/Login/i});
		const fakeData = {
			username:'test user',
			password:'1234',
		};
		fireEvent.change(username,{target:{value:fakeData.username}});
		fireEvent.change(password,{target:{value:fakeData.password}});
		fireEvent.click(rememberMe);

		expect(loginBtn.hasAttribute('disabled')).toBe(false);
		expect(loginBtn).not.toBeDisabled();
		expect(screen.getByTestId('login-form')).toHaveFormValues({
			username:fakeData.username,
			password:"true",
			rememberMe:true,
		});
	});
});


