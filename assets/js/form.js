function testaFormulario(e) {
    e.preventDefault();

           // validar o campo Phone//
    var phonePattern = /[^0-9-() ]+/g
    if (phonePattern.test(e.target.elements['phone'].value)) {
        alert('Apenas números são permitidos no campo telefone!')
        return false
        
    }
    

    if (e.target.elements['phone'].value.replace(/[-() ]/g, '').length < 11) {
        alert('Número inválido!')
        return false
    }
        // Fim validar o campo Phone// 
      
    var peopleRaw = localStorage.getItem('people')
    if (peopleRaw != null) {
        var people = JSON.parse(peopleRaw)
    } else { 
        var people = [];
    }
    
    if (id !== null) {
        people[id]={   
          name: e.target.elements['name'].value,
          tel:  e.target.elements['phone'].value,
          xp:  (e.target.elements['xp'].value == 'true')
        }
    
    } else {

        people.push({
            name: e.target.elements['name'].value,
            tel:  e.target.elements['phone'].value,
            xp:  (e.target.elements['xp'].value == 'true')
        })
    }

    localStorage.setItem('people', JSON.stringify(people))
    
    document.getElementById('goHome').click()
}

var urlPrincipal = new URL(window.location.href)

var id = urlPrincipal.searchParams.get('person')
if (id !== null) {
  var peopleRaw = localStorage.getItem('people')
  
    if (peopleRaw != null) {
        var people = JSON.parse(peopleRaw)
    } else { 
        var people = [];
    }
    
    console.log(people[id])
  
    document.getElementById('name').value = people[id].name
    document.getElementById('phone').value = people[id].tel
    
    if (people[id].xp) {
        document.getElementById('xp-yes').checked = true
    } else {
        document.getElementById('xp-no').checked = true
    }
}  

function testaCampoTelefone(e) {
    e.preventDefault()
    console.log(e)
      //Coloca (() e - e posiçoes de caracter)
    if (e.target.value.length == 0) {
        e.target.value += '('  
    }

    if (e.target.value.length == 3) {
        e.target.value += ') '  
    }

    if (e.target.value.length == 10) {
        e.target.value += '-'  
    }

       //Permiti até 15 caracter no Tel)
    if ((/[0-9]/g).test(e.key) && e.target.value.length < 15) {
        e.target.value += e.key 
      
    }

}


