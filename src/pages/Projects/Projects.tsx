// Projects.tsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    padding: 60px 20px;
    background-color: #f4f4f9;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    box-sizing: border-box;
    border-bottom: 5px solid #e0e0e0;
`;

const Content = styled.div`
    max-width: 1000px;
    background-color: #fff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #333;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-weight: bold;
`;

const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
`;

const ProjectCard = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    text-align: left;

    &:hover {
        transform: translateY(-10px);
    }
`;

const ProjectTitle = styled.h3`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 15px;
`;

const ProjectLink = styled.a`
    font-size: 1rem;
    color: #4caf50;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
        color: #388e3c;
    }
`;

const Projects: React.FC = () => {
    return (
        <Section id="projects">
            <Content>
                <Heading>Meus Projetos</Heading>
                <ProjectGrid>
                    <ProjectCard>
                        <ProjectTitle>Anota AI Technical Challenge</ProjectTitle>
                        <ProjectDescription>
                            Implementação de um teste técnico de backend em C# com RabbitMQ. Este projeto envolve arquitetura escalável e processamento assíncrono.
                        </ProjectDescription>
                        <ProjectLink href="https://github.com/ruhtar/anota-ai-technical-challenge" target="_blank" rel="noopener noreferrer">
                            Ver no GitHub
                        </ProjectLink>
                    </ProjectCard>

                    <ProjectCard>
                        <ProjectTitle>Rinha de Backend</ProjectTitle>
                        <ProjectDescription>
                            Um projeto competitivo focado no desenvolvimento de habilidades backend, envolvendo práticas de otimização e escalabilidade.
                        </ProjectDescription>
                        <ProjectLink href="https://github.com/ruhtar/rinha-de-backend" target="_blank" rel="noopener noreferrer">
                            Ver no GitHub
                        </ProjectLink>
                    </ProjectCard>

                    <ProjectCard>
                        <ProjectTitle>Custom Dependency Injection Container</ProjectTitle>
                        <ProjectDescription>
                            Prova de conceito em .NET para criar container customizado de registro de injeção de dependências.
                        </ProjectDescription>
                        <ProjectLink href="https://github.com/ruhtar/Custom-DependencyInjection-Container" target="_blank" rel="noopener noreferrer">
                            Ver no GitHub
                        </ProjectLink>
                    </ProjectCard>

                    <ProjectCard>
                        <ProjectTitle>Riquelme Bot</ProjectTitle>
                        <ProjectDescription>
                            Um bot de estatísticas para os membros de um servidor no discord que faço parte. O Bot monitora tempo de estadia em chamadas de voz, possui diversos comandos, reproduz música e emite um relatório mensal acerca dos membros do servidor todo mês.
                        </ProjectDescription>
                        <ProjectLink href="https://github.com/ruhtar/riquelme-bot" target="_blank" rel="noopener noreferrer">
                            Ver no GitHub
                        </ProjectLink>
                    </ProjectCard>
                </ProjectGrid>
            </Content>
        </Section>
    );
};

export default Projects;
