import React from 'react';
import renderer from 'react-test-renderer';
import ErrorCard from './index';

test('ErrorCard app component', () => {
  const component = renderer.create(
    <ErrorCard
      componentID={'ErrorCard'}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});