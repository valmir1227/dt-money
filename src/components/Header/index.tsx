import logoImg from "../../assets/logo.svg";
import { useState } from "react";
import { Container } from "./styles";
import Modal from "react-modal";
import { Content } from "./styles";

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}


export function Header({ onOpenNewTransactionModal }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt-money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    );
}
