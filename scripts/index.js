const newPostModal = document.querySelector("#new-post-modal");
const editProfileModal = document.querySelector("#edit-profile-modal");

const newPostOpen = document.querySelector(".profile__button");
const editProfileOpen = document.querySelector(".profile__edit-btn");

const newPostCloseBtn = newPostModal.querySelector(".form__close-btn");
const editProfileCloseBtn = editProfileModal.querySelector(".form__close-btn");

newPostOpen.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

editProfileOpen.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});
