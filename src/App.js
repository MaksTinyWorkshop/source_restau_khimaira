import { useState } from "react";
import { ToggleContext } from "./components/hooks/ToogleContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Legals from "./pages/Legals";
import "./styles/index.scss";
import NotFound from "./pages/NotFound";

//Provider creation to Use the context
const TGProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ToggleContext.Provider
      value={{
        isOpen: isOpen,
        toggle: () => setIsOpen(!isOpen),
        shut: () => setIsOpen(false),
      }}
    >
      {props.children}
    </ToggleContext.Provider>
  );
};

function App() {
  return (
    <>
      {/* Wrapping all the app in the Provider to give the context to all */}
      <TGProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/legals" element={<Legals />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TGProvider>
    </>
  );
}

export default App;
