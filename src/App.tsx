// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Directions from './pages/Directions';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Directions />} /> 
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
