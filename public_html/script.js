let socket = io();
socket.on("number", (msg) => {
  console.log("Random Number: " + msg);
});
const cardList = [
  {
    title: "Kitten 2",
    image: "image/Birman.jpg",
    link: "About Kitten 2",
    desciption: "Demo desciption about kitten 2",
  },
  {
    title: "Kitten 3",
    image: "image/Bengal.jpg",
    link: "About Kitten 3",
    desciption: "Demo desciption about kitten 3",
  },
];
const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};

const submitForm = () => {
  let formData = {};
  formData.title = $("#title").val();
  formData.subtitle = $("#subtitle").val();
  formData.path = $("#path").val();
  formData.description = $("#description").val();
  console.log("Form Data Submitted: ", formData);
};
const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.image +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.link +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.desciption +
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};
const getcards = () => {
  $.get("api/cards", (response) => {
    addCards(response.data);
  });
};
$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#formSubmit").click((event) => {
    event.preventDefault();
    submitForm();
  });
  getcards();
  addCards(cardList);
  $(".modal").modal();
});
