import reducer from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('ProductMock', () => {
  test('return initial state', () => {
    expect(reducer({}, '')).toEqual({});
  });
  test('add to cart', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = {
      cart: [ProductMock],
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });
});
