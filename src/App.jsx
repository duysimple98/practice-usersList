import { Container } from "react-bootstrap";
import "./App.scss";
import Header from "./components/Header";
import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch } from "react-redux";
import { handleRefresh } from "./redux/actions/userAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      dispatch(handleRefresh());
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
