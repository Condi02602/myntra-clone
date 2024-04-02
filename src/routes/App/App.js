import "./App.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Fetchitems from "../../components/Fetchitems/Fetchitems";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <Fetchitems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner/> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
