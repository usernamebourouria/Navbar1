import './app.css';
import Box from '@mui/material/Box';
import Navbar from './componments/appbar';
import { Route, Routes } from 'react-router-dom/dist';
import Temperature from './Data/temerature';

function App() {
  return (
    <div>
    <Box>
      <Navbar />
    </Box >
    <Routes>
      <Route path="/temperature" element={<Temperature/>}/>
    </Routes>
    </div>
  );
}
export default App;
