import { Avatar, Box, Button, Drawer, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import pizzas from "../data/pizzas";
import CloseIcon from '@mui/icons-material/Close';

const Carro = ({ closeCart, show, cart, clean, deleteI }) => {

    const guardarCarro = () => {
        localStorage.setItem('carro', JSON.stringify(cart));
        window.location.href = "/payment";
    };

    const [total, setTotal] = useState(0);
    const getTotal = () => {
        let total = 0;
        if (cart.length > 0) {
            total = cart.reduce((acc, order) => { return acc + order.precio }, 0);
        }
        setTotal(total);
    };

    const buscarProducto = (order) => {
        let pizzaIndex = pizzas.findIndex(item => (
            item.id === order.id &&
            item.nombre === order.nombre
        ));
        if (pizzaIndex >= 0) {
            return (<Typography variant="subtitle2">Tamaño: {order.tamanio}</Typography>);
        }
    };

    useEffect(() => {
        getTotal();
    });

    const cartContent = cart.map((order, index) => {
        return (
            <Box key={index}>
                <Box
                    display="flex"
                    alignItems="start"
                    sx={{ pt: 2, pb: 2, pl: 2, pr: 2,
                        
                    }}
                    justifyContent={"space-between"}>
                    <Avatar src={order.imagen} sx={{ mr: 2, justifyContent: "center" }} />
                    <Box display="flex" flexDirection={"column"} sx={{ mr: 2, }} >
                        <Typography>{order.nombre}</Typography>
                        <Typography variant="subtitle2">{order.descripcion}</Typography>
                        {buscarProducto(order)}
                        <Typography variant="subtitle2">Cantidad: {order.cantidad}</Typography>
                    </Box>
                    <Box display="flex" flexDirection={"column"}>
                        <Typography variant="h5" justifyContent={"end"}>${order.precio}</Typography>
                        <CloseIcon sx={{ ml: 10,mt: -3.5,
                        ///red background
                        bgcolor: '#cd0103',
                        //center position in y axis
                        display: 'flex',
                        //white color
                        color: 'white',
                        //darker when hover
                        '&:hover': {
                            bgcolor: '#9b0000',
                            transition: '0.5s',
                        },
                        //little rounded corners
                        borderRadius: '15%',
                        //a little bigger
                        width: 30,
                        height: 30,
                        }} onClick={() => deleteI(index)} />
                    </Box>
                </Box>
            </Box>
        );
    });

    return (
        <Drawer
            open={show}
            anchor="right"
            onClose={() => closeCart()}
            PaperProps={{
                sx: {
                    width: 350,
                    background: "#E8E8E8",
                }
            }}
        >
            <Box
                sx={{ p: 4 }}
                display="flex"
                justifyContent={"center"}
                flexDirection="column"
                alignItems="center"
            >
                <Typography variant="h5" sx={{ mb: 1 }}>Tu pedido </Typography>
                <Paper>
                    {cartContent}
                </Paper>
                <Typography variant="h5" sx={{ mt: 2 }}>Total: $<b>{total}</b></Typography>
                <Button sx={{ mt: 2,
                //blue background
                bgcolor: '#0d6efd',
                //white text
                color: '#ffffff',
                //bigger size
                fontSize: '1.2rem',
                //wider button
                width: '100%',
                //light green when hover
                '&:hover': {
                    bgcolor: '#169350',
                    //slower transition
                    transition: '0.5s',
                },
                }}
                onClick={guardarCarro}>Pagar</Button>
                <Typography
                    variant="h6"
                    sx={{ mt: 2, cursor: 'pointer',
                    //red background
                    bgcolor: '#cd0103',
                    //red rectangle with 1px border
                    border: '1px solid #cd0103',
                    //space betwen text and border
                    padding: '3px',
                    //rounded corners
                    borderRadius: '6px',
                    //white text
                    color: '#ffffff',
                    //darker red when hover
                    '&:hover': {
                        bgcolor: '#9b0000',
                        //slower transition
                        transition: '0.5s',
                    },
                    }} onClick={clean}
                >Eliminar contenidos</Typography>
            </Box>
        </Drawer>
    );
};

export default Carro;