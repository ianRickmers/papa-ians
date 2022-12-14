import { Box, Button, Container, FormControlLabel, Grid, Paper, Radio, RadioGroup, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { useState } from "react";

const Personalizada = ({cart,addToCartP}) => {
    const quesos = [
        {
            id: 0,
            nombre: "Mozzarella",
        },
        {
            id: 1,
            nombre: "Gouda",
        }
    ];
    const carnes = [
        {
            id: 0,
            nombre: "Carne",
        },
        {
            id: 1,
            nombre: "Carne mechada",
        },
        {
            id: 2,
            nombre: "Pepperoni",
        },
        {
            id: 3,
            nombre: "Salchicha",
        },
        {
            id: 4,
            nombre: "Jamón",
        },
        {
            id: 5,
            nombre: "Pollo",
        },
        {
            id: 6,
            nombre: "Tocino",
        }
    ];
    const vegetales = [
        {
            id: 0,
            nombre: "Aceituna",
        },
        {
            id: 1,
            nombre: "Choclo",
        },
        {
            id: 2,
            nombre: "Piña",
        },
        {
            id: 3,
            nombre: "Cebolla",
        },
        {
            id: 4,
            nombre: "Pimiento",
        },
        {
            id: 5,
            nombre: "Tomate",
        },
        {
            id: 6,
            nombre: "Champiñones",
        }];

    const cantQueso = [
        {
            id: 0,
            nombre: "Normal",
        },
        {
            id: 1,
            nombre: "Extra",
        },
        {
            id: 2,
            nombre: "Doble",
        }
    ];
    const masas = [
        {
            id: 0,
            nombre: "Normal",
        },
        {
            id: 1,
            nombre: "Delgada",
        }
    ];

    const tamanios = [
        {
            id: 0,
            nombre: "Personal",
        },
        {
            id: 1,
            nombre: "Mediana",
        },
        {
            id: 2,
            nombre: "Familiar",
        }
    ];

    const [contadorVegetales, setContadorVegetales] = useState(2);

    const handleContadorVegetales = () => {
        setContadorVegetales(2 - detalle.vegetales.length);
    };

    const [contadorCarnes, setContadorCarnes] = useState(2);

    const handleContadorCarnes = () => {
        setContadorCarnes(2 - detalle.carnes.length);
    };

    const [detalle, setDetalle] = useState({
        carnes: [],
        vegetales: [],
        queso: quesos[0],
        cantidadQueso: cantQueso[0],
        masa: masas[0],
        tamanio: tamanios[1]
    });

    const handleQueso = (e) => {
        const id = e.target.value;
        detalle.queso = quesos[id];
        setDetalle({ ...detalle });
    };

    const handleCantidadQueso = (e) => {
        const id = e.target.value;
        detalle.cantidadQueso = cantQueso[id];
        setDetalle({ ...detalle });
    };

    const handleMasa = (e) => {
        const id = e.target.value;
        detalle.masa = masas[id];
        setDetalle({ ...detalle });
    };

    const handleTamanio = (e) => {
        const id = e.target.value;
        detalle.tamanio = tamanios[id];
        setDetalle({ ...detalle });
    };

    const handleCarne = (e, nCarnes) => {
        if (nCarnes.length <= 2) {
            detalle.carnes = nCarnes;
            setDetalle({ ...detalle });
            console.log(detalle.carnes);
            handleContadorCarnes();
        }
    };

    const hanldeVegetales = (e, nVegetales) => {
        if (nVegetales.length <= 2) {
            detalle.vegetales = nVegetales;
            setDetalle({ ...detalle });
            console.log(detalle.vegetales);
            handleContadorVegetales();
        }
    };

    const generarOrder = () => { 
        let precio = 0;

        if(detalle.tamanio.nombre==="Personal"){
            precio=7900;
        }if(detalle.tamanio.nombre==="Mediana"){
            precio=9900;
        }if(detalle.tamanio.nombre==="Familiar"){
            precio=14900;
        }
        const qty=1;
        let id=cart.length+1;
        let order = {
            "id": id,
            "nombre": "Pizza personalizada",
            "imagen": "https://cdn.tictuk.com/29ee7b0d-dc6d-0cc0-d2c6-479518774e5d/859107ed-ad95-2b27-f830-b0c0f5f42723.jpeg?a=cd37fbcc-8f6c-296f-7e2c-51933b994885",
            "tamanio": detalle.tamanio.nombre,
            "masa": detalle.masa.nombre,
            "queso": detalle.queso.nombre,
            "cantidadQueso": detalle.cantidadQueso.nombre,
            "carnes": detalle.carnes,
            "vegetales": detalle.vegetales,
            "precio": precio,
            "qty": qty
        }
        // add to cart
        addToCartP(order);
    };


    const detallesInfo = () => {
        return (
            <Box>
                <Typography variant="h6">Tamaño: </Typography>
                <Typography variant="subtitle2"> {detalle.tamanio.nombre}</Typography>
                <Typography variant="h6">Masa: </Typography>
                <Typography variant="subtitle2"> {detalle.masa.nombre}</Typography>
                <Typography variant="h6">Queso: </Typography>
                <Typography variant="subtitle2">{detalle.queso.nombre}</Typography>
                <Typography variant="h6">Cantidad de queso: </Typography>
                <Typography variant="subtitle2">{detalle.cantidadQueso.nombre}</Typography>
                <Typography variant="h6">Carnes: </Typography>
                <Typography variant="subtitle2">{detalle.carnes.map((carne) => "+" + carne + " ")}</Typography>
                <Typography variant="h6">Vegetales: </Typography>
                <Typography variant="subtitle2">{detalle.vegetales.map((vegetal) => "+" + vegetal + " ")}</Typography>
            </Box>
        );
    };

    return (
        <Box
            px={{ xs: 2, sm: 10 }}
            py={{ xs: 5, sm: 7 }}
            sx={{
                //white background
                bgcolor: 'background.default',
                //rounded corners
                borderRadius: 7,
            }}
        >   <Typography variant="h2" ml={"370px"} mb={"20px"} fontFamily={"Roboto"} >Arma tu pizza</Typography>
        {/* subtitle */}
        <Typography variant="h5" ml={"200px"} mb={"50px"} fontFamily={"Roboto"} >Precios: - Personal: $7900 - Mediana: $9900 - Familiar: $14900</Typography>
            <Container maxWidth="xl" >
                <Grid container spacing={3} >
                    <Grid item xs={6} sm={7} ml={-1.5} sx={{
                        //dark red border
                        border: '2px solid #8b0000',
                        //smooth border
                        borderRadius: '10px',
                    }}>
                        <Typography variant="h4" textAlign={"center"} fontFamily={"Roboto"} sx={{

                            //green background
                            bgcolor: '#137c44',
                            //white text
                            color: 'white',
                            //little to the left
                            mr: 2,
                            // rounded corners
                            borderRadius: '10px',

                        }}>Ingredientes</Typography>
                        <Paper sx={{
                            //a little to the left
                            mr: 2,
                            //shadow
                            boxShadow: 4,
                            //space between buttons and text
                            p: 2,
                            mt: 2,


                        }}>
                            <Typography variant="h6" sx={{
                                //centered
                                textAlign: 'center',
                                //green background
                                bgcolor: '#137c44',
                                //white text
                                color: 'white',
                                // rounded corners
                                borderRadius: '10px',
                            }}>Carnes</Typography>
                            <Typography variant="subtitle2" sx={{
                                //centered
                                textAlign: 'center',
                            }}>Restantes: {contadorCarnes}</Typography>
                            <ToggleButtonGroup
                                value={detalle.carnes}
                                onChange={handleCarne}
                                aria-label="carnes"
                                sx={{
                                    mt: 2,
                                    display: 'flex', flexWrap: 'wrap', justifyContent: 'center', itemsAlign: 'center',
                                    //green when selected
                                    '& .Mui-selected': {
                                        bgcolor: '#037d50',
                                        color: '#ffffff',
                                    },
                                    // light green hover when selected
                                    '& .Mui-selected:hover': {
                                        bgcolor: '#05c880',
                                    },
                                }}
                            >
                                {carnes.map((carne, index) => {
                                    return (
                                        <ToggleButton key={index} value={carne.nombre} aria-label={carne.nombre}>
                                            {carne.nombre}
                                        </ToggleButton>
                                    );
                                })}
                            </ToggleButtonGroup>
                        </Paper>
                        <Paper sx={{
                            mr: 2, mt: 4,  //shadow
                            boxShadow: 4,
                            //space between buttons and text
                            p: 2,
                        }}>
                            <Typography variant="h6" sx={{
                                //centered
                                textAlign: 'center',
                                //green background
                                bgcolor: '#137c44',
                                //white text
                                color: 'white',
                                // rounded corners
                                borderRadius: '10px',
                            }}>Vegetales</Typography>
                            <Typography variant="subtitle2" sx={{
                                //centered
                                textAlign: 'center',
                            }}>Restantes: {contadorVegetales}</Typography>
                            <ToggleButtonGroup
                                value={detalle.vegetales}
                                onChange={hanldeVegetales}
                                aria-label="vegetales"

                                sx={{
                                    mt: 2,
                                    display: 'flex', flexWrap: 'wrap', justifyContent: 'center', itemsAlign: 'center',
                                    //green when selected
                                    '& .Mui-selected': {
                                        bgcolor: '#037d50',
                                        color: '#ffffff',
                                    },
                                    // light green hover when selected
                                    '& .Mui-selected:hover': {
                                        bgcolor: '#05c880',
                                    },
                                }}
                            >
                                {vegetales.map((vegetal, index) => {
                                    return (
                                        <ToggleButton key={index} value={vegetal.nombre} aria-label={vegetal.nombre}>
                                            {vegetal.nombre}
                                        </ToggleButton>
                                    );
                                })}
                            </ToggleButtonGroup>
                        </Paper>
                        <Paper sx={{
                            //a little to the left
                            mr: 2,
                            //shadow
                            boxShadow: 4,
                            //space between buttons and text
                            p: 2,
                            mt: 2,


                        }}>
                            <Typography variant="h6" sx={{
                                //centered
                                textAlign: 'center',
                                //green background
                                bgcolor: '#137c44',
                                //white text
                                color: 'white',
                                // rounded corners
                                borderRadius: '10px',
                            }}>Queso</Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', itemsAlign: 'center' }}
                            >
                                {quesos.map((queso, index) => {
                                    return (
                                        <FormControlLabel
                                            key={index}
                                            value={index}
                                            name={queso.nombre}
                                            label={queso.nombre}
                                            control={<Radio />}
                                            checked={index === detalle.queso.id ? true : false}
                                            onChange={handleQueso}
                                        />
                                    )
                                })}
                            </RadioGroup>
                        </Paper>
                        <Paper sx={{
                            //a little to the left
                            mr: 2,
                            //shadow
                            boxShadow: 4,
                            //space between buttons and text
                            p: 2,
                            mt: 2,


                        }}>
                            <Typography variant="h6" sx={{
                                //centered
                                textAlign: 'center',
                                //green background
                                bgcolor: '#137c44',
                                //white text
                                color: 'white',
                                // rounded corners
                                borderRadius: '10px',
                            }}>Cantidad queso</Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', itemsAlign: 'center' }}
                            >
                                {cantQueso.map((cQ, index) => {
                                    return (
                                        <FormControlLabel
                                            key={index}
                                            value={index}
                                            name={cQ.nombre}
                                            label={cQ.nombre}
                                            control={<Radio />}
                                            checked={index === detalle.cantidadQueso.id ? true : false}
                                            onChange={handleCantidadQueso}
                                        />
                                    )
                                })}
                            </RadioGroup>
                        </Paper>
                        <Paper sx={{
                            //a little to the left
                            mr: 2,
                            //shadow
                            boxShadow: 4,
                            //space between buttons and text
                            p: 2,
                            mt: 2,


                        }}>
                            <Typography variant="h6" sx={{
                                //centered
                                textAlign: 'center',
                                //green background
                                bgcolor: '#137c44',
                                //white text
                                color: 'white',
                                // rounded corners
                                borderRadius: '10px',
                            }}>Masa</Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', itemsAlign: 'center' }}
                            >
                                {masas.map((m, index) => {
                                    return (
                                        <FormControlLabel
                                            key={index}
                                            value={index}
                                            name={m.nombre}
                                            label={m.nombre}
                                            control={<Radio />}
                                            checked={index === detalle.masa.id ? true : false}
                                            onChange={handleMasa}
                                        />
                                    )
                                })}
                            </RadioGroup>
                        </Paper>
                        <Paper sx={{
                            //a little to the left
                            mr: 2,
                            //shadow
                            boxShadow: 4,
                            //space between buttons and text
                            p: 2,
                            mt: 2,
                            mb: 2,

                        }}>
                            <Typography variant="h6" textAlign={"center"} sx={{
                                //green background
                                bgcolor: '#137c44',
                                //white text
                                color: 'white',
                                // rounded corners
                                borderRadius: '10px',
                            }}>Tamaño</Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', itemsAlign: 'center' }}
                            >
                                {tamanios.map((t, index) => {
                                    return (
                                        <FormControlLabel
                                            key={index}
                                            value={index}
                                            name={t.nombre}
                                            label={t.nombre}
                                            control={<Radio />}
                                            checked={index === detalle.tamanio.id ? true : false}
                                            onChange={handleTamanio}
                                        />
                                    )
                                })}
                            </RadioGroup>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={5} sx={{
                    }}>

                        <Paper sx={{
                            p: 1, mt: -3,
                            //shadow
                            boxShadow: 6,
                            position: 'fixed',
                            //wider
                            width: 420,
                            //round borders
                            borderRadius: 2,
                        }}>
                            <Typography variant="h4" textAlign={"center"} fontFamily={"Roboto"}>Tu pizza</Typography>
                            {detallesInfo()}
                            <Button variant="contained" sx={{
                                //background color
                                bgcolor: '#037d50',
                                //hover color
                                '&:hover': {
                                    backgroundColor: '#05c880',
                                    color: 'white',
                                },
                                //a little to the bottom
                                mb: 3,
                                //position to the bottom
                                position: 'absolute',
                                bottom: -80,
                                //wider
                                width: 420,
                            }} onClick={generarOrder}>+ Agregar al carro</Button>
                        </Paper>
                        {/* agregar al carrito */}

                    </Grid>
                </Grid>
            </Container>
        </Box>

    );
};

export default Personalizada;