import { Button, Stack, Typography } from "@mui/material";
import Board from "./Components/Board/Board";
import PlayersModal from "./Components/PlayersModal";
import SelectRegionModal from "./Components/SelectRegionModal";
import Token from "./Components/Token/Token";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "./Store";
import backgroundImg from "./Assets/background.jpg"
import Players from "./Components/DiceAndPlayers/Players";

function App() {
  const dispatch = useDispatch();
  const dice = useSelector((state) => state.game.dice);
  const player1 = useSelector((state) => state.game.player1);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'contain',
        // backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%'
      }}>
      <Players />
      <Board />
      <SelectRegionModal />
      <PlayersModal />
    </div>
  );
}

export default App;
