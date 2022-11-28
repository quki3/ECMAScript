import { render, screen, fireEvent } from '@testing-library/react';
import Profile from './Profile.js'

test('Profile, given click "hiden details" button, shows "display details" button', () => {
	render(<Profile/>);
	const hideDetailsBtn = screen.getByRole('button', { name:
		/Hide Details/i})
	fireEvent.click(hideDetailsBtn);
	const displayDetailsBtn = screen.getByRole('button',{
		name: /Display Details/i})
});
