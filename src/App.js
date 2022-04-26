import { useSelector } from "react-redux";
import Auth from "./components/auth";
import Layout from "./components/layout";

function App() {
  const auth = useSelector(state => state.auth.isloggedIn);

  return (
    <div className="App m-5">
      {auth ? <Layout /> : <Auth />}     
    </div>
  );
}

export default App;
