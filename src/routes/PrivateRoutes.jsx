import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ children }) => {
  const user = useSelector((state) => state.user.account);

  if (user && !user.auth) {
    return (
      <div>
        <Alert variant="danger" className="mt-3">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>You dont have permission to access this route.</p>
        </Alert>
      </div>
    );
  }

  return <>{children}</>;
};

export default PrivateRoutes;
