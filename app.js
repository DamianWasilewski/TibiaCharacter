const tibia = new Tibia;

document.getElementById('search-form').addEventListener('submit', (e) => {

  const searchedCharacter = document.getElementById('searchCharacter').value;

  if(searchedCharacter != ''){
  tibia.getCharacter(searchedCharacter)
    .then(data => {
      console.log(data);
    })
  }
    


  e.preventDefault();
});