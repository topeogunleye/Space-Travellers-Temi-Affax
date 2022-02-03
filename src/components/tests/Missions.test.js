import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import Missions from '../Missions';
import store from '../../redux/configureStore';

describe('the Missions component ', () => {
  test('rendering of the Mission component', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Missions />
        </BrowserRouter>
        ,
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
