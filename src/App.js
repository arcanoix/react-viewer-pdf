import logo from './logo.svg';
import './App.css';
import PDFViewer from 'pdf-viewer-reactjs';

function App() {
  return (
    <div className="App">
         <PDFViewer
          document={{
            url: 'http://www.pdf995.com/samples/pdf.pdf',
          }}
        />
    </div>
  );
}

export default App;
