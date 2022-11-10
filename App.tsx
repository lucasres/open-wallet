import { MoneyContextProvider } from './src/Context/MoneyContext';
import { PrivacyContextProvider } from './src/Context/PrivacyContext';
import Home from './src/Screens/Home';

export default function App() {
  return (
    <PrivacyContextProvider>
      <MoneyContextProvider>
        <Home />
      </MoneyContextProvider>
    </PrivacyContextProvider>
  );
}
