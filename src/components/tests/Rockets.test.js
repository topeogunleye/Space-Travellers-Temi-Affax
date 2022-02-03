import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../../redux/configureStore';
import Rockets from '../Rockets';

describe('the Rockets component ', () => {
  test('rendering of the rockets component', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Rockets />
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
