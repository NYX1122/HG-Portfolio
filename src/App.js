import './App.css';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Link to='/pieces'>Projects</Link>
      <Link to='/contactme'>Contact Me</Link>
    </div>
  );
}