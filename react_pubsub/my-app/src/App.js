import './App.css';
import { Modal } from './Modal';
import { ModalPublisher } from './ModalPublisher';

function App() {
  return (
    <div className="App">
      <Modal showModal={true} />
      <h1
        onClick={() => {
          ModalPublisher.message("sending some data");
        }}
      >
        Publisher subscriber pattern 
      </h1>
      <h2>Click on title to open the modal</h2>
    </div>
  );
}

export default App;
