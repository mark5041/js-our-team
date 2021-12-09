const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

function insertCardIntoContainer(array, container)
{
  container.innerHTML = '';
  for(let i = 0; i < team.length; i++)
  {
    const team_card = `
      <div class="team-card">
        <div class="card-image">
          <img
            src="img/${array[i].image}"
            alt="Wayne Barnett"
          />
        </div>
        <div class="card-text">
          <h3>${array[i].name}</h3>
          <p>${array[i].role}</p>
        </div>
      </div>
    `;

    container.innerHTML += team_card;
  }
}

let team_container = document.querySelector(".team-container");
insertCardIntoContainer(team, team_container);

const button = document.getElementById("addMemberButton");
const nome = document.getElementById("name");
const role = document.getElementById("role");
const image = document.getElementById("image");


button.addEventListener("click", 
  function()
  {
    let check = true;
    if(nome.value == '')
    {
      nome.placeholder = "nome non valido";
      check = false;
    }

    if(role.value == '')
    {
      role.placeholder = "ruolo non valido";
      check = false;
    }

    if(!image.value.includes(".jpg"))
    {
      image.placeholder = "immagine non valida";
      check = false;
    }

    if(check == true)
    {
      nome.placeholder = "";
      role.placeholder = "";
      image.placeholder = "";
      const newTeamObj = 
      {
        name: nome.value,
        role: role.value,
        image: image.value,
      }
      team.push(newTeamObj);
      insertCardIntoContainer(team, team_container);
    }
  }
);