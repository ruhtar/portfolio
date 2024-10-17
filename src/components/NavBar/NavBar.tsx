import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const NavBar = () => {
    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        transition: "background-color 0.3s ease",
        height: "70px",
    }));

    const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
        margin: "0 20px",
        padding: "10px 15px",
        fontSize: "1.1rem",
        textTransform: "uppercase",
        color: theme.palette.primary.contrastText,
        cursor: "pointer",
        transition: "color 0.3s ease, background-color 0.3s ease",
        "&:hover": {
            color: theme.palette.secondary.main,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
        },
    }));

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppBar position="fixed">
            <StyledToolbar>
                <StyledMenuItem onClick={() => handleScroll("about")}>
                    Sobre
                </StyledMenuItem>
                <StyledMenuItem onClick={() => handleScroll("skills")}>
                    Tecnologias
                </StyledMenuItem>
                <StyledMenuItem onClick={() => handleScroll("projects")}>
                    Projetos
                </StyledMenuItem>
            </StyledToolbar>
        </AppBar>
    );
}

export default NavBar;
