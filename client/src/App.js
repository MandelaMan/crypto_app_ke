import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import MinePage from "./Pages/MinePage";
import ProductPage from "./Pages/ProductPage";
import TeamsPage from "./Pages/TeamsPage";
import Loginpage from "./Pages/Loginpage";
import Footer from "./Components/Footer/Footer";
import RechargePage from "./Pages/RechargePage";
import DepositPage from "./Pages/DepositPage";
import RechargeLogPage from "./Pages/RechargeLogPage";
import RechargeUploadPage from "./Pages/RechargeUploadPage";
import ProjectIncomePage from "./Pages/ProjectIncomePage";
import WithdrawPage from "./Pages/WithdrawPage";
import WithdrawalHistoryPage from "./Pages/WithdrawalHistoryPage";
import PrivateRoute from "./PrivateRoute";
import BidPaymentAccPage from "./Pages/BidPaymentAccPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* visible to the public */}
        <Route path="/login" element={<Loginpage />} />

        <Route path="/" element={<HomePage />} />
          <Route path="/mine" element={<MinePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/recharge" element={<RechargePage />} />
          <Route path="/deposit" element={<DepositPage />} />
          <Route path="/rechargeLog" element={<RechargeLogPage />} />
          <Route path="/rechargeUpload" element={<RechargeUploadPage />} />
          <Route path="/projectIncome" element={<ProjectIncomePage />} />
          <Route path="/withdraw" element={<WithdrawPage />} />
          <Route path="/withdrawalHistory" element={<WithdrawalHistoryPage />} />
          <Route  path="/bidAccount" element={<BidPaymentAccPage />} />

        {/* Need authentication to access */}
        {/* <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/mine" element={<MinePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/recharge" element={<RechargePage />} />
          <Route path="/deposit" element={<DepositPage />} />
          <Route path="/rechargeLog" element={<RechargeLogPage />} />
          <Route path="/rechargeUpload" element={<RechargeUploadPage />} />
          <Route path="/projectIncome" element={<ProjectIncomePage />} />
          <Route path="/withdraw" element={<WithdrawPage />} />
          <Route
            path="/withdrawalHistory"
            element={<WithdrawalHistoryPage />}
          />
        </Route> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
