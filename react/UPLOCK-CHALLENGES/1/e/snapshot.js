// MyComponent.test.js
import React from 'react';
import { render } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<MyComponent />);
     //  We then use expect(asFragment()).toMatchSnapshot() to compare the rendered output (the fragment) against the previously stored snapshot. If the snapshot does not exist yet, Jest will create one and pass the test. If the snapshot already exists, Jest will compare it with the current output. If they match, the test passes; otherwise, it fails.                      
    expect(asFragment()).toMatchSnapshot();
  });
});
