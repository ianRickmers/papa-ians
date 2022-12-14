import { styled } from "@mui/material/styles";
import { Box, ButtonBase} from "@mui/material";
import armatupizza from "../data/images/armatupizza.jpg";
import eligetupizza_v2 from "../data/images/eligetupizza_v2.jpg";

const Index = () => {

    //load cart from local storage
    
    return ( 
        <Box sx={{
            minWidth: 300,
            width: '100%',
            minHeight: 400,
            padding: 2,
            backgroundColor: 'white',
            //not in the top
            //to the back 
            zIndex: -1,
            //smooth border
            borderRadius: 7,
        }}>
            <Box sx={{
                padding: 2,
                ml: 8,
            }}>
            <ImageButton
                focusRipple
                href="/store"
                >

                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                    <ImageSrc style={{ backgroundImage: `url(${eligetupizza_v2})` }} />

                </Image>
            </ImageButton>
            </Box> 
            <Box sx={{
                padding: 2,
                ml: 8,
            }}>
            <ImageButton>

                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                    <ImageSrc style={{ backgroundImage: `url(${armatupizza})` }} />
                </Image>
            </ImageButton>
            </Box>
        </Box>
    )
}

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 500,
    width: 1000,
    //green smooth border
    border: '5px solid #008000',
    borderRadius: 10,
    //black Shadow
    boxShadow: '0 0 10px 0 #000000',

}));

const ImageSrc = styled('span')({
    position: 'absolute',
    backgroundRepeat: 'no-repeat',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 1000,
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

export default Index