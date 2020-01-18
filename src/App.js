import React, { useEffect, useState } from 'react';
import api from './services/api';

import DevItem from './components/DevItem';
import RegisterForm from './components/RegisterForm';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {

  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    async function loadDevelopers() {
      const response = await api.get('/developers');
      setDevelopers(response.data);
    }

    loadDevelopers();
  }, []);

  async function handleRegisterDev(data) {
    const response = await api.post('/developers', data);

    if (response.status == 200) {
      setDevelopers([...developers, response.data]);
    }

    return response;
  }

  return (
    <div id="app">
      <aside>
        <strong>Sign Up</strong>
        <RegisterForm onSubmit={handleRegisterDev} />
      </aside>

      <main>
        <ul>
          {
            developers.map(developer => (
              <DevItem key={developer._id} developer={developer} />
            ))
          }
        </ul>
      </main>
    </div>
  );
}

export default App;
