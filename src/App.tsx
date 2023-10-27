import "./App.css";
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { HomePage, AboutPage, ServicesPage } from "./pages";
import { AppLayout } from "./layouts";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}