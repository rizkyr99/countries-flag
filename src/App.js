import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import FlagList from './components/FlagList';
import { Route, Routes } from 'react-router-dom';
import FlagDetail from './components/FlagDetail';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <div
      className={`${
        theme ? 'dark bg-verydarkblue' : 'bg-verylightgray'
      } transition duration-300`}>
      <Header />
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Search />
                <FlagList />
              </>
            }
          />
          <Route path='/detail/:name' element={<FlagDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
