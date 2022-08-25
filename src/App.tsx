import { Dashboard } from "./components/Dashboard/index.";
import { Header } from "./components/Header";
import Modal from 'react-modal'
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { TransactionModal } from './components/TransactionModal'
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onTransactionModalOpen={handleOpenNewTransactionModal}/>
      <Dashboard />
      <TransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
