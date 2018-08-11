const tibia = new Tibia;
const ui = new UI;

document.getElementById('search-form').addEventListener('submit', (e) => {

  const searchedCharacter = document.getElementById('searchCharacter').value;

  if(searchedCharacter != ''){
  tibia.getCharacter(searchedCharacter)
    .then(data => {
      if(data.character.characters.error === 'Character does not exist.') {
        ui.showAlert('Character name not found', 'alert alert-danger');
        ui.clearCharacter();
      } else {
        ui.showInformations(data.character);
        ui.showDeaths(data.character.characters.deaths);
      }
    })
    .catch(e => {
      console.log(e);
      return e;
    });
  } else {
    ui.showAlert('Please enter character name', 'alert alert-danger');
    ui.clearCharacter();
  }
    


  e.preventDefault();
});