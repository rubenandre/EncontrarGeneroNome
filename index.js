const getGender = nome => {
    fetch('https://api.genderize.io/?name=' + nome).then(res => {
        return res.json()
    }).then(data => {
        let gender = data.gender
        let probability = data.probability

        document.getElementById('msg').innerHTML = probability > 0.6 ? gender : 'Não temos a certeza'

    }).catch(err => {
        if (err) alert('Ocorreu um erro inesperado na conexão com o servidor')
    })
}