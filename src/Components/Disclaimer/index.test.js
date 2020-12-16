import React from 'react';
import renderer from 'react-test-renderer';
import Disclaimer from './index';
import {HOMEPAFE_DISCLAIMER_TEXTS} from "../../utility/constants";

test('Disclaimer app component', () => {
  const component = renderer.create(
    <Disclaimer
      componentID={'ErrorCard'}
      disclaimers={HOMEPAFE_DISCLAIMER_TEXTS}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});