import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Table from '../Table/Table';

function App() {
  return (
    <div className="page__content">
      <Header />
      <Main />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
