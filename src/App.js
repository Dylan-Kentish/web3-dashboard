import { NotificationProvider } from '@web3uikit/core';
import { Dashboard } from "./components/Dashboard";

const App = () => (
  <NotificationProvider>
    <Dashboard />
  </NotificationProvider>
);

export default App;
