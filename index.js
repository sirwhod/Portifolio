const divCards = document.querySelector('#cardsMyProjects')

const profile = document.querySelector('#profile')

function getAPIGitHub() {
  fetch('https://api.github.com/users/sirwhod/repos')
    .then(async res => {

      if(!res.ok) {
        throw new Error(res.status)
      }

      var data = await res.json()

      data.map(item => {
        let div = document.createElement('div')

        div.innerHTML = `
        
          <div class="title">
            <img src="./assets/icons/folder.svg" alt="" />
            <h3>${item.name}</h3>
          </div>

          <p>
            ${item.description}
          </p>

          <div class="footer">
            <div class="actionButtons">
              <div class="actionButton">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1.66667L12.575 6.88334L18.3333 7.725L14.1667 11.7833L15.15 17.5167L10 14.8083L4.85001 17.5167L5.83334 11.7833L1.66667 7.725L7.42501 6.88334L10 1.66667Z"
                    stroke="#797979"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>${item.stargazers_count}</p>
              </div>
              <div class="actionButton">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 2.5V12.5"
                    stroke="#797979"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 7.5C16.3807 7.5 17.5 6.38071 17.5 5C17.5 3.61929 16.3807 2.5 15 2.5C13.6193 2.5 12.5 3.61929 12.5 5C12.5 6.38071 13.6193 7.5 15 7.5Z"
                    stroke="#797979"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 17.5C6.38071 17.5 7.5 16.3807 7.5 15C7.5 13.6193 6.38071 12.5 5 12.5C3.61929 12.5 2.5 13.6193 2.5 15C2.5 16.3807 3.61929 17.5 5 17.5Z"
                    stroke="#797979"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15"
                    stroke="#797979"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>${item.forks_count}</p>
              </div>
            </div>

            <div class="mostTecnologieUsed">
              <div class="status"></div>
              <a href="${item.html_url}">
              <p>Ver Mais</p>
              </a>
            </div>
          </div>  
      
        `

        divCards.appendChild(div).classList.add('card')

      })

    }).catch(err => {console.error(err)})
}

getAPIGitHub()

function getAPIGitHubProfile() {
  fetch('https://api.github.com/users/sirwhod')
    .then(async res => {

  if(!res.ok) {
    throw new Error(res.status)
  }

  var data = await res.json()

  console.log(data)

  let div = document.createElement('div')

    div.innerHTML = `<img
    src="${data.avatar_url}"
    alt="Imagem de Perfil"
    />
    <p class="name">${data.name}</p>
    <p class="subtitle">${data.bio}</p>`

    profile.appendChild(div)


}).catch(err => {console.error(err)})
}

getAPIGitHubProfile()