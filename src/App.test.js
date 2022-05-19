import ReactDOM from 'react-dom';
import App from './App';

// eslint-disable-next-line no-undef
test('renders learn react link', () => {
  const div = document.createElement('div');
  // eslint-disable-next-line react/react-in-jsx-scope
  // eslint-disable-next-line react/jsx-filename-extension
  ReactDOM.render(<App />, div);
});
