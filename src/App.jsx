import AuthProvider from "./context/AuthContext";
import LoginForm from "./components/LoginForm";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <AuthProvider>
      <DndProvider backend={HTML5Backend}>
        <LoginForm />
      </DndProvider>
    </AuthProvider>
  );
}

export default App;
