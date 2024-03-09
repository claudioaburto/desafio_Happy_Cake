import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

import ContactForm from "./views/ContactoPage";
import HomePage from "./views/HomePage";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<ContactForm />} />
      </Routes>
    </div>
  );
};
export default App;
