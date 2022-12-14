import { Box, Container, Grid, Link, Typography } from "@mui/material";

export default function Footer() {
    return (
        <footer>
            <Box
                px={{ xs: 2, sm: 10 }}
                py={{ xs: 5, sm: 3 }}
                style={{ background: '#8b0000',
                        color: "white",
                        //position at the bottom
                        }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={4}>
                            <Typography>Menu</Typography>
                            <Box>
                                <Link href="/" color="inherit">
                                    Inicio
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/store" color="inherit">
                                    Catálogo de pizzas
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography>Ayuda</Typography>
                            <Box>
                                <Link href="/" color="inherit">
                                    Contacto
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/store" color="inherit">
                                    FAQ
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>Ubicación</Box>
                            <Box>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.25955527131!2d-70.62682444875195!3d-33.442543680681744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c57f9d9cb475%3A0xd477801174dfaf1d!2sLuis%20Montaner%20544%2C%20Providencia%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1670769390444!5m2!1ses-419!2scl"
                                    width="364"
                                    height="100"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    title='map'
                                />
                                
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}