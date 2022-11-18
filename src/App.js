import AppRouter from "./app-router/AppRouter";
import AuthContextProvider from "./context/AuthContext";
import BlogContextProvider from "./context/BlogContext";

function App() {
  return (
    <AuthContextProvider>
      <BlogContextProvider>
        <AppRouter />
      </BlogContextProvider>
    </AuthContextProvider>
  );
}

export default App;
