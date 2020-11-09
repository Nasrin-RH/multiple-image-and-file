
import './App.css';
import FilesUploadComponent from './files-upload-component';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DocumentsUploadComponent from './documents-upload-component';
function App() {
  return (
    <div className="App">
    <FilesUploadComponent /> 
    <DocumentsUploadComponent /> 
    </div>
  );
}

export default App;