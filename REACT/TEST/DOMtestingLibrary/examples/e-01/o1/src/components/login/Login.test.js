import {render, screen} from '@testing-library/react' // (or /dom, /vue, ...)
import Login from "./Login.js";
test('should show login form', () => {
  render(<Login />)
  const input = screen.getByLabelText('Username')
  // Events and assertions...
})
test('showld have a buttom called login', ()=>{
	render(<Login />)
	const buttom = screen.getByRole('button',{name:'Login'});
})

