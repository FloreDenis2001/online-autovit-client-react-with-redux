import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NewCar from "./components/NewCar/NewCar";
import UpdateCar from "./components/Update/UpdateCar";
import { Provider } from "react-redux";
import store from "./store/store";
import Notification from "./components/Notifications/Notification";


function App() {
  return (
    <Provider store={store}>
      <Notification/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<NewCar />} />
        <Route path="/update/:id" element={<UpdateCar />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}


export default App;