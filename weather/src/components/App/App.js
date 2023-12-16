import MeteoWidget from '../MeteoWidget/MeteoWidget';
import Form from '../Form/Form';
import '../App/App';


function App() {
  return (
    <div className="App">
      <Form />
      <MeteoWidget city="Savigny-sur-orge" code="91600" />
      
    </div>
  );
}

export default App;