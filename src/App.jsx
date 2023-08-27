import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chat from "./pages/Chat";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
