import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import Onboarding from "./pages/Onboarding";
import Onboarding1 from "./pages/Onboarding1";
import POPUPMESSAGE from "./pages/POPUPMESSAGE";
import SignUp from "./pages/SignUp";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding-1":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding-2":
        title = "";
        metaDescription = "";
        break;
      case "/pop-up-message":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/onboarding-1" element={<Onboarding />} />
      <Route path="/onboarding-2" element={<Onboarding1 />} />
      <Route path="/pop-up-message" element={<POPUPMESSAGE />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
export default App;
