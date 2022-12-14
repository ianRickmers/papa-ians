import { Button, Card, CardActions, CardContent, CardMedia, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function PizzaCard({ pizza, addToCart }) {
    //save cart in local storage

    const [size, setSize] = useState(pizza.size[1]);

    const [qty, setQty] = useState(1);

    const handleQty = (event) => {
        let newQty = parseInt(event.target.value);
        setQty(newQty);

        let indice = pizza.size.indexOf(size);
        let precio = pizza.costs[indice];
        handlePrice(precio, newQty);
    };

    const [price, setPrice] = useState(pizza.costs[1]);

    const handlePrice = (precio,cantidad) => {
        let precioNuevo = precio * cantidad;
        setPrice(precioNuevo);
    }

    const handleChange = (event) => {
        let tamanio = event.target.value;
        let indice = pizza.size.indexOf(tamanio);
        setSize(tamanio);

        let precio = pizza.costs[indice];
        handlePrice(precio, qty);
    };

    const generarOrder = () => {    
        let order = {
            "id": pizza.id,
            "nombre": pizza.name,
            "imagen": pizza.image,
            "tamanio": size,
            "cantidad": qty,
            "precio": price
        };
        addToCart(order);
    };
    return (
        <div>
            <Card sx={{
                width: 325,
                margin: 1.7,
                marginBottom: 3,
                //light red background
                backgroundColor: '#ffcccc',
                //shadow
                boxShadow: '0 0 10px 0 #000000',
            }}>
                <CardMedia component="img" height="140" image={pizza.image} />
                <CardContent>
                    <Typography variant="h6">Pizza {pizza.name}</Typography>
                    <Typography variant="subtitle2" color={"text.secondary"}>
                        Ingredientes: {pizza.ingredients.join(", ")}
                    </Typography>
                    
                    <FormControl size="small" fullWidth sx={{ mt: 2 , zIndex: 0}}>
                        <InputLabel id="demo-simple-select-label">Tamaño</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={size}
                            label="Tamaño"

                            onChange={handleChange}
                            defaultValue={pizza.size[1]}
                        >
                            <MenuItem value={pizza.size[0]}>{pizza.size[0]} - ${pizza.costs[0]}</MenuItem>
                            <MenuItem value={pizza.size[1]}>{pizza.size[1]} - ${pizza.costs[1]}</MenuItem>
                            <MenuItem value={pizza.size[2]}>{pizza.size[2]} - ${pizza.costs[2]}</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField sx={{ mt: 2, zIndex: 0
                        }}
                        id="pizza-cantidad"
                        type="number"
                        label="Cantidad"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{ min: 1, max: 50, value: qty }}
                        fullWidth
                        size="small"
                        onChange={handleQty}
                    />
                    <p>Precio: <b>$ {price}</b></p>
                </CardContent>

                <CardActions>
                    <Button size="small" sx={{
                        //semi dark green background
                        backgroundColor: '#037d50',
                        //rounded corners
                        borderRadius: 2,
                        //white text
                        color: 'white',
                        //same position in card
                        position: 'relative',
                        //color on hover
                        '&:hover': {
                            backgroundColor: '#05c880',
                            color: 'white',
                        },
                        //centered
                        left: '50%',
                        transform: 'translateX(-50%)',
                        //bigger button
                        width: '100%',
                    }} onClick={generarOrder} > + Agregar al carrito</Button>
                </CardActions>
            </Card>
        </div>
    )
}