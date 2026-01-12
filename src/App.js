import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Layout from "./components/layout/layout";
import NurseDetails from "./page/NurseDetails"
import NurseList from "./page/NurseList"
import AuthPage from "./page/AuthPage";
import AboutUs from "./page/AboutUs";
import ContactUs from "./page/ContactUs";
import NewsPage from "./page/NewsPage";
import Career from "./page/Career"
import ServicePage from "./page/ServicePage";
import Partner from "./page/Partner";
import PartnerDetails from "./page/PartnerDetails";
import ChangePassword from "./pageUserDropdown/ChangePassword";
import Profile from "./pageUserDropdown/Profile";

function App() {
    return (
        <Routes>
            <Route path="/AuthPage" element={<AuthPage />}>

            </Route>

            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} /> 
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Service" element={<ServicePage />} />
                <Route path="/nurse_list" element={<NurseList />} /> 
                <Route path="/Partner" element={<Partner />} />
                <Route path="/Career" element={<Career />} />
                <Route path="/News" element={<NewsPage />} />
                <Route path="/ContactUs" element={<ContactUs />} />
                
                <Route path="/nurses/:id" element={<NurseDetails />} />
                <Route path="/partner/:id" element={<PartnerDetails />} />
                <Route path="/User/ChangePassword" element={<ChangePassword />} />
                <Route path="/User/Profile" element={<Profile />} />
            </Route>
        </Routes>
    ); 
}

export default App;
