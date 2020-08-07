import React, { useState, useEffect } from 'react';
import api from './Services/api';

// componente: bloco isolado de HTML, CSS, e JS que não interfere no resto da aplicação.
// propriedade: informações que um componente PAI passa para os componentes filhos.
// estado: informações mantidas pelo componente (lembrar: imutabilidade).

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './Components/DevItem'
import DevForm from './Components/DevForm'

function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    loadDevs();
  },
    []);

  async function handleAddDev(data) {

    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div >
  );
}

export default App;
