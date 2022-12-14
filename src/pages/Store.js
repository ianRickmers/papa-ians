import { AppBar, Box, Button, Container, Grid, Typography } from "@mui/material"
import PizzaCard from "../components/PizzaCard"
import DrinkCard from "../components/DrinkCard"
import pizzas from "../data/pizzas"
import drinks from "../data/drinks"
import sauces from "../data/sauces"
const Store = ({addToCart, addToCartByS}) => {

    //load cart from local storage
    return (
        <Box>
            <AppBar sx={{
                mt: 8,
                //without background
                backgroundColor: 'transparent',
                //without shadow
                boxShadow: 'none',
                //appbar only in the left
            }}>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: 'none', md: 'flex', },
                        //without background

                    }}
                >
                    <Button
                        /* go to pizzas smooth scroll*/
                        href="#pizzas"
                        sx={{
                            my: 2, px: 2, color: "white", display: "block",
                            //background color
                            backgroundColor: '#8b0000',
                            //smooth scroll to the section
                            scrollBehavior: 'smooth',
                            //scroll just up the section

                            //space between buttons
                            mx: 2,
                            //buttons at the left
                            float: 'left',
                            //shadow of the button
                            boxShadow: '0 0 10px 0 #000000',
                            '&:hover': {
                                //slight pink
                                backgroundColor: '#ff5c8e',
                            },
                        }}
                    >
                        Pizzas
                    </Button>
                    <Button
                        /* go to bebestibles smooth scroll*/
                        href="#bebestibles"
                        sx={{
                            my: 2, px: 2, color: "white", display: "block",
                            backgroundColor: '#8b0000',
                            //shadow of the button
                            boxShadow: '0 0 10px 0 #000000',
                            //hover color
                            '&:hover': {
                                //slight pink
                                backgroundColor: '#ff5c8e',
                            },
                        }}
                    >
                        Bebestibles
                    </Button>
                    <Button
                        /* go to salsas smooth scroll*/
                        href="#salsas"
                        sx={{
                            my: 2, px: 2, color: "white", display: "block",
                            mx: 2,
                            backgroundColor: '#8b0000',
                            //shadow of the button
                            boxShadow: '0 0 10px 0 #000000',
                            //hover color
                            '&:hover': {
                                //slight pink
                                backgroundColor: '#ff5c8e',
                            },
                        }}
                    >
                        Salsas
                    </Button>
                </Box>
            </AppBar>
            <Container id="pizzas" maxWidth="lg" sx={{
                //white background
                backgroundColor: 'white',
                //rounded corners
                borderRadius: 7,
            }}>
                <Typography variant="h3" sx={{
                    //centered
                    textAlign: 'center',
                    //padding
                    padding: '20px 0px 10px 0px',
                    //elegant font
                    fontFamily: 'Roboto',
                }}>Catálogo de pizzas</Typography>
                {/* precios subtitulo */}
                <Typography variant="h6" sx={{
                    //centered
                    textAlign: 'center',
                    //padding
                    padding: '0px 0px 20px 0px',
                    //elegant font
                    fontFamily: 'Roboto',
                }}>Precios: - Personal: $7900 - Mediana: $9900 - Familiar: $14900</Typography>
                <Grid
                    container
                    justifyContent={"center"}
                    sx={{ margin: '20px 4px 10px 4px', }}
                >
                    {pizzas.map((piz, index) => {
                        return (
                            <PizzaCard key={index} pizza={piz} addToCart={addToCart}/>
                        )
                    })}
                </Grid>
            </Container>
            <Container id="bebestibles" maxWidth="lg" sx={{
                //white background
                backgroundColor: 'white',
                //rounded corners
                borderRadius: 7,
            }}>
                <Typography variant="h3" sx={{
                    //centered
                    textAlign: 'center',
                    //padding
                    padding: '20px 0px 10px 0px',
                    //elegant font
                    fontFamily: 'Roboto',
                }}>Catálogo de Bebestibles</Typography>
                {/* precios subtitulo */}
                <Grid
                    container
                    justifyContent={"center"}
                    sx={{ margin: '20px 4px 10px 4px', }}
                >
                    {drinks.map((dri, index) => {
                        return (
                            <DrinkCard key={index} drink={dri} addToCart={addToCartByS} />
                        )
                    })}
                </Grid>
            </Container>
            <Container id="salsas" maxWidth="lg" sx={{
                //white background
                backgroundColor: 'white',
                //rounded corners
                borderRadius: 7,
            }}>
                <Typography variant="h3" sx={{
                    //centered
                    textAlign: 'center',
                    //padding
                    padding: '20px 0px 10px 0px',
                    //elegant font
                    fontFamily: 'Roboto',
                }}>Catálogo de Salsas</Typography>
                {/* precios subtitulo */}
                <Grid
                    container
                    justifyContent={"center"}
                    sx={{ margin: '20px 4px 10px 4px', }}
                >
                    {sauces.map((dri, index) => {
                        return (
                            <DrinkCard key={index} drink={dri} addToCart={addToCartByS}/>
                        )
                    })}
                </Grid>
            </Container>
        </Box>
    )
}

export default Store