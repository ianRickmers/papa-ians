import { Alert, Button, Card, CardActions, CardContent, CardMedia, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";

export default function DrinkCard({ drink, addToCart}) {


    const [qty, setQty] = useState(1);
    const [showAlert, setShowAlert] = useState(false);
    const handleQty = (event) => {
        let newQty = parseInt(event.target.value);
        setQty(newQty);

        let precio = drink.costs;
        handlePrice(precio, newQty);
    };

    const [price, setPrice] = useState(drink.costs);

    const handlePrice = (precio,cantidad) => {
        let precioNuevo = precio * cantidad;
        setPrice(precioNuevo);
    }

    const generarOrder = () => {    
        let order = {
            "id": drink.id,
            "nombre": drink.name,
            "imagen": drink.image,
            "cantidad": qty,
            "precio": price
        };
        setShowAlert(true);
        addToCart(order);
        //dissapear alert after 0.5 seconds
        setTimeout(() => {
            setShowAlert(false);
        }
            , 1000);

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
                <CardMedia component="img" height="350" image={drink.image} />
                <CardContent>
                    <Typography variant="h6"> {drink.name}</Typography>
                    <TextField sx={{ mt: 2, zIndex: 0
                        }}
                        id="drink-cantidad"
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
                    }} onClick={generarOrder} >+ Agregar al carrito</Button>
                </CardActions>
            </Card>
            {showAlert===true ? <AlertFix severity="success">Pizza agregada al carrito!</AlertFix>: null}
        </div>
    )
}

const AlertFix = styled(Alert)(({ theme }) => ({
    //always show on the bottom of the page
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    //centered
    margin: 'auto',
    //width
    width: '50%',
    //rounded corners
    borderRadius: 2,
    zIndex: 1
    //transition on show

}));