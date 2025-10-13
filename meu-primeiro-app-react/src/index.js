import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const App = () => {

const estilosBotao= {
    marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'rgb(128, 0, 32)', color: 'white', border: 'none', width: '100%', borderRadius: 8
};

const textorotulo= "Nome:";


  return <div style= {{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
    <label className="rotulo" htmlFor="nome" style= {{display: 'block', marginBottom: 4}}>{textorotulo}</label>
    <input type="text" id="nome" style= {{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none', boxSizing: 'border-box'}}/>
    <button style={estilosBotao}>Enviar</button>
    </div>
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);