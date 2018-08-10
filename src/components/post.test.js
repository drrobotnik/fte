import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Post from './post';

Enzyme.configure({ adapter: new Adapter() });

describe('renders correctly', () => {

  const POST = <Post key="1" name="this is a title" email="this@email.com">
  <h3 className="post__author">
      This is a title.
  </h3>
  <span dangerouslySetInnerHTML={{__html: `<p>this is html</p>`}} />
</Post>;

  it('should not have changed', () => {
    const component = mount(POST);

    expect(component).toMatchSnapshot();
  });
})
