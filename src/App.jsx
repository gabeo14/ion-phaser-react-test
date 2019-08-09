import React, { Component } from 'react'
import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'

class App extends Component {
  state = {
    initialize: true,
    game: {
      width: '100%',
      height: '100%',
      type: Phaser.AUTO,
      scene: {
        init: function() {
          this.cameras.main.setBackgroundColor('#24252A')
        },
        create: function() {
          this.helloWorld = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'Hello World',
            {
              font: '40px Arial',
              fill: '#ffffff'
            }
          )
          this.helloWorld.setOrigin(0.5)
        },
        update: function() {
          this.helloWorld.angle += 1
        }
      }
    }
  }

  componentDidMount() {
    new Phaser.Game(this.state.game)
  }

  render() {
    const { initialize, game } = this.state
    console.log(initialize, game)
    return <IonPhaser game={game} initialize={initialize} />
  }
}

export default App
