import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button label="ボタン" onClick={() => alert("Click")} />
    </>
  );
}

export default App;
