import { Button, Typography } from "@mui/material";
import Dice from "./Dice";


const Players = () => {
    let colors = ['#CC2B22', '#4ECC22', '#2233CC', '#CC2269', 'yellow', 'purple'];
    const players = [
        {
            name: 'Player 1',
            active: false,
            color: '#CC2B22'
        },
        {
            name: 'Player 2',
            active: false,
            color: '#4ECC22'
        },
        {
            name: 'Player 3',
            active: false,
            color: '#2233CC'
        },
        {
            name: 'Player 4',
            active: false,
            color: '#CC2269'
        },
        {
            name: 'Player 5',
            active: false,
            color: 'yellow',
        },
        {
            name: 'Player 6',
            active: false,
            color: 'purple'
        }
    ];
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
                                style={{
                                    padding: 10,
                                    backgroundColor: player.active && '#FFF18580',
                                    borderRadius: '20px',
                                    border: player.active && '3px solid  #FEA102',
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
                                        color: player.active && player.color
                                    }}
                                >
                                    {player.name}{player.active && ' is playing'}
                                </Typography>
                            </div>
                        )
                    })
                }
            </div>
            <Dice />
            <Button
                style={{
                    backgroundColor: '#CC2B22',
                    color: '#FFF',
                    fontFamily: 'Gluten',
                    marginTop: 50,
                    marginLeft: 30,
                    height: '57px',
                    width: '238px',
                    borderRadius: '8px',
                    fontSize: '24px',
                    fontWeight: 500
                }}
            >
                Roll Dice
            </Button>
        </div>
    )
}

export default Players;