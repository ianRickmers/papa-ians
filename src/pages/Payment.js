import { RadioGroup, FormControlLabel, Radio, FormControl, TextField, Typography, Grid, Container, Paper, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Pago = ({ cart }) => {
    const [total, setTotal] = useState(0);
    const getTotal = () => {

        let total = 0;
        if (cart.length > 0) {
            total = cart.reduce((acc, order) => { return acc + order.precio }, 0);
        }
        setTotal(total);
    };

    useEffect(() => {
        getTotal();
    });

    const [qty, setQty] = useState(total);
    const handleQty = (e) => {
        setQty(e.target.value);
    };

    const [metodo, setMetodo] = useState("efectivo");
    const handleMetodo = (e) => {
        setMetodo(e.target.value);
    };

    const [entrega, setEntrega] = useState("domicilio");
    const handleEntrega = (e) => {
        setEntrega(e.target.value);
    };


    const [datos, setDatos] = useState({
        "nombre": "",
        "email": "",
        "telefono": "+56 9 ",
    });

    const [datosTarjeta, setDatosTarjeta] = useState({
        "numero": "",
        "nombre": "",
        "fecha": "",
        "cvv": "",
    });

    const [direccion, setDireccion] = useState({
        "calle": "",
        "numero": "",
        "comuna": "",
    });
    const handleDireccion = (e) => {
        setDireccion({
            ...direccion,
            [e.target.name]: e.target.value,
        });
        console.log(direccion);
    };

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
        console.log(datos);
    };

    const handleChangeTarjeta = (e) => {
        setDatosTarjeta({
            ...datosTarjeta,
            [e.target.name]: e.target.value,
        });
        console.log(datosTarjeta);
    };

    const realizarPago = () => {
        alert("Pago realizado con exito");
    };

    const paperTarjeta = () => {
        return (
            <Paper sx={{ p: 1, mt: 1 }}>
                <Typography variant="h6">Datos de la tarjeta</Typography>
                <FormControl sx={{ display: "inline-block" }}>
                    <TextField sx={{ mt: 2 }}
                        id="numero"
                        type="text"
                        label="Numero tarjeta"
                        name="numero"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={datosTarjeta.numero}
                        fullWidth
                        size="small"
                        onChange={handleChangeTarjeta}
                        placeholder="XXXX XXXX XXXX XXXX"
                    />
                    <TextField sx={{ mt: 2 }}
                        id="nombre"
                        type="text"
                        label="Nombre"
                        name="nombre"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={datosTarjeta.nombre}
                        fullWidth
                        size="small"
                        onChange={handleChangeTarjeta}
                    />
                    <TextField sx={{ mt: 2 }}
                        id="fecha"
                        type="text"
                        label="Fecha de vencimiento"
                        name="fecha"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={datosTarjeta.fecha}
                        fullWidth
                        size="small"
                        onChange={handleChangeTarjeta}
                        placeholder="_ _ / _ _"
                    />
                    <TextField sx={{ mt: 2 }}
                        id="cvv"
                        type="text"
                        label="CVV"
                        name="cvv"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={datosTarjeta.cvv}
                        fullWidth
                        size="small"
                        onChange={handleChangeTarjeta}
                        placeholder="_ _ _"
                    />
                </FormControl>
            </Paper>
        );
    };

    const paperEfectivo = () => {
        return (
            <Paper sx={{ p: 1, mt: 1 }}>
                <Typography variant="h6">¿Con cuanto pagará?</Typography>
                <Box
                    sx={{ display: 'flex', alignItems: 'center' }}
                >
                    <Typography variant="subtitle1" sx={{ mr: 1, mt: 1.5 }}>Total: ${total}, pagará con: </Typography>
                    <TextField
                        sx={{ mt: 2 }}
                        id="apagar"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{ min: total, max: 2 * total, value: qty }}
                        placeholder={total.toString()}
                        size="small"
                        onChange={handleQty}
                    />
                </Box>
                <Typography variant="subtitle1" sx={{ mt: 1.5 }}>Su cambio será: ${qty - total}</Typography>
            </Paper>
        );
    };

    const paperDomicilio = () => {
        return(
            <Paper sx={{ p: 1, mt: 1 }}>
                <Typography variant="h6">Su dirección</Typography>
                <FormControl sx={{ display: "inline-block" }}>
                    <TextField sx={{ mt: 2 }}
                        id="calle"
                        type="text"
                        label="Nombre de la calle"
                        name="calle"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={direccion.calle}
                        fullWidth
                        size="small"
                        onChange={handleDireccion}
                    />
                    <TextField sx={{ mt: 2 }}
                        id="numero"
                        type="number"
                        label="Numero de la casa"
                        name="numero"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={direccion.numero}
                        fullWidth
                        size="small"
                        onChange={handleDireccion}
                    />
                    <TextField sx={{ mt: 2 }}
                        id="comuna"
                        type="text"
                        label="Comuna"
                        name="comuna"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={direccion.comuna}
                        fullWidth
                        size="small"
                        onChange={handleDireccion}
                    />
                </FormControl>
            </Paper>
        );
    };

    return (
        <Box
            px={{ xs: 2, sm: 10 }}
            py={{ xs: 5, sm: 7 }}
        >
            <Typography sx={{ ml: 3 }} variant="h4">Pago</Typography>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={7}>
                        <Paper sx={{ p: 1, mt: 1 }}>
                            <Typography variant="h6">Datos de envío</Typography>
                            <FormControl sx={{ display: "inline-block" }}>
                                <TextField sx={{ mt: 2 }}
                                    id="nombre"
                                    type="text"
                                    label="Nombre"
                                    name="nombre"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={datos.nombre}
                                    fullWidth
                                    size="small"
                                    onChange={handleChange}
                                    required
                                />
                                <TextField sx={{ mt: 2 }}
                                    id="email"
                                    type="email"
                                    label="Correo electrónico"
                                    name="email"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={datos.email}
                                    fullWidth
                                    size="small"
                                    onChange={handleChange}
                                    required
                                />
                                <TextField sx={{ mt: 2 }}
                                    id="direccion"
                                    type="text"
                                    label="Teléfono"
                                    name="direccion"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={datos.direccion}
                                    fullWidth
                                    size="small"
                                    onChange={handleChange}
                                    placeholder="+56 9 "
                                    required
                                />
                            </FormControl>
                        </Paper>
                        <Paper sx={{ p: 1, mt: 1 }}>
                            <Typography variant="h6">Método de pago</Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', itemsAlign: 'center' }}
                            >
                                <Paper sx={{ p: 1, mr: 1 }}>
                                    <FormControlLabel
                                        key="1"
                                        value="efectivo"
                                        name="efectivo"
                                        label={"Efectivo"}
                                        control={<Radio />}
                                        checked={metodo === "efectivo" ? true : false}
                                        onChange={handleMetodo}
                                    />
                                </Paper>
                                <Paper sx={{ p: 1, mr: 1, ml: 1 }}>
                                    <FormControlLabel
                                        key="2"
                                        value="tarjeta"
                                        name="tarjeta"
                                        label={"Tarjeta"}
                                        control={<Radio />}
                                        checked={metodo === "tarjeta" ? true : false}
                                        onChange={handleMetodo}
                                    />
                                </Paper>
                                <Paper sx={{ p: 1, ml: 1 }}>
                                    <FormControlLabel
                                        key="3"
                                        value="webpay"
                                        name="webpay"
                                        label={"Webpay"}
                                        control={<Radio />}
                                        checked={metodo === "webpay" ? true : false}
                                        onChange={handleMetodo}
                                    />
                                </Paper>
                            </RadioGroup>
                        </Paper>
                        {metodo === "tarjeta" ? paperTarjeta() : null}
                        {metodo === "efectivo" ? paperEfectivo() : null}
                    </Grid>
                    <Grid item xs={6} sm={5}>
                        <Paper sx={{ p: 1, mt: 1 }}>
                            <Typography variant="h6">Modo de entrega</Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', itemsAlign: 'center' }}
                            >
                                <Paper sx={{ p: 1, mr: 1 }}>
                                    <FormControlLabel
                                        key="1"
                                        value="domicilio"
                                        name="domicilio"
                                        label={"Domicilio"}
                                        control={<Radio />}
                                        checked={entrega === "domicilio" ? true : false}
                                        onChange={handleEntrega}
                                    />
                                </Paper>
                                <Paper sx={{ p: 1, mr: 1, ml: 1 }}>
                                    <FormControlLabel
                                        key="2"
                                        value="retiro"
                                        name="retiro"
                                        label={"Retiro en tienda"}
                                        control={<Radio />}
                                        checked={entrega === "retiro" ? true : false}
                                        onChange={handleEntrega}
                                    />
                                </Paper>
                                
                            </RadioGroup>
                        </Paper>
                        {entrega === "domicilio" ? paperDomicilio() : null}
                        <Button sx={{mt: 2, height: 50}}fullWidth onClick={realizarPago} variant="contained">
                            Realizar pago
                        </Button>
                    </Grid>
                </Grid>
            </Container>



        </Box>
    );
};

export default Pago;