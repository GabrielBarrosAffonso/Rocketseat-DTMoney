import Modal from "react-modal"
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function TransactionModal(props: TransactionModalProps){
  const { isOpen, onRequestClose } = props
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(e: FormEvent){
    e.preventDefault()
    const data = {
      title, 
      value, 
      category,
      type
    }

    api.post('/transactions', data)
  }

  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className={`react-modal-content`}
      >
      <button type="button" 
        onClick={onRequestClose} 
        className="react-modal-close">
          <img src={closeImg} alt="Fechar" />
      </button>
      <Container onSubmit={(e) => handleCreateNewTransaction(e)}>
        <h2>Cadastrar transação</h2>
        <input 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título"
        />
        <input 
          type="number" 
          value={value} 
          onChange={(e) => setValue(Number(e.target.value))}
          placeholder="Valor"
        />

        <TransactionTypeContainer>
          <RadioBox 
          type="button"
          isActive={type === 'deposit'}
          activeColor="green"
          onClick={() => setType('deposit')}>
            <img src={incomeImg} alt="Entrada" />
            <span>Entradas</span>
          </RadioBox>
          <RadioBox 
          type="button"
          isActive={type === 'withdraw'}
          activeColor="red"
          onClick={() => setType('withdraw')}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}