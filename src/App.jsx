import { Container } from "react-bootstrap";
import "./App.scss";
import Header from "./components/Header";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const { user, loginContext } = useContext(UserContext);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      loginContext(localStorage.getItem("email"), token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app-container">
      <Header />
      <Container>
        <AppRoutes />
      </Container>
    </div>
  );
}

export default App;
