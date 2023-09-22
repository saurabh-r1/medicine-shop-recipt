import React from 'react';
import AddMedicine from './AddMedicine';
import MedicineList from './MedicineList';
import { MedicineProvider } from './MedicineContext';
import Header from './Header';
// import './App.css';

function App() {
  return (
    <MedicineProvider >
      <div >
      <Header /> 
        <AddMedicine />
        <MedicineList />
        
      </div>
    </MedicineProvider>
  );
}

export default App;
