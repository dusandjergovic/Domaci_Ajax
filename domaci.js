$(document).ready(function(){

    $.ajax({
        url: 'https://reqres.in/api/users?page=2',
        success: function(response) {
            
            // petljom prolazimo kroz array
            response['data'].forEach(people => {

                // kreiranje HTML elementa i ubacivanje teksta u njih
                let userCard = $('<div></div>');
                let userName = $('<span></span>').text(`${people.first_name}`);
                let userEmail = $('<p></p>').text(`${people.email}`);
                userCard.append(userName, userEmail);

                // pravljenje img elementa i ubacivanje slika korisnika
                let avatar = people.avatar;
                let imgAvatar = $('<img>');
                imgAvatar.attr('src', avatar)

                // ubacivanje slike u div userCard
                userCard.append(imgAvatar)

                // ubacivanje vec sredjenog userCard-a u 'container'
                $("section").append(userCard);
            })
        }
    })

})