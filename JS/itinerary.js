var formHandle = document.forms.form;
var province_selection = formHandle.province;
formHandle.onsubmit = submitForm;
var name_of_place = document.getElementById('name_of_place');
var selectedCity = document.getElementById('city');
var selectedProvince = document.getElementById('province');
var result_filter = document.getElementById('hide');

// Save all place object in to array
const allPlaces = [
    {
        name: 'Fort York National Historic Site',
        city: 'Toronto',
        Province: 'Ontario',
        Open_hours: '11am-4pm',
        Booking_information: 'Not Needed',
        Admission_charge: 'Free',
        Address: '250 Fort York Blvd, Toronto, ON M5V 3K9',
        type: 'Historic',
        // Source: https://www.google.com/search?sxsrf=ALiCzsZW_xvath9NmIVcD8AVs-otp9Di0A:1671098655032&q=fort+york+national+historic+site+image&tbm=isch&chips=q:fort+york+national+historic+site+image,online_chips:york+toronto:kaUTryCcSes%3D&usg=AI4_-kRyJ3bfTgdiNHWmpU3MK5Rp4cMMRQ&sa=X&ved=2ahUKEwj02d7Nr_v7AhUhVd8KHW2mCmoQgIoDKAF6BAgHEBU&biw=822&bih=984&dpr=2#imgrc=ab5-jyjoPZADSM
        photo: './Image/result_image/fort.webp'
    }, {
        name: 'Historical Plaque - Queen`s Park',
        city: 'Toronto',
        Province: 'Ontario',
        Open_hours: '24 hour',
        Booking_information: 'Not Needed',
        Admission_charge: 'Free',
        Address: 'Unnamed Road, Toronto, ON',
        type: 'Historic',
        // Sourc: https://www.google.com/search?q=Historical+Plaque+-+Queens+Park&sxsrf=ALiCzsYyyuN8gwUVS_ffVKeL90BgYhyAsw:1671099173770&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi-8ovFsfv7AhWNZN8KHSGyD7QQ_AUoAnoECAEQBA&biw=822&bih=984&dpr=2#imgrc=esjaHXVdpsBySM&imgdii=uoU4jCSCTTvqsM
        photo: './Image/result_image/queen.jpeg'
    },
    {
        name: 'Cherry Beach',
        city: 'Toronto',
        Province: 'Ontario',
        Open_hours: '24 hour',
        Booking_information: 'Not Needed',
        Admission_charge: 'Free',
        Address: 'Unwin Avenue, Toronto, ON',
        type: 'Beaches',
        // Source: https://www.google.com/search?q=name:+%27Cherry+Beach%27,&sxsrf=ALiCzsayBrWv31GE10Pzc11k8N8zaKky6g:1671099320985&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiak6WLsvv7AhXELFkFHUhbA98Q_AUoAXoECAEQAw&biw=822&bih=984&dpr=2#imgrc=1mtHt3nUqZtAkM
        photo: './Image/result_image/cherry.jpeg'
    },
    {
        name: 'Toronto Island Park',
        city: 'Toronto',
        Province: 'Ontario',
        Open_hours: '7am-8pm',
        Booking_information: '<a href = "https://secure.toronto.ca/FerryTicketOnline/tickets2/index.jsp" target="_blank">https://secure.toronto.ca/FerryTicketOnline/tickets2/index.jsp</a>',
        Admission_charge: '8.95$',
        Address: 'Centre Island Ferry Dock, Toronto, ON',
        type: 'Beaches',
        // Source: https://www.google.com/search?q=toronto+island+park+image&sxsrf=ALiCzsb3__Qoln_w7Kx2_OTUG_QwPZVmxg%3A1671099451565&ei=O_SaY5OQIqDU5NoPkOKz6AQ&ved=0ahUKEwjTmcfJsvv7AhUgKlkFHRDxDE0Q4dUDCA8&uact=5&oq=toronto+island+park+image&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIGCAAQFhAeMgUIABCGAzIFCAAQhgMyBQgAEIYDMgUIABCGAzoKCAAQRxDWBBCwAzoHCAAQsAMQQzoNCAAQ5AIQ1gQQsAMYAToMCC4QyAMQsAMQQxgCOhIILhDHARCvARDIAxCwAxBDGAI6BQgAEIAEOgsILhCvARDHARCABDoJCAAQFhAeEPEEOgIIJjoFCCEQoAE6BAghEBVKBAhBGABKBAhGGAFQpAZY2CNgwiVoBHAAeACAAW2IAdoGkgEDNS40mAEAoAEByAETwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz-serp#imgrc=HLmSxKm-rfyLPM
        photo: './Image/result_image/central.jpeg'

    },
    {
        name: 'Centreville Amusement Park',
        city: 'Toronto',
        Province: 'Ontario',
        Open_hours: '10:30am-07:00pm',
        Booking_information: '<a href = "https://www.centreisland.ca/centreville-amusement-park/ticket-packges" target="_blank"> https://www.centreisland.ca/centreville-amusement-park/ticket-packges </a>',
        Admission_charge: '79.65$',
        Address: '9 Queens Quay W, Toronto, ON M5J 2H3',
        type: 'Adventure',
        // Source: https://www.google.com/search?q=centreville+amusement+park&sxsrf=ALiCzsaAUKebowM1VoO5eE6DQPFkNGXqqA:1671099579283&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiLv7qGs_v7AhVjTt8KHbUuASAQ_AUoAXoECAEQAw&biw=822&bih=984&dpr=2
        photo: './Image/result_image/centreville-amusement.jpg'
    },
    {
        name: 'Canada’s Wonderland',
        city: 'Toronto',
        Province: 'Ontario',
        Open_hours: '5pm to 10pm',
        Booking_information: '<a href="https://www.canadaswonderland.com/events/winterfest/tickets" target="_blank">https://www.canadaswonderland.com/events/winterfest/tickets</a>',
        Admission_charge: 'Winterfest: 29.99$',
        Address: '1 Canada`s Wonderland Drive, Vaughan, ON L6A 1S6',
        type: 'Adventure',
        // Source:https://www.google.com/search?q=wonderland+toronto&sxsrf=ALiCzsbgUXnAns8ZuRCT4raDrl6OIPHl6g:1671089682171&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjD2ZKXjvv7AhVOFlkFHYxZCxsQ_AUoAnoECAEQBA&biw=727&bih=984&dpr=2#imgrc=rYVnhCjdqmhJtM
        photo: './Image/wonderland.png'
    },
    {
        name: 'The Old Spaghetti Factory',
        city: 'Toronto',
        Province: 'Ontario',
        Open_hours: '12pm to 10pm',
        Booking_information: 'Not needed',
        Admission_charge: 'AS your order',
        Address: '54 The Esplanade, Toronto, ON M5E 1A6',
        type: 'Restaurant',
        // Source: https://www.blogto.com/restaurants/oldspaghettifactory/
        photo: './Image/result_image/old.webp'

    },
    {
        name: 'Elephant & Castle',
        city: 'Toronto',
        Province: 'Ontario',
        Open_hours: '9:30am to 1am',
        Booking_information: 'Not needed',
        Admission_charge: 'AS your order',
        Address: '212 King St W, Toronto, ON M5H 1K5',
        type: 'Restaurant',
        // Source:https://www.tripadvisor.co.uk/LocationPhotoDirectLink-g186338-d3239928-i66066348-The_Elephant_Castle_Pub-London_England.html
        photo: './Image/result_image/castle.jpeg'
    },
    {
        name: 'Toronto Zoo',
        city: 'Toronto',
        Province: 'Ontario',
        Open_hours: '9:30am-4:30pm',
        Booking_information: '<a href="https://www.torontozoo.com/" target="_blank">https://www.torontozoo.com/</a>',
        Admission_charge: '22.20$',
        Address: '2000 Meadowvale Rd, Toronto, ON M1B 5K7',
        type: 'Wildlife',
        // https://www.google.com/search?q=https://www.toronto+zoo+photo&sxsrf=ALiCzsaeRlohbTRH1-qlDxp9FZUyDszCCw:1671100350977&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjl8Lb2tfv7AhUdFVkFHcAtBLYQ_AUoAXoECAEQAw&biw=656&bih=984&dpr=2#imgrc=4kx7OtTTW9AXdM
        photo: './Image/result_image/zoo.jpeg'
    },
    {
        name: 'Ripley`s Aquarium of Canada',
        city: 'Toronto',
        Province: 'Ontario',
        Open_hours: '9am-9pm',
        Booking_information: '<a href="https://www.ripleyaquariums.com/canada/" target="_blank">https://www.ripleyaquariums.com/canada/</a>',
        Admission_charge: '44.00$',
        Address: '288 Bremner Blvd, Toronto, ON M5V 3L9',
        type: 'Wildlife',
        //  Source: https://www.ripleyaquariums.com/canada/files/2013/03/RipleysAquarium-MoonJellies.jpeg
        photo: './Image/jellyfish.jpeg'

    },
    {
        name: 'Honest Restaurant',
        city: 'Brampton',
        Province: 'Ontario',
        Open_hours: '11:30am-10pm',
        Booking_information: 'Not needed',
        Admission_charge: 'Depends on order',
        Address: '1 Steeles Ave East Brampton, Ontario L6W 4J4',
        type: 'Restaurant',
        // Source: https://www.google.com/search?q=honest+brampton+photo&sxsrf=ALiCzsZyY6CYle2TUjnUuxDAcl8ZYFBTLw:1671100469195&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjyteautvv7AhXpLFkFHRxTAOoQ_AUoAnoECAEQBA&biw=656&bih=984&dpr=2
        photo: './Image/result_image/honest.jpeg'
    },
    {
        name: 'Treetop Trekking Hamilton',
        city: 'Hamilton',
        Province: 'Ontario',
        Open_hours: '10am-4pm',
        Booking_information: 'Not needed',
        Admission_charge: 'Free',
        Address: '5050 Harrison Rd, Binbrook, ON L0R 1C0',
        type: 'Adventure',
        // Source: https://www.google.com/search?q=treetop+trekking+hamilton&sxsrf=ALiCzsZbM1z0nXrlyrN3FCJOzY1ycyqXcQ:1671100589385&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjSn47otvv7AhWrdt8KHQ6kAZAQ_AUoAnoECAIQBA&biw=656&bih=984&dpr=2#imgrc=W5xEIWu7uD3NOM
        photo: './Image/result_image/trekking.jpeg'
    },
];

//when page load hide the result cards formate
result_filter.style.display = 'none';

// made any empty arrays to store the selected values
var cityOptions = [];
var provincePlaces = [];
var cityPlaces = [];
var selectedCategories = [];

// when change happen province selection value of city changing
selectedProvince.addEventListener('change', handleProvinceChange);
function handleProvinceChange() {
    if (selectedProvince.value == 'Ontario') {
        cityOptions = ['Hamilton', 'Brampton', 'Toronto']
    }

    //this is not going to effect cause of quebec is not selected
    else if (selectedProvince.value == 'quebec') {
        cityOptions = ['montreal', 'old quebec', 'ottawa']
    }

    //pushing the selected multiple city in html with loop
    for (var i = 0; i < cityOptions.length; i++) {
        var opt = document.createElement('option');
        opt.value = cityOptions[i];
        opt.innerHTML = cityOptions[i];
        selectedCity.appendChild(opt);
    }

    // comparing value of province and filtering that value from places
    for (var place of allPlaces) {
        if (place.Province == selectedProvince.value) {
            provincePlaces.push(place);
        }
    }
}

// when selection for city will changing in function will run
selectedCity.addEventListener('change', handleCityChange);
function handleCityChange() {

    // if you change province once and again change clear array
    cityPlaces = []

    // comparing value of city and filtering that value from places
    for (var carry_province of provincePlaces) {
        if (carry_province.city == selectedCity.value) {

            // pushing the filtered value in empty array
            cityPlaces.push(carry_province);
        }
    };
}



//onclick on submit function
function submitForm() {
    if (selectedProvince.value === 'x') {
        selectedProvince.style.background = 'red';
    } else {

        // if any user not selecting any city then filtered province array will be asign
        if (selectedCity.value === "x") {
            cityPlaces = provincePlaces;
        }

        // taking value from checked categories and pushing into empty array
        const categoryCheckboxes = document.querySelectorAll('input[name="categories"]:checked');
        selectedCategories = []
        categoryCheckboxes.forEach(category => {
            selectedCategories.push(category.value)
        })

        // if user not selecting any categories filtered city array will be asign
        var selected_city_categories = [];
        if (selectedCategories.length === 0) {
            selected_city_categories = cityPlaces
        } else {
            for (var carry_city of cityPlaces) {
                for (var each_categories of selectedCategories) {
                    if (carry_city.type == each_categories) {
                        selected_city_categories.push(carry_city);
                    }
                };
            }
        }


        // showing the result of selection
        result_filter.style.display = 'block';

        // if any data is not matching as user not it will be not found
        if (selected_city_categories.length === 0) {
            result_filter.innerHTML = "No Result Found";
            result_filter.classList.add('notfound');
        } else {
            // inserting data into HTML
            result_filter.classList.remove('notfound');
            var htmlData = '';
            selected_city_categories.forEach(place => {
                htmlData += `
            <div class="wrapper">
            <div class="place-details">
            <p class= "name"> Name of Place : ${place.name}</p>
            <p class="place-detail"><b>Type of building:</b> ${place.type}</p>
            <p class="place-detail"><b>Location: </b>${place.Address}</p>
            <p class="place-detail"><b>Name of City: </b>${place.city}</p>
            <p class="place-detail"><b>Name of Province: </b>${place.Province}</p>
            <p class="place-detail"><b>Business Hours: </b>${place.Open_hours}</p>
            <p class="place-detail"><b>Booking Link: </b>${place.Booking_information} </p>
            <p class="place-detail"><b>Admission Charge: </b>${place.Admission_charge}</p>
            </div>
            <div><img src=" ${place.photo} "></div>
            </div>
            `
            })

            result_filter.innerHTML = htmlData;

        }

    };
    return false;

}

// onload slideshow is working
// reference from https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000);
}
