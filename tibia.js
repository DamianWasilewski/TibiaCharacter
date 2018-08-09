class Tibia {
  constructor() {
    
  }
  async getCharacter(char) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const characterResponse = await fetch(proxyUrl + `https://api.tibiadata.com/v2/characters/${char}.json`);

    const character = await characterResponse.json();

    return {
      character
    }
  }
}