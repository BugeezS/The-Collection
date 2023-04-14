let section = document.querySelector(".card_container");

    const collection = [
        {
            name: "One Piece",
            author: "Eiichirō Oda",
            releaseYear: 1997,
            picture: "img/91-912785_homme-en-costume-debout-hombre-de-traje-png.jpeg",
            genre: ["Nekketsu", "Aventure", "Comédie"],
        },
        {
            name: "Dragon Ball",
            author: "Akira Toriyama",
            releaseYear: 1984,
            picture: "img/dragon_ball_arrive_enfin_en_streaming_en_france_637ce1a2326ae.jpg",
            genre: ["Nekketsu", "Action", "Aventure"],
        },
        {
            name: "Death Note",
            author: "Tsugumi Ōba",
            releaseYear: 2003,
            picture: "img/Death-note-image-mise-en-avant-814x700.jpg",
            genre: [" Mystère", "Thriller psychologique", "Thriller"],
        },
        {
            name: "Berserk",
            author: "Kentarō Miura",
            releaseYear: 1989,
            picture: "img/Detail-de-la-couverture-du-tome-5-de-Berserk-de-Kentaro-Miura-1041584.jpg",
            genre: ["Action", "Aventure", "Drame"]
        },
        {
            name: "Fullmetal Alchemist",
            author: "Hiromu Arakawa",
            releaseYear: 2001,
            picture: "img/Fullmetal-Alchemist.jpg",
            genre: ["Aventure", "Science Fantasy", "Steampunk"],
        },
        {
            name: "Naruto",
            author: "Masashi Kishimoto",
            releaseYear: 1999,
            picture: "img/dans_quel_ordre_regarder_naruto_-taille1200_605cb1caa419b.jpg",
            genre : ["Nekketsu", "Action"],
        },
        {
            name: "Akira",
            author: "Katsuhiro Ōtomo",
            releaseYear: 1982,
            picture: "img/64a5a8d0-1406-4178-97a5-2649504faa85.jpeg",
            genre: ["Science-fiction", "Cyberpunk", "Dystopie"],
        },
        {
            name: "Attack On Titans",
            author: "Hajime Isayama",
            releaseYear: 2009,
            picture: "img/snk-pfa.jpg",
            genre : ["Action", "Dark Fantasy", "Horreur"],
        },
        {
            name: "Monster",
            author: "Naoki Urasawa",
            releaseYear: 1994,
            picture: "img/intro-1665342673.jpg",
            genre: ["Policier, Drame, Thriller Psychologique"],
        },
        {
            name: "GTO",
            author: "Tōru Fujisawa",
            releaseYear: 1997,
            picture: "img/gto-artwork-1280x720-1.png",
            genre: ["Comédie", "Drame"],
        },
    ]

    collection.forEach(element => {
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
        deleteBtn.classList.add("del_but"),
        // deleteBtn.textContent = "Delete";
        divText.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => {
            newDiv.remove(); 
          });
    });
    

