import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onTransactionModalOpen: () => void
}

export function Header(props: HeaderProps){
  const { onTransactionModalOpen } = props
  return(
    <Container>
      <Content>
        <img src={logoImg} alt="DT Money" />
        <button type="button" onClick={onTransactionModalOpen}>
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}