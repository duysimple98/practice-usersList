import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoApp from "../assets/images/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogoutRedux } from "../redux/actions/userAction";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Header = (props) => {
  const user = useSelector((state) => state.user.account);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(handleLogoutRedux());
    // logout();
    // navigate("/");
    // toast.success("Logout successfully!");
  };

  useEffect(() => {
    if (user && user.auth === false) {
      navigate("/");
      toast.success("Logout successfully!");
    }
  }, [user]);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logoApp}
              width={30}
              height={30}
              className="d-inline-block align-top"
            />
            <span>My Users App</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>

              {user?.auth && (
                <NavLink to="/users" className="nav-link">
                  Manage Users
                </NavLink>
              )}
            </Nav>
            <Nav>
              {user?.email && (
                <span className="nav-link">
                  Welcome <b>{user.email}</b>
                </span>
              )}
              <NavDropdown title="Account">
                {user && user.auth === true ? (
                  <NavDropdown.Item onClick={() => handleLogout()}>
                    Logout
                  </NavDropdown.Item>
                ) : (
                  <Link to="/login" className="dropdown-item">
                    Login
                  </Link>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
