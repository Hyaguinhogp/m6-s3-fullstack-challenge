import './App.css'
import { Toaster } from 'react-hot-toast';
import Routes from './routes'
import { Global } from './styles/global';

function App() {
  return (
    <>
      <Global />
      <Routes />
      <Toaster />
    </>
  );
}

export default App;
