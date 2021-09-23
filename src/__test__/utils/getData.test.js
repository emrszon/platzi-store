import getData from '../../utils/getData';

describe('test get data', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('fetch data', () => {
    fetch.mockResponseOnce(JSON.stringify({ 'data': '123345' }));

    getData('https://google.com')
      .then((response) => {
        return expect(response.data).toMatch('123345');
      })
      .catch((err) => {
        console.log(err);
      });

    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});

