import Board from "./Components/Board/Board";
import PlayersModal from "./Components/PlayersModal";
import SelectRegionModal from "./Components/SelectRegionModal";
import backgroundImg from "./Assets/background.jpg"
import Players from "./Components/DiceAndPlayers/Players";
import SnakesModal from "./Components/SnakesModal";
import WinnerModal from "./Components/WinnerModal";

function App() {
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
      <SnakesModal />
      <WinnerModal />
    </div>
  );
}

export default App;
