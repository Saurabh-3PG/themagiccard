import React from 'react';
import renderer from 'react-test-renderer';
import Loader from './index';

test('Loader app component', () => {
  const component = renderer.create(
    <Loader
      componentID={'Loader'}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});