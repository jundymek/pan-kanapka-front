import React, { useEffect, useState, Suspense, lazy } from "react";
import { connect } from "react-redux";
import AddNewLocationForm from "./AddNewLocationForm/AddNewLocationForm";
import Header from "./Header/Header";
import MyModal from "./Modal/Modal";
import usePrevious from "../hooks/usePreviousValue";
import Footer from "./Footer/Footer";

const MyMap = lazy(() => import("./Map/Map"));
const LocationsCardsManager = lazy(() => import("./LocationsCardsManager/LocationsCardsManager"));

function App(props) {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [modalStyle, setmodalStyle] = useState(null);
  const prevLogged = usePrevious(props.user);

  useEffect(() => {
    if (!props.user && prevLogged) {
      setisModalOpen(true);
      setmodalStyle("LoggedOut");
    }
    if (props.user && prevLogged === null) {
      setisModalOpen(true);
      setmodalStyle("LoggedIn");
    }
  }, [props.user, prevLogged]);

  return (
    <div className="main main--js">
      <Header />
      <div className="App App--js">
        <Suspense fallback={<div className="loader">Wczytywanie...</div>}>
          <p className="subtitle-text">Dowiozę kanapki gdzie tylko chcesz...</p>
          <MyMap />
          {props.user === "admin" && <AddNewLocationForm />}
          <LocationsCardsManager />
        </Suspense>
      </div>
      
      {isModalOpen && (
        <MyModal
          isModalOpen={isModalOpen}
          modalStyle={modalStyle}
          setisModalOpen={setisModalOpen}
          setmodalStyle={setmodalStyle}
          username={props.user}
        ></MyModal>
      )}
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.username
});

export default connect(mapStateToProps)(App);
