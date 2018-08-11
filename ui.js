class UI {
  constructor() {
    this.character = document.getElementById('characterInformations');
  }

  showInformations(char) {

    this.character.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
           <img class="img-fluid mb-2" src="images/logo.jpg" alt="character image">
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">World: ${char.characters.data.world}</span>
            <span class="badge badge-info">Status: ${char.characters.data.status}</span>
            <span class="badge badge-info">Account status: ${char.characters.data.account_status}</span>
            <br>>br>
            <ul class="list-group">
              <li class="list-group-item"><strong>Name: </strong>${char.characters.data.name}</li>
              <li class="list-group-item"><strong>Sex: </strong>${char.characters.data.sex}</li>
              <li class="list-group-item"><strong>Level: </strong>${char.characters.data.level}</li>
              <li 
              <li class="list-group-item"><strong>Vocation: </strong>${char.characters.data.vocation}</li>
              <li class="list-group-item"><strong>Achievement points: </strong>${char.characters.data.achievement_points}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Deaths: </h3>
      <div id="deaths"></div>
    `;
  }

  showDeaths(deaths) {
    let output = '';

    deaths.forEach(function(death) {
      let deathDate = moment(death.date.date).format("L");
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <span class="badge badge-primary death-badge">${deathDate} </span>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary death-badge">${death.level} </span>
              <span class="badge badge-primary death-badge">${death.reason} </span>
            </div>
          </div>
        </div>
      `;
    })
    document.getElementById('deaths').innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlertMessage();
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.searchContainer');
    const informations = document.querySelector('.informations');
    container.insertBefore(div, informations);

    setTimeout(() => {
      this.clearAlertMessage();
    }, 2000);
  }

  clearAlertMessage() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }

  clearCharacter() {
    this.character.innerHTML = '';
  }
}