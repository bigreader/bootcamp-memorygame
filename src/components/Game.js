import React from 'react';
import Tile from './Tile';
import './Game.css';

const tiles = [
  { id: 'dipper', img: 'https://vignette.wikia.nocookie.net/gravityfalls/images/c/cb/S1e16_dipper_will_take_room.png/revision/latest?cb=20160119145706' },
  { id: 'mabel', img: 'https://vignette.wikia.nocookie.net/gravityfalls/images/b/b2/S1e3_mabel_new_wax_figure.png/revision/latest?cb=20160204031402' },
  { id: 'stanley', img: 'https://vignette.wikia.nocookie.net/gravityfalls/images/9/92/S1e16_something_about_you.png/revision/latest?cb=20130530141339' },
  { id: 'wendy', img: 'https://vignette.wikia.nocookie.net/gravityfalls/images/3/35/S1e5_wendy_leaning_on_atm.png/revision/latest?cb=20130603020244' },
  { id: 'soos', img: 'https://vignette.wikia.nocookie.net/gravityfalls/images/b/bb/S1e13_whole_busload_of_em.png/revision/latest?cb=20151221063833' },
  { id: 'gideon', img: 'https://vignette.wikia.nocookie.net/gravityfalls/images/e/e5/S1e11_gideon_is_angry.png/revision/latest?cb=20140427211927' },
  { id: 'mcgucket', img: 'https://vignette.wikia.nocookie.net/gravityfalls/images/f/f5/S1e14_if_you_survive.png/revision/latest?cb=20130305201426' },
  { id: 'stanford', img: 'https://vignette.wikia.nocookie.net/gravityfalls/images/b/b7/S2e13_ha_ha_ha_dipper.jpg/revision/latest?cb=20150805055839' },
  { id: 'pacifica', img: 'https://vignette.wikia.nocookie.net/gravityfalls/images/f/f7/S1e7_Pacifica_Northwest.png/revision/latest?cb=20151116020530' },
  { id: 'robbie', img: 'https://vignette.wikia.nocookie.net/gravityfalls/images/c/c8/S1e5_robbie_with_guitar.png/revision/latest?cb=20160204171654' },
  { id: 'bill', img: 'https://vignette.wikia.nocookie.net/gravityfalls/images/e/ea/S1e19_bill_snap.png/revision/latest?cb=20130905173319' },
  { id: 'waddles', img: 'https://vignette.wikia.nocookie.net/gravityfalls/images/0/09/S1e18_Waddles_stare.png/revision/latest?cb=20160119145820' }
];

class Game extends React.Component {
  state = {
    score: 0,
    clicked: [],
    tiles: tiles
  }

  handleClick = (id) => {
    if (this.state.clicked.includes(id)) {
      this.setState({
        score: 0,
        clicked: []
      });
    } else {
      this.setState({
        score: this.state.score + 1,
        clicked: this.state.clicked.concat(id)
      });
    }
    this.shuffle();
  }

  shuffle = () => {
    this.setState({
      tiles: tiles.sort(_ => Math.random()-0.5)
    })
  }

  componentDidMount() {
    this.shuffle();
  }

  render() {
    return (
      <div id='game'>
        <div id='status'>
          <h1>Memory Game</h1>
          <p style={{ fontSize: '1.5em' }}>Score: {this.state.score}</p>
        </div>
        <div id='tiles'>
          {this.state.tiles.map(tile => (
            <Tile id={tile.id} img={tile.img} onClick={() => this.handleClick(tile.id)} />
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
