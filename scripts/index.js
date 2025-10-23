const newPostModal = document.querySelector("#new-post-modal");
const editProfileModal = document.querySelector("#edit-profile-modal");

const newPostOpen = document.querySelector(".profile__button");
const editProfileOpen = document.querySelector(".profile__edit-btn");

const newPostCloseBtn = newPostModal.querySelector(".form__close-btn");
const editProfileCloseBtn = editProfileModal.querySelector(".form__close-btn");

const profileName = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__subtitle");

const profileNameInput = editProfileModal.querySelector("#name-input");
const profileDescInput = editProfileModal.querySelector("#desc-input");
const newPostCaptionInput = newPostModal.querySelector("#caption-input");
const newPostLinkInput = newPostModal.querySelector("#link-input");

const editProfileForm = editProfileModal.querySelector(".modal__form");
const newPostForm = newPostModal.querySelector(".modal__form");

//Event Listeners

newPostOpen.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

editProfileOpen.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  profileNameInput.value = profileName.textContent;
  profileDescInput.value = profileDesc.textContent;
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
newPostForm.addEventListener("submit", handlePostSubmit);

//Functions

function handleEditProfileSubmit(e) {
  e.preventDefault();

  profileName.textContent = profileNameInput.value;
  profileDesc.textContent = profileDescInput.value;

  editProfileForm.reset();

  editProfileModal.classList.remove("modal_is-opened");
}

function handlePostSubmit(e) {
  e.preventDefault();

  console.log(newPostLinkInput.value);
  console.log(newPostCaptionInput.value);

  newPostForm.reset();
  newPostModal.classList.remove("modal_is-opened");
}
