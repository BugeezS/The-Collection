let section = document.querySelector(".card_container");
fetch("asset/liste.json")
  .then((response) => response.json())
  .then((text) => {
    for (let element of text) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("card_box");
      section.appendChild(newDiv);

      const newImg = document.createElement("img");
      newDiv.appendChild(newImg);
      newImg.classList.add("img_card");
      newImg.src = element.picture;

      const parTrois = document.createElement("p");
      newDiv.appendChild(parTrois);
      parTrois.classList.add("par_trois");
      parTrois.textContent = element.genre;

      const newH2 = document.createElement("h2");
      newDiv.appendChild(newH2);
      newH2.classList.add("h2_card");
      newH2.textContent = element.name;

      const divText = document.createElement("div");
      newDiv.appendChild(divText);
      divText.classList.add("text_card");

      const parUn = document.createElement("p");
      divText.appendChild(parUn);
      parUn.classList.add("par_un");
      parUn.textContent = element.author;

      const parDeux = document.createElement("p");
      divText.appendChild(parDeux);
      parDeux.classList.add("par_deux");
      parDeux.textContent = element.releaseYear;

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("del_but");
      // deleteBtn.textContent = "Delete";
      divText.appendChild(deleteBtn);
      deleteBtn.addEventListener("click", () => {
        newDiv.remove();
      });
    }
  });
