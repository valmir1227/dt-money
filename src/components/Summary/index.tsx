import { useContext } from "react";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./style";


export function Summary() {
    const {transactions} = useContext(TransactionsContext)

    console.log(transactions);

    /*<TransactionsContext.Consumer>
                {(data) => {
                    console.log(data);
                    return <p>ok</p>
                }}
            </TransactionsContext.Consumer>*/
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$: 1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong> - R$:500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Tatal</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$: 500,00</strong>
            </div>
        </Container>
    )
}