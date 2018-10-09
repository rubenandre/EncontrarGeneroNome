function getGender(nome){
    fetch('https://api.genderize.io/?name=' + nome).then(response => {
      return response.json();
    }).then(data => {
      let genero = data.gender
      let percentagem = data.probability
      if(genero && percentagem > 0.25){
          if(genero === 'male'){
            document.getElementById('msg').innerHTML = 'Masculino'
          } else {
            document.getElementById('msg').innerHTML = 'Feminino'
          }
      } else {
        document.getElementById('msg').innerHTML = 'Não temos a certeza'
      }
    }).catch(err => {

    });
}