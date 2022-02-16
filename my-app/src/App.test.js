import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  // const linkElement = screen.getByText(/learn react/i);
  const linkElement = screen.getByText(/Moon/i);
  expect(linkElement).toBeInTheDocument();
});
