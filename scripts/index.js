const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const newPostModal = document.querySelector("#new-post-modal");
const editProfileModal = document.querySelector("#edit-profile-modal");
const cardModal = document.querySelector("#preview-modal");

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

const modalClose = cardModal.querySelector(".modal__close-btn");
const previewImg = cardModal.querySelector(".modal__image");
const previewCaption = cardModal.querySelector(".modal__caption");

const cardContainer = document.querySelector(".cards");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardItem = cardTemplate.querySelector(".card__image");

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

modalClose.addEventListener("click", function () {
  closeModal(cardModal);
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

  const inputValues = {
    name: newPostCaptionInput.value,
    link: newPostLinkInput.value,
  };

  const cardElement = getCardElement(inputValues);

  cardContainer.prepend(cardElement);

  newPostForm.reset();
  closeModal(newPostModal);
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  const likeBtn = cardElement.querySelector(".card__like-icon");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("card__like-icon_liked");
  });

  const deleteBtn = cardElement.querySelector(".card__delete-icon");
  deleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    const cardTitle = cardItem.querySelector(".card__title");
    const cardImage = cardItem.querySelector(".card__image");

    previewImg.src = data.link;
    previewImg.alt = data.name;
    previewCaption.textContent = data.name;

    openModal(cardModal);
  });

  return cardElement;
}

initialCards.forEach((element) => {
  const cardCopy = getCardElement(element);

  cardContainer.prepend(cardCopy);
});
