let mySearchBtn = document.getElementById('mySearchBtn')
let urban = 0
let merriam = 0

//URBAN DICTIONARY SEARCH BUTTON EVENT LISTENER AND API REQUEST

mySearchBtn.addEventListener('click', event => {
  event.preventDefault()
  document.getElementById('urbanDiv1').classList.remove('pirate')
  document.getElementById('merriamDiv1').classList.remove('pirate')
  document.getElementById('urbanDiv1').innerHTML = ''

  const options1 = {
    method: 'GET',
    url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
    params: { term: document.getElementById('searchTerm1').value },
    headers: {
      'x-rapidapi-key': '5b1b7e178amsh3bc5c884fdb5116p1a97e0jsn383898b43bbd',
      'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };

  axios.request(options1).then(function (response) {
    console.log(response.data)
    let term = response.data
    let termElem = document.createElement('div')
    termElem.innerHTML = `
          ${term.list[0].definition}
        `
    console.log(termElem.textContent)

    for (let i = 0; i <= termElem.textContent.length; i++) {
      if (termElem.textContent[i] === '[' || termElem.textContent[i] === ']') {
        termElem.textContent[i] = ''
      }
    }

    document.getElementById('urbanDiv1').append(termElem)

  }).catch(function (error) {
    console.error(error)
  });

  //MERRIAM WEBSTER API REQUEST

  document.getElementById('merriamDiv1').innerHTML = ''

  axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${document.getElementById('searchTerm1').value}? key=5f89c99f-0dd2-4d8e-8a70-b6cb031e66c9`)
    .then(res => {
      let def = res.data
      console.log(def)
      let defElem = document.createElement('div')
      defElem.innerHTML = `
              ${def[0].shortdef[0]}
              `
      document.getElementById('merriamDiv1').append(defElem)
    })

})

//THIS IS THE FUNCTION FOR THE 'NEXT DEFINITION' BUTTON. IT TAKES THE MERRIAM AND URBAN VARIABLE AND INCREMENTS IT BY 1 FOR EVERY TIME THE 'NEXT DEFINITION' IS CLICKED, AND CONDUCTS A NEW REQUEST USING THAT VALUE. 

//THE PREVIOUS DEFINITION WORKS IN THE SAME WAY EXCEPT IT INCREMENTS BY MINUS ONE INSTEAD OF PLUS


//FIRST ONE IS THE MERRIAM WEBSTER NEXT DEFINITION BUTTON

let merBtn = document.getElementById('merBtn')
merBtn.addEventListener("click", event => {
  merriam++

  document.getElementById('merriamDiv1').innerHTML = ''
  console.log('ping')

  axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${document.getElementById('searchTerm1').value}? key=5f89c99f-0dd2-4d8e-8a70-b6cb031e66c9`)
    .then(res => {
      let def = res.data
      console.log(def)
      let defElem = document.createElement('div')
      defElem.innerHTML = `
              ${def[merriam].shortdef[0]}
              `
      document.getElementById('merriamDiv1').append(defElem)
    })
})

//NEXT DEFINITION BUTTON FOR URBAN DICTIONARY

let urbBtn = document.getElementById('urbBtn')
urbBtn.addEventListener('click', event => {
  urban++

  document.getElementById('urbanDiv1').innerHTML = ''


  const options1 = {
    method: 'GET',
    url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
    params: { term: document.getElementById('searchTerm1').value },
    headers: {
      'x-rapidapi-key': '5b1b7e178amsh3bc5c884fdb5116p1a97e0jsn383898b43bbd',
      'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };

  axios.request(options1).then(function (response) {
    console.log(response.data)
    let term = response.data
    let termElem = document.createElement('div')
    termElem.innerHTML = `
         ${term.list[urban].definition}
        `
    document.getElementById('urbanDiv1').append(termElem)

  }).catch(function (error) {
    console.error(error)
  });
})

//PREVIOUS DEFINITION BUTTON MERRIAM WEBSTER

let prevMer = document.getElementById('prevMer')
prevMer.addEventListener("click", event => {
  merriam--

  document.getElementById('merriamDiv1').innerHTML = ''
  console.log('ping')

  axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${document.getElementById('searchTerm1').value}? key=5f89c99f-0dd2-4d8e-8a70-b6cb031e66c9`)
    .then(res => {
      let def = res.data
      console.log(def)
      let defElem = document.createElement('div')
      defElem.innerHTML = `
              ${def[merriam].shortdef[0]}
              `
      document.getElementById('merriamDiv1').append(defElem)
    })
})

//PREVIOUS DEFINITION URBAN DICTIONARY

let prevUrb = document.getElementById('prevUrb')
prevUrb.addEventListener('click', event => {
  urban--

  document.getElementById('urbanDiv1').innerHTML = ''

  const options1 = {
    method: 'GET',
    url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
    params: { term: document.getElementById('searchTerm1').value },
    headers: {
      'x-rapidapi-key': '5b1b7e178amsh3bc5c884fdb5116p1a97e0jsn383898b43bbd',
      'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };

  axios.request(options1).then(function (response) {
    console.log(response.data)
    let term = response.data
    let termElem = document.createElement('div')
    termElem.innerHTML = `
        ${term.list[urban].definition}
        `
    document.getElementById('urbanDiv1').append(termElem)

  }).catch(function (error) {
    console.error(error)
  });
})
