import { Modal, Box, Typography, Stack, Button, TextField, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "../Store";
import Regions from '../Utils/Regions.json';
import { useState } from "react";


const SelectRegionModal = () => {
    const dispatch = useDispatch();
    const regionModal = useSelector((state) => state.game.regionModal);
    const selectedRegionId = useSelector((state) => state.game.selectedRegionId);
    const [save, setSave] = useState(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: '#FFF',
        boxShadow: 24,
        p: 4,
        borderRadius: '5px',
    };

    const onNextHandler = () => {
        dispatch(gameActions.setRegionModalClose());
        dispatch(gameActions.setPlayersOpen());
    }

    return (
        <Modal
            open={regionModal}
            slotProps={{
                backdrop: {
                    sx: {
                        backgroundColor: 'rgba(1, 1, 1, 0.9)',
                    },
                },
            }}
        >
            <Box sx={style}>
                <Stack rowGap={3}>
                    <Typography variant="h5">Select a Region</Typography>

                    <TextField
                        id="region"
                        label="Region"
                        variant="outlined"
                        defaultValue={''}
                        value={selectedRegionId || ''}
                        select
                        SelectProps={{ MenuProps: { sx: { maxHeight: 300 } } }}
                        onChange={(e) => {
                            dispatch(gameActions.setSelectedRegion({ selectedRegionId: e.target.value }));
                            setSave(true);
                        }}
                    >
                        {
                            Regions.map((region) => {
                                return (
                                    <MenuItem
                                        sx={{ fontWeight: 300, padding: 1.5 }}
                                        key={region.id}
                                        value={region.id}
                                    >
                                        {region.region}
                                    </MenuItem>
                                )
                            })
                        }
                    </TextField>
                    <Stack direction="row" justifyContent="center">
                        <Button disabled={!save} variant="contained" onClick={onNextHandler}>Next</Button>
                    </Stack>
                </Stack>
            </Box>
        </Modal>
    )
}

export default SelectRegionModal;