import { Login } from "screens/Login";
import { Signup } from "screens/Signup";
import { ForgotPassword } from "screens/ForgotPassword";
import Cards from "screens/Cards";

const App = () => {
  return (
    <>
      <Cards />
      <Login />
      <Signup />
      <ForgotPassword />
    </>
  );
};

export default App;
