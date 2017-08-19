import React from 'react';
import renderer from 'react-test-renderer';
import ItemDetail from './ItemDetail';


describe('ItemDetail', () => {
  it('should render correctly', () => {
    const itemData = {
      pictures: [{ url: 'http://someurl.com/someimage.jpg' }],
      condition: 'new',
      sold_quantity: 245,
      title: 'This is some title',
      price: 10000,
      description: { plain_text: 'This is some description' },
    };

    const tree = renderer.create(
      <ItemDetail data={itemData} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
