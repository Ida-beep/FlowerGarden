import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

function App() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  return (
    <div className="App">
      <Header/>
      <Body date={date}/>
      <Footer date={date}/>
    </div>
  );
}

export default App;
