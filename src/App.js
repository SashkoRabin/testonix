import { BrowserRouter } from 'react-router-dom';
import SiteRouter from './components/SiteRouter/SiteRouter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SiteRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
