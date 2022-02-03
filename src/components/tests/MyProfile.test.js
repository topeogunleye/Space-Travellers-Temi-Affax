import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../../redux/configureStore';
import MyProfile from '../MyProfile';

describe('the MyProfile component ', () => {
  test('rendering of the myprofile component', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <MyProfile />
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
