import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import SharedLayout from "../shared/SharedLayout";
// import "bootstrap/dist/css/bootstrap.min.css";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
