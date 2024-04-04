import results from "./100data.js";
let root = document.querySelector(".facultys__list");
let nextPage = document.querySelector(".next__page")

results.forEach((user) => {
  let template = `
      <div class="profile" data-id="${user.login.uuid}">
        <div class="dp">
          <img src="${user.picture.large}" alt="" />
        </div>
        <div class="details">
          <h4 class="faculty__name">${user.name.title} ${user.name.first} ${user.name.last}</h4>
          <p class="faculty__details">${user.location.timezone.description}</p>
        </div>
      </div>`;

  root.innerHTML += template;
});

let profileList = document.querySelectorAll(".profile");
let faculty_id;
profileList.forEach((faculty) => {
  faculty.addEventListener("click", () => {
    root.style.display = 'none'
    faculty_id = faculty.dataset["id"];
    let staff = results.find((staff) => staff.login.uuid === faculty_id);
    
    nextPage.innerHTML = `
    <div class="facultys__data">
          <div class="profile__">
            <div class="dp__">
              <img src="${staff.picture.large}" alt="" />
            </div>
            <div class="details__">
              <h2 class="faculty__name_">${staff.name.title} ${staff.name.first} ${staff.name.last}</h2>
              <p class="faculty__details_">${staff.email}</p>
              <p class="faculty__details_">${staff.location.timezone.description}</p>
              <p class="faculty__details_">2nd floor dsp lab</p>
            </div>
          </div>
        </div>`;
  });
});
