import { Typography } from "@mui/material";

const Tile = ({ tileNumber }) => {

    return (
        <div
            style={{
                height: '80px',
                border: '1px solid #ccc',
                width: '88px',
                display: 'inline-block'
            }}
            id={tileNumber}
        >
            <Typography variant="h5">{tileNumber}</Typography>
        </div >


    )
}

export default Tile;