import RequiredAuth from 'hocs/RequiredAuth';
import Layout from 'layout/Layout';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PersistGate } from 'zustand-persist';

function App() {
  return (
    <PersistGate>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </PersistGate>
  );
}

export default App;
