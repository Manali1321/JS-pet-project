var formHandle = document.forms.form;
var province_selection = formHandle.province;
formHandle.onsubmit = submitForm;
var name_of_place = document.getElementById('name_of_place');
var selectedCity = document.getElementById('city');
var selectedProvince = document.getElementById('province');

const allPlaces = [
    {
        name: 'Fort York National Historic Site',
        city: 'toronto',
        Province: 'ontario',
        Open_hours: '11am-4pm',
        Booking_information: 'Not Needed',
        Admission_charge: 'free',
        Address: '250 Fort York Blvd, Toronto, ON M5V 3K9',
        type: 'historic'
    }, {
        name: 'Historical Plaque - Queen`s Park',
        city: 'toronto',
        Province: 'ontario',
        Open_hours: '24 hour',
        Booking_information: 'Not Needed',
        Admission_charge: 'free',
        Address: 'Unnamed Road, Toronto, ON',
        type: 'historic'
    },
    {
        name: 'Cherry Beach',
        city: 'toronto',
        Province: 'ontario',
        Open_hours: '24 hour',
        Booking_information: 'Not Needed',
        Admission_charge: 'free',
        Address: 'Unwin Avenue, Toronto, ON',
        type: 'beaches'
    },
    {
        name: 'Toronto Island Park',
        city: 'toronto',
        Province: 'ontario',
        Open_hours: '7am-8pm',
        Booking_information: 'https://secure.toronto.ca/FerryTicketOnline/tickets2/index.jsp',
        Admission_charge: '8.95$',
        Address: 'Centre Island Ferry Dock, Toronto, ON',
        type: 'beaches'
    },
    {
        name: 'Centreville Amusement Park',
        city: 'toronto',
        Province: 'ontario',
        Open_hours: '10:30am-07:00pm',
        Booking_information: 'https://www.centreisland.ca/centreville-amusement-park/ticket-packges',
        Admission_charge: '79.65$',
        Address: '9 Queens Quay W, Toronto, ON M5J 2H3',
        type: 'adventure'
    },
    {
        name: 'Canada’s Wonderland',
        city: 'toronto',
        Province: 'ontario',
        Open_hours: '5pm to 10pm',
        Booking_information: 'https://www.canadaswonderland.com/events/winterfest/tickets',
        Admission_charge: 'Winterfest: 29.99$',
        Address: '1 Canada`s Wonderland Drive, Vaughan, ON L6A 1S6',
        type: 'adventure'
    },
    {
        name: 'The Old Spaghetti Factory',
        city: 'toronto',
        Province: 'ontario',
        Open_hours: '12pm to 10pm',
        Booking_information: 'Not needed',
        Admission_charge: 'AS your order',
        Address: '54 The Esplanade, Toronto, ON M5E 1A6',
        type: 'restaurant'
    },
    {
        name: 'Elephant & Castle',
        city: 'toronto',
        Province: 'ontario',
        Open_hours: '9:30am to 1am',
        Booking_information: 'Not needed',
        Admission_charge: 'AS your order',
        Address: '212 King St W, Toronto, ON M5H 1K5',
        type: 'restaurant'
    },
    {
        name: 'Toronto Zoo',
        city: 'toronto',
        Province: 'ontario',
        Open_hours: '9:30am-4:30pm',
        Booking_information: 'https://www.torontozoo.com/',
        Admission_charge: '22.20$',
        Address: '2000 Meadowvale Rd, Toronto, ON M1B 5K7',
        type: 'wildlife'
    },
    {
        name: 'Ripley`s Aquarium of Canada',
        city: 'toronto',
        Province: 'ontario',
        Open_hours: '9am-9pm',
        Booking_information: 'https://www.ripleyaquariums.com/canada/',
        Admission_charge: '44.00$',
        Address: '288 Bremner Blvd, Toronto, ON M5V 3L9',
        type: 'wildlife'
    },
    {
        name: 'brampton',
        city: 'brampton',
        Province: 'ontario',
        type: 'wildlife'
    },
    {
        name: 'hamilton',
        city: 'hamilton',
        Province: 'ontario',
        type: 'beaches'
    },
];


var cityOptions = [];
var provincePlaces = [];
var cityPlaces = [];
var selectedCategories = []

selectedProvince.addEventListener('change', handleProvinceChange);
function handleProvinceChange() {
    if (selectedProvince.value == 'ontario') {
        cityOptions = ['hamilton', 'brampton', 'toronto']
    }

    //this is not going to effect cause of quebec is not selected
    else if (selectedProvince.value == 'quebec') {
        cityOptions = ['montreal', 'old quebec', 'ottawa']
    }

    //pushing the selected city in html with loop
    for (var i = 0; i < cityOptions.length; i++) {
        var opt = document.createElement('option');
        opt.value = cityOptions[i];
        opt.innerHTML = cityOptions[i];
        selectedCity.appendChild(opt);
    }

    for (var place of allPlaces) {
        if (place.Province == selectedProvince.value) {
            provincePlaces.push(place);
        }
    }
}

selectedCity.addEventListener('change', handleCityChange);
function handleCityChange() {
    cityPlaces = []
    // console.log(userCity.value);
    for (var carry_province of provincePlaces) {
        if (carry_province.city == selectedCity.value) {
            // console.log(carry_province);
            cityPlaces.push(carry_province);
        }
    };
}



//onclick on submit function
function submitForm() {
    if (selectedProvince.value === 'x') {
        selectedProvince.style.background = 'red';
    } else {


        if (selectedCity.value === "x") {
            cityPlaces = provincePlaces;
        }

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

        const categoryCheckboxes = document.querySelectorAll('input[name="categories"]:checked');
        selectedCategories = []
        categoryCheckboxes.forEach(category => {
            selectedCategories.push(category.value)
        })
        var nameOfPlace = document.getElementById("detail");
        let htmlData = '';
        selected_city_categories.forEach(place => {
            htmlData += `
            <div class="wrapper">
            <p class= "name">Name of Place : ${place.name}</p>
            <div class="place-details">
            <p class="place-detail"><b>Type of building:</b> ${place.type}</p>
            <p class="place-detail">Location: ${place.Address}</p>
            <p class="place-detail">Name of City: ${place.city}</p>
            <p class="place-detail">Name of Province: ${place.Province}</p>
            <p class="place-detail">Business Hours: ${place.Open_hours}</p>
            <p class="place-detail">Booking Link: ${place.Booking_information} </p>
            <p class="place-detail">Admission Charge: ${place.Admission_charge}</p>
            </div>
            </div>
            `
        })

        nameOfPlace.innerHTML = htmlData


    };

    return false;

}

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
