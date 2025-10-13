import './App.css';
import Home from './components/Home';

function App() {

const title="Welcome to react-bootstrap project!"

const links = [
  {label: 'Cards', href: 'cards.html'},
  {label: 'Bottons', href: 'buttons.html'},
  {label: 'Forms', href: 'forms.html'},
  {label: 'Navbar', href: 'navbar.html'},
  {label: 'Layout', href: 'layout.html'}
]

  return (
    <div>
      <Home title={title} links={links} />
    </div>
  );
}

export default App;
