import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Profile from './Profile.js'
describe('<Profile/>',()=>{
	//1
test('Profile, given click "hiden details" button, shows "display details" button', () => {
	render(<Profile/>);
	const hideDetailsBtn = screen.getByRole('button', { name:
		/Hide Details/i})
	fireEvent.click(hideDetailsBtn);
	const displayDetailsBtn = screen.getByRole('button',{
		name: /Display Details/i});
	expect(displayDetailsBtn).toBeTruthy();
	
	
});
	//2
test('hideDetailsBtn to be in dom',()=>{
	render(<Profile/>);
	const hideDetailsBtn = screen.getByRole('button',{name:
		/Hide Details/i})
	expect(hideDetailsBtn).toBeTruthy();
});
	// 3
test('hideDetailsBtn to be in dom jest-dom',()=>{
	render(<Profile/>);
	const hideDetailsBtn=screen.getByRole('button',{name:
		/Hide Details/i})
	expect(hideDetailsBtn).toBeInTheDocument();
});
	//4
test('removedDisplayDetailsBtn',()=>{
	render(<Profile/>)
	const removedDisplayDetailsBtn = screen.queryByRole('button',{name:
		/Display Details/i})
	expect(removedDisplayDetailsBtn).toBeFalsy();
	expect(removedDisplayDetailsBtn).not.toBeInTheDocument();

});
test('removedDisplayDetailsBtn',()=>{
	render(<Profile/>);
	const removedDisplayDetailsBtn = screen.queryByRole('button',{name:
		/Display Details/i})
	expect(removedDisplayDetailsBtn).not.toBeInTheDocument();
});

});

