import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import About from "../../../About/About";
import Projects from "../../../Projects/Projects";
import Skills from "../../../Skills/Skills";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "60px",
        paddingBottom: "60px",
        position: "relative",
        overflow: "hidden",
        [theme.breakpoints.down('md')]: {
            paddingTop: "120px",
        }
    }));

    const StyledImg = styled("img")(({ theme }) => ({
        width: "80%",
        borderRadius: "50%",
        border: `4px solid ${theme.palette.primary.contrastText}`,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
            transform: "scale(1.05)"
        }
    }));

    const StyledName = styled(Typography)(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "3rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "2.5rem",
        }
    }));

    const StyledJobTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        fontSize: "1.8rem",
        textAlign: "center",
        marginBottom: "20px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.5rem",
        }
    }));

    const ButtonContainer = styled(Grid)(({ theme }) => ({
        marginTop: "30px",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
        }
    }));

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={3} alignItems="center" justifyContent="center">
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar} alt="Arthur Amorim" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                            <StyledName variant="h1">Arthur Amorim</StyledName>
                            <StyledJobTitle variant="h2">Desenvolvedor Backend</StyledJobTitle>
                            <ButtonContainer container spacing={2} justifyContent="center">
                                <Grid item xs={12} md={5} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={5} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <Typography>Contact me</Typography>
                                    </StyledButton>
                                </Grid>
                            </ButtonContainer>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
            <About />
            <Skills />
            <Projects />
        </>
    );
};

export default Hero;
