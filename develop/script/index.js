let searchBtn = document.getElementById('searchBtn')



//EVENT LISTENER FOR LYRICS SEARCH BUTTON,  LYRIC API REQUEST
searchBtn.addEventListener('click', event => {
  event.preventDefault()
  axios.get(`https://api.lyrics.ovh/v1/${document.getElementById('searchArtist').value}/${document.getElementById('searchSong').value}`)
    .then(res => {
      document.getElementById('songDiv').innerHTML = ''
      let song = res.data
      console.log(song)
      let lyricsElem = document.createElement('div')
      lyricsElem.innerHTML =
        `
            Lyrics:
            <br>
            <br>
            ${song.lyrics}
            
            `
      document.getElementById('songDiv').append(lyricsElem)
    })
    .catch(err => console.error(err))
})
searchBtn.addEventListener('click', event => {
  event.preventDefault()
  axios.get(`https://theaudiodb.com/api/v1/json/1/search.php?s=${document.getElementById('searchArtist').value}`)
    .then(res => {
      document.getElementById('artistDiv').innerHTML = ''
      let artist = res.data
      console.log(artist)
      let artistElem = document.createElement('image')
      artistElem.innerHTML = `
                  <img src= ${artist.artists[0].strArtistThumb} >
                `
      document.getElementById('artistDiv').append(artistElem)
      console.log('artistDiv')
    })
    .catch(err => console.error(err))
})


//URBAN DICTIONARY SEARCH BUTTON EVENT LISTENER AND API REQUEST


let searchTerm = document.getElementById('searchTerm')

searchTerm.addEventListener('click', event => {


  event.preventDefault()
  // if (event.target.classList.contains('urbanBtn')) {
  // document.getElementById('searchTerm').addEventListener('click', event => {
  //   event.preventDefault()
  document.getElementById('urbanDiv').innerHTML = ''
  const options = {
    method: 'GET',
    url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
    params: { term: document.getElementById('search').value },
    headers: {
      'x-rapidapi-key': '5b1b7e178amsh3bc5c884fdb5116p1a97e0jsn383898b43bbd',
      'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };
  axios.request(options).then(function (response) {
    console.log(response.data)
    let term = response.data
    // for (let i = 0; i<response.data.list.length; i++) {
    let termElem = document.createElement('div')
    termElem.className = ''
    termElem.innerHTML = `
            <p>Definition: ${term.list[0].definition}<p>
             `
    document.getElementById('urbanDiv').append(termElem)
  }).catch(function (error) {
    console.error(error)
  });


  //MERRIAM WEBSTER API REQUEST
  // if (event.target.classList.contains('merriamBtn')) {
  // document.getElementById('searchTerm').addEventListener('click', event => {
  // event.preventDefault()
  document.getElementById('merriamDiv').innerHTML = ''
  axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${document.getElementById('search').value}? key=5f89c99f-0dd2-4d8e-8a70-b6cb031e66c9`)
    .then(res => {
      let def = res.data
      console.log(def)
      let defElem = document.createElement('div')
      defElem.className = ''
      defElem.innerHTML = `
              ${def[0].shortdef[0]}
              `
      document.getElementById('merriamDiv').append(defElem)
    })


})

//NEXT AND PREVIOUS DEFINITION BUTTONS

let merBtn = document.getElementById('merBtn')

let merriam = 0
let urban = 0



merBtn.addEventListener("click", event => {
  merriam++

  document.getElementById('merriamDiv').innerHTML = ''
  console.log('ping')

  axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${document.getElementById('search').value}? key=5f89c99f-0dd2-4d8e-8a70-b6cb031e66c9`)
    .then(res => {
      let def = res.data
      console.log(def)
      let defElem = document.createElement('div')
      defElem.className = ''
      defElem.innerHTML = `
              ${def[merriam].shortdef[0]}
              `
      document.getElementById('merriamDiv').append(defElem)
    })
})

//NEXT DEFINITION BUTTON FOR URBAN DICTIONARY

let urbBtn = document.getElementById('urbBtn')

urbBtn.addEventListener('click', event => {

  urban++

  document.getElementById('urbanDiv').innerHTML = ''


  const options1 = {
    method: 'GET',
    url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
    params: { term: document.getElementById('search').value },
    headers: {
      'x-rapidapi-key': '5b1b7e178amsh3bc5c884fdb5116p1a97e0jsn383898b43bbd',
      'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };

  axios.request(options1).then(function (response) {
    console.log(response.data)
    let term = response.data

    // for (let i = 0; i<response.data.list.length; i++) {

    let termElem = document.createElement('div')

    termElem.className = ''
    termElem.innerHTML = `
        
          ${term.list[urban].definition}
        `
    document.getElementById('urbanDiv').append(termElem)



  }).catch(function (error) {
    console.error(error)
  });


}
)

//PREVIOUS DEFINITION BUTTON MERRIAM WEBSTER

let prevMer = document.getElementById('prevMer')

prevMer.addEventListener("click", event => {
  merriam--

  document.getElementById('merriamDiv').innerHTML = ''
  console.log('ping')

  axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${document.getElementById('search').value}? key=5f89c99f-0dd2-4d8e-8a70-b6cb031e66c9`)
    .then(res => {
      let def = res.data
      console.log(def)
      let defElem = document.createElement('div')
      defElem.className = ''
      defElem.innerHTML = `
              ${def[merriam].shortdef[0]}
              `
      document.getElementById('merriamDiv').append(defElem)
    })
})


//PREVIOUS DEFINITION URBAN DICTIONARY

let prevUrb = document.getElementById('prevUrb')

prevUrb.addEventListener('click', event => {

  urban--

  document.getElementById('urbanDiv').innerHTML = ''


  const options1 = {
    method: 'GET',
    url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
    params: { term: document.getElementById('search').value },
    headers: {
      'x-rapidapi-key': '5b1b7e178amsh3bc5c884fdb5116p1a97e0jsn383898b43bbd',
      'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };

  axios.request(options1).then(function (response) {
    console.log(response.data)
    let term = response.data

    // for (let i = 0; i<response.data.list.length; i++) {

    let termElem = document.createElement('div')

    termElem.className = ''
    termElem.innerHTML = `
        
          ${term.list[urban].definition}
        `


    // termElem.replace(/[\[\]']+/g, '')
    document.getElementById('urbanDiv').append(termElem)



  }).catch(function (error) {
    console.error(error)
  });


}
)