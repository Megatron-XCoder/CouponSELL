import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from "./Components/AppContext.jsx";
import LandingPage from './Screens/LandingPage.jsx';
import PaymentPage from "./Screens/PaymentPage.jsx";


function App() {
    return (
        <Router>
                <AppProvider>
                    <Routes>
                        <Route exact path="/" element={<LandingPage />} />
                        <Route exact path="/Payment" element={<PaymentPage />} />
                    </Routes>
                </AppProvider>
        </Router>
    );
}

export default App;
