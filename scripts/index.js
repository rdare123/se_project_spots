const initialCards = [
  1 ==
    {
      name: "Val Thorens",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    },
  2 ==
    {
      name: "Restaurant terrace",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
    },
  3 ==
    {
      name: "An outdoor cafe",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
    },
  4 ==
    {
      name: "A very long bridge, over the forest and through the trees",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
    },
  5 ==
    {
      name: "Tunnel with morning light",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
    },
  6 ==
    {
      name: "Mountain house",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
    },
];

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
  openModal(newPostModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

editProfileOpen.addEventListener("click", function () {
  openModal(editProfileModal);
  profileNameInput.value = profileName.textContent;
  profileDescInput.value = profileDesc.textContent;
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
newPostForm.addEventListener("submit", handlePostSubmit);

//Functions

function handleEditProfileSubmit(e) {
  e.preventDefault();

  profileName.textContent = profileNameInput.value;
  profileDesc.textContent = profileDescInput.value;

  editProfileForm.reset();

  closeModal(editProfileModal);
}

function handlePostSubmit(e) {
  e.preventDefault();

  console.log(newPostLinkInput.value);
  console.log(newPostCaptionInput.value);

  newPostForm.reset();
  newPostModal.classList.remove("modal_is-opened");
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

initialCards.forEach((element) => {
  console.log(element.name);
});
