class Tibia {
  constructor() {
    
  }
  async getCharacter(char) {
    const characterResponse = await fetch(`https://api.tibiadata.com/v2/characters/${char}.json`, {
      mode: 'no-cors',
      headers: {
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" : true 
      }
    });

    const character = await characterResponse.json();

    return {
      character
    }
  }
}