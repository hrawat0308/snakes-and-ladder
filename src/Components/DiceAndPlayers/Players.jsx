import { Button, Typography } from "@mui/material";
import Dice from "./Dice";
import { useDispatch, useSelector } from "react-redux";

const Players = () => {
    const player1 = useSelector((state) => state.game.player1);
    const player2 = useSelector((state) => state.game.player2);
    const player3 = useSelector((state) => state.game.player3);
    const player4 = useSelector((state) => state.game.player4);
    const player5 = useSelector((state) => state.game.player5);
    const player6 = useSelector((state) => state.game.player6);

    const numberOfPlayers = useSelector((state) => state.game.numberOfPlayers);
    let players = [player1, player2, player3, player4, player5, player6];
    players = players.slice(0, numberOfPlayers);
    return (
        <div
            style={{
                position: 'absolute',
                top: 70,
                left: 100,
                backgroundColor: '#FFF18566',
                padding: 40,
                borderRadius: '20px',
            }}
        >
            <Typography style={{ fontFamily: 'Gluten', fontSize: '40px', fontWeight: 500 }}>Player List</Typography>
            <div>
                {
                    players.map((player) => {
                        return (
                            <div
                                key={player.name}
                                style={{
                                    padding: 10,
                                    backgroundColor: player.on && '#FFF18580',
                                    borderRadius: '20px',
                                    border: player.on && '3px solid  #FEA102',
                                    display: 'flex',
                                    alignItems: 'center',
                                    columnGap: 10,
                                    marginTop: 5,
                                    marginBottom: 5
                                }}>
                                <div style={{ height: 20, width: 20, backgroundColor: player.color, borderRadius: '20px' }}></div>
                                <Typography
                                    style={{
                                        fontFamily: 'Gluten',
                                        width: '90%',
                                        fontSize: '24px',
                                        color: player.on && player.color
                                    }}
                                >
                                    {player.name}{player.on && ' is playing'}
                                </Typography>
                            </div>
                        )
                    })
                }
            </div>
            <Dice />
        </div>
    )
}

export default Players;