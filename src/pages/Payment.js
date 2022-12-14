import { RadioGroup, FormControlLabel, Radio, FormControl, TextField, Typography, Grid, Container, Paper, Button, Select, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import swal from "sweetalert";

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


    const [metodo, setMetodo] = useState("efectivo");
    const handleMetodo = (e) => {
        setMetodo(e.target.value);
    };

    const [entrega, setEntrega] = useState("domicilio");
    const handleEntrega = (e) => {
        setEntrega(e.target.value);
    };

    const [propina, setPropina] = useState(0);
    const handlePropina = (e) => {
        let newPropina = parseFloat(e.target.value);
        setPropina(newPropina);
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
        swal({
            title: "Orden realizada!",
            text: "Orden realizado con ??xito!",
            icon: "success",
            button: "Ok",
        });
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



    const paperDomicilio = () => {
        return (
            <Paper sx={{ p: 1, mt: 1, boxShadow: 3 }}>
                <Typography variant="h6">Su direcci??n</Typography>
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

    const paperRetiro = () => {
        return (
            <Paper sx={{ p: 1, mt: 1, boxShadow: 3 }}>
                <Typography variant="h6">??En que sucursal desea retirar su pedido?</Typography>
                <Select defaultValue={1} sx={{
                    //box width
                    width: 350,
                    //placeholder
                }}>
                    <MenuItem value={1}>Luis Montaner 544</MenuItem>
                    <MenuItem value={2}>Jos?? Domingo Ca??as 2280</MenuItem>
                </Select>
            </Paper>
        );
    };

    return (

        <Box
            px={{ xs: 2, sm: 10 }}
            py={{ xs: 5, sm: 7 }}
            sx={{
                mt: 5,
                mb: 5.5,
                //white background
                bgcolor: "#fff",
                //border radius
                borderRadius: 7,
                //shadow
                boxShadow: 3,
            }}
        >
            <Typography sx={{ ml: 3, }} variant="h4" fontFamily={"roboto"}>Pago</Typography>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={7}>
                        <Paper sx={{
                            p: 1, mt: 1,
                            //shadow
                            boxShadow: 3,
                        }}>
                            <Typography variant="h6">Datos de env??o</Typography>
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
                                    label="Correo electr??nico"
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
                                    label="Tel??fono"
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
                        <Paper sx={{ p: 1, mt: 1, boxShadow: 3, }}>
                            <Typography variant="h6">M??todo de pago</Typography>
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
                        <Paper sx={{ p: 1, mt: 1, boxShadow: 3 }}>
                            <Typography variant="h6">Tipo de recibo</Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', itemsAlign: 'center' }}
                                
                            >
                                <Paper sx={{ p: 1, mr: 1 }}>
                                    <FormControlLabel
                                        key="1"
                                        value="Boleta"
                                        name="Boleta"
                                        label={"Boleta"}
                                        control={<Radio />}
                                    />
                                </Paper>
                                <Paper sx={{ p: 1, mr: 1, ml: 1 }}>
                                    <FormControlLabel
                                        key="2"
                                        value="Factura"
                                        name="Factura"
                                        label={"Factura"}
                                        control={<Radio />}
                                    />
                                </Paper>
                            </RadioGroup>

                        </Paper>
                        <Paper sx={{ p: 1, mt: 1, boxShadow: 3 }}>
                            <Typography variant="h6">Propina</Typography>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', itemsAlign: 'center' }}
                                
                            >
                                <Paper sx={{ p: 1, mr: 1 }}>
                                    <FormControlLabel
                                        key="1"
                                        value="0"
                                        name="%0"
                                        label={"Nada"}
                                        onChange={handlePropina}
                                        control={<Radio />}
                                    />
                                </Paper>
                                <Paper sx={{ p: 1, mr: 1, ml: 1 }}>
                                    <FormControlLabel
                                        key="2"
                                        value= "0.05"
                                        name="5%"
                                        label={"5%"}
                                        onChange={handlePropina}
                                        control={<Radio />}
                                    />
                                </Paper>
                                <Paper sx={{ p: 1, mr: 1, ml: 1 }}>
                                    <FormControlLabel
                                        key="3"
                                        value="0.10"
                                        name="10%"
                                        label={"10%"}
                                        onChange={handlePropina}
                                        control={<Radio />}
                                    />
                                </Paper>
                            </RadioGroup>

                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={5}>
                        <Paper sx={{ p: 1, mt: 1, boxShadow: 3 }}>
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
                        {entrega === "retiro" ? paperRetiro() : null}
                        <Paper sx={{ p: 1, mt: 1 }}>
                            <Typography sx={{ mb: 1 }} variant="h6">Resumen de compra</Typography>
                            {cart.map((item) => (
                                <Box>
                                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography key={item.id} variant="subtitle 1">{item.cantidad} x {item.nombre}-{item.tamanio}</Typography>
                                        <Typography variant="subtitle 1">${item.precio}</Typography>
                                    </Box>
                                    <hr />
                                </Box>
                            ))}
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant="subtitle 1">Sub-total</Typography>
                                <Typography variant="subtitle 1">${total}</Typography>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant="subtitle 1">Propina</Typography>
                                <Typography variant="subtitle 1">${parseInt(propina * total)}</Typography>
                            </Box>
                            <hr/>
                            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography variant="subtitle 1">Total</Typography>
                                <Typography variant="subtitle 1">${total + parseInt(propina * total)}</Typography>
                            </Box>
                        </Paper>
                        <Button sx={{
                            mt: 2, height: 50,
                            //green hover
                            "&:hover": {
                                bgcolor: '#169350',
                                //slower transition
                                transition: '0.5s',
                            },
                        }} fullWidth onClick={realizarPago} variant="contained">
                            Realizar pago
                        </Button>
                    </Grid>
                </Grid>
            </Container>



        </Box>
    );
};

export default Pago;