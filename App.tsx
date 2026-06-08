import {Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import {useAppContext} from "./context/AppContext";
import Loading from "./components/ui/Loading";
import Onboarding from "./pages/onboarding";

const App = () => {
  const {user, isUserFetched, onboardingCompleted} = useAppContext();
  if(!user)
  {
    return isUserFetched ? <Login/> :  <Loading/>
   }
   if(!onboardingCompleted)
   {
    return <Onboarding />
   }
  return (
   <>
   <Routes>
    <Route path="/" element={<Layout />}/>
      <Route index element={<Dashboard />}/>
   </Routes>
   </>
  )
}

export default App