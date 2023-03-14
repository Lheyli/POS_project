import './App.css';
import Layout from './componets/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Transactions from './pages/Transactions';
import Sales from './pages/Sales';
import User from './pages/User';
import Accounting from './pages/Accounting';
import Members from './pages/Members';
import ScanQrCode from './pages/ScanQrCode';
import MakePurchase from './pages/MakePurchase';
import Purchase from './pages/Purchase';
import Checkout from './pages/Checkout';
import CreateNewMember from './pages/CreateNewMember';
import Receipt from './pages/Receipt';
import Payment from './pages/Payment';
import MakeOrders from './pages/MakeOrders';
import CreateUpload from './pages/CreateUpload';

function App() {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<SignIn />} />
        <Route path="dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="products" element={<Layout><Products /></Layout>} />
        <Route path="transactions" element={<Layout><Transactions /></Layout>} />
        <Route path="sales-report" element={<Layout><Sales /></Layout>} />
        <Route path="accounting-report" element={<Layout><Accounting /></Layout>} />
        <Route path="user-logs" element={<Layout><User /></Layout>} />
        <Route path="clients" element={<Layout><Members /></Layout>} />
        <Route path="qr" element={<Layout><ScanQrCode /></Layout>} />
        <Route path="purchase" element={<Layout><MakePurchase /></Layout>} />
        <Route path="make" element={<Purchase />} />
        <Route path="cart" element={<Checkout />} />
        <Route path="makeorders" element={<Layout><MakeOrders /></Layout>} />
        <Route path="payment" element={<Layout><Payment /></Layout>} />
        <Route path="receipt" element={<Layout><Receipt /></Layout>} />
        <Route path="createnewmember" element={<Layout><CreateNewMember /></Layout>} />
        <Route path="createupload" element={<Layout><CreateUpload /></Layout>} />


      </Routes>

    </Router>
  );
}

export default App;
