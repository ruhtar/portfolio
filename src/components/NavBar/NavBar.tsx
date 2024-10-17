import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";


const NavBar = () => {
    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <MenuItem>
                        {/* Link de âncora que rola até a seção About */}
                        <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#skills" style={{ textDecoration: 'none', color: 'inherit' }}>Skills</a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#projects" style={{ textDecoration: 'none', color: 'inherit' }}>Projects</a>
                    </MenuItem>
                </StyledToobar>
            </AppBar>
        </>
    );
}

export default NavBar
