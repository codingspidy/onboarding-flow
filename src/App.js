import { GlobalContextProvider } from "./context/GlobalContext";
import Home from "./pages/Home";

function App() {
  return (
    <GlobalContextProvider>
      <Home />
    </GlobalContextProvider>
  );
}

export default App;
