import { useEffect } from "react";
import AppRouter from "./app-router/AppRouter";
import { userObserver } from "./helpers/firebase";

function App() {
  useEffect(() => {
    userObserver();
  }, []);

  return <AppRouter />;
}

export default App;
