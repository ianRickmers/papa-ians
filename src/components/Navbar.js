import { LocalPizza, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import pages from "../data/pages.js";

export default function Navbar({ openCart, cart }) {

    //function to go to the main page
    const goToMainPage = () => {
        window.location.href = '/';
    }

    return (
        <AppBar style={{
            background: '#8b0000',
            //to the front
            zIndex: 1,
            //shadow
            boxShadow: '0 0 10px 0 #000000',
            //always on top
            position: 'sticky'
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <LocalPizza onClick={goToMainPage}
                        sx={{
                            //link to main page
                            display: { xs: 'none', md: 'flex' },
                            mr: 2,
                            //pointer
                            cursor: 'pointer'
                        }} />
                    <Typography variant="h6" onClick={goToMainPage} sx={{ cursor: 'pointer' }}
                    >
                        Papa Ian's
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page.href}
                                href={page.href}
                                sx={{ my: 2, px: 2, color: "white", display: "block" }}
                            >
                                {page.text}
                            </Button>
                        ))}
                    </Box>
                    <Box>
                        <Badge onClick={() => openCart()}  badgeContent={cart && cart.length} color="secondary" sx={{ cursor: 'pointer' }}>
                            <ShoppingCart onClick={() => openCart()} sx={{ cursor: 'pointer' }}/> Ver carro
                        </Badge>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}