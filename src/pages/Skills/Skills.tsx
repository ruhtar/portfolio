// Skills.tsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    padding: 60px 20px;
    background-color: #f9f9f9;
    text-align: left;
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
`;

const Heading = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #333;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
`;

const SkillList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const SkillItem = styled.li`
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #555;
    display: flex;
    align-items: center;

    &:before {
        content: '✔️';
        margin-right: 10px;
        color: #4caf50;
    }
`;

const Skills: React.FC = () => {
    return (
        <Section id="skills">
            <Content>
                <Heading>Minhas Habilidades</Heading>
                <SkillList>
                    <SkillItem>Backend: C#, NodeJs e Golang</SkillItem>
                    <SkillItem>Frontend: HTML, CSS e Javascript/Typescript</SkillItem>
                    <SkillItem>Frameworks: .NET e Angular</SkillItem>
                    <SkillItem>ORMs: Entity Framework e TypeORM</SkillItem>
                    <SkillItem>Bancos de dados: SQL Server, PostgreSQL, MySQL e MongoDB</SkillItem>
                    <SkillItem>Testes: XUnit e Cypress</SkillItem>
                    <SkillItem>Logs e monitoramento: Serilog, Elastic Search, Sentry e Datadog</SkillItem>
                    <SkillItem>Mensageria: RabbitMQ, Service Bus, Rebus e MassTransit</SkillItem>
                    <SkillItem>Microsserviços</SkillItem>
                    <SkillItem>Clean Architecture e DDD - Domain Driven Design</SkillItem>
                    <SkillItem>Cloud: AWS - SQS, Lambda Functions, API Gateways, DynamoDB, RDS</SkillItem>
                    <SkillItem>Git</SkillItem>
                    <SkillItem>Metodologias ágeis: Scrum e Kanban</SkillItem>
                </SkillList>
            </Content>
        </Section>
    );
};

export default Skills;
