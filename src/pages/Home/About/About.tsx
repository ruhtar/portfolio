// About.tsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    padding: 60px 20px;
    background-color: #f4f4f9;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    box-sizing: border-box;
    border-bottom: 5px solid #e0e0e0;
`;

const Content = styled.div`
    max-width: 800px;
    background-color: #fff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-10px);
    }
`;

const Heading = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: bold;
    transition: color 0.3s ease;
`;

const Paragraph = styled.p`
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 20px;
    transition: color 0.3s ease;
`;

const About: React.FC = () => {
    return (
        <Section id="about">
            <Content>
                <Heading>Sobre Mim</Heading>
                <Paragraph>
                    Sou um desenvolvedor backend movido por desafios e pelo aprendizado contínuo. Sempre foco em aplicar e aprimorar princípios de programação como SOLID, DRY, KISS e Clean Code.
                </Paragraph>
                <Paragraph>
                    Meu objetivo é agregar valor ao negócio, garantindo que o código que desenvolvo seja escalável, manutenível, testável e de fácil legibilidade.
                </Paragraph>
                <Paragraph>
                    Ao longo das minhas experiências profissionais, trabalhei principalmente com tecnologias como C#, NodeJs e Golang, além de frameworks como .NET e Angular. Tenho experiência com bancos de dados SQL e NoSQL, e também com sistemas de mensageria como RabbitMQ e serviços AWS como SQS e Lambda.
                </Paragraph>
                <Paragraph>
                    Considero-me uma pessoa colaborativa, valorizando o trabalho em equipe e mantendo bons relacionamentos, sempre oferecendo suporte aos outros membros do time.
                </Paragraph>
            </Content>
        </Section>
    );
};

export default About;
