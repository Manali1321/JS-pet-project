var formHandle = document.forms.form;
var province_selection = formHandle.province;
formHandle.onsubmit = validateForm;
var name_of_place = document.getElementById('name_of_place');
var select_city = document.getElementById("city");
var userProvince = document.getElementById("province");


function validateForm() {
    if (userProvince.value === "x") {
        var field = userProvince
        field.style.background = "red";
        return false;
    }
    return false;
}
var city_list = [];
function userSelection() {
    if (userProvince.value == "ontario") {
        city_list = ["hamilton", "brampton", "toronto"]
    }
    else if (userProvince.value == "quebec") {
        city_list = ["montreal", "old quebec", "ottawa"]
    }
    for (var i = 0; i < city_list.length; i++) {
        var opt = document.createElement('option');
        opt.value = city_list[i];
        opt.innerHTML = city_list[i];
        select_city.appendChild(opt);
    }
    console.log(city_list)
}
userProvince.addEventListener("change", userSelection)


const toronto = [
    {
        name: "Fort York National Historic Site",
        city: "toronto",
        Province: "ontario",
        Open_hours: "11am-4pm",
        Booking_information: "Not Needed",
        Admission_charge: "free",
        Address: "250 Fort York Blvd, Toronto, ON M5V 3K9",
        type: "historic"
    }, {
        name: "Historical Plaque - Queen's Park",
        city: "toronto",
        Province: "ontario",
        Open_hours: "24 hour",
        Booking_information: "Not Needed",
        Admission_charge: "free",
        Address: "Unnamed Road, Toronto, ON",
        type: "historic"
    },
    {
        name: "Cherry Beach",
        city: "toronto",
        Province: "ontario",
        Open_hours: "24 hour",
        Booking_information: "Not Needed",
        Admission_charge: "free",
        Address: "Unwin Avenue, Toronto, ON",
        type: "beaches"
    },
    {
        name: "Toronto Island Park",
        city: "toronto",
        Province: "ontario",
        Open_hours: "7am-8pm",
        Booking_information: "https://secure.toronto.ca/FerryTicketOnline/tickets2/index.jsp",
        Admission_charge: "8.95$",
        Address: "Centre Island Ferry Dock, Toronto, ON",
        type: "beaches"
    },
    {
        name: "Centreville Amusement Park",
        city: "toronto",
        Province: "ontario",
        Open_hours: "10:30am-07:00pm",
        Booking_information: "https://www.centreisland.ca/centreville-amusement-park/ticket-packges",
        Admission_charge: "79.65$",
        Address: "9 Queens Quay W, Toronto, ON M5J 2H3",
        type: "adventure"
    },
    {
        name: "Canada’s Wonderland",
        city: "toronto",
        Province: "ontario",
        Open_hours: "5pm to 10pm",
        Booking_information: "https://www.canadaswonderland.com/events/winterfest/tickets",
        Admission_charge: "Winterfest: 29.99$",
        Address: "1 Canada's Wonderland Drive, Vaughan, ON L6A 1S6",
        type: "adventure"
    },
    {
        name: "The Old Spaghetti Factory",
        city: "toronto",
        Province: "ontario",
        Open_hours: "12pm to 10pm",
        Booking_information: "Not needed",
        Admission_charge: "AS your order",
        Address: "54 The Esplanade, Toronto, ON M5E 1A6",
        type: "restaurant"
    },
    {
        name: "Elephant & Castle",
        city: "toronto",
        Province: "ontario",
        Open_hours: "9:30am to 1am",
        Booking_information: "Not needed",
        Admission_charge: "AS your order",
        Address: "212 King St W, Toronto, ON M5H 1K5",
        type: "restaurant"
    },
    {
        name: "Toronto Zoo",
        city: "toronto",
        Province: "ontario",
        Open_hours: "9:30am-4:30pm",
        Booking_information: "https://www.torontozoo.com/",
        Admission_charge: "22.20$",
        Address: "2000 Meadowvale Rd, Toronto, ON M1B 5K7",
        type: "wildlife"
    },
    {
        name: "Ripley's Aquarium of Canada",
        city: "toronto",
        Province: "ontario",
        Open_hours: "9am-9pm",
        Booking_information: "https://www.ripleyaquariums.com/canada/",
        Admission_charge: "44.00$",
        Address: "288 Bremner Blvd, Toronto, ON M5V 3L9",
        type: "wildlife"
    }
];

const button = document.querySelector('#button');
button.addEventListener('click', (event) => {
    name_of_place.innerHTML = "";
    const checkboxes = document.querySelectorAll('input[name="categories"]:checked');
    var selected_categories = [];
    checkboxes.forEach((checkbox) => {
        selected_categories.push(checkbox.value);
    });
    console.log(selected_categories);

    var final_show = [];
    var tr;
    for (tr of toronto) {
        for (var each_categories of selected_categories) {
            // console.log(each_categories);
            if (tr.type == each_categories) {
                final_show.push(tr);
            }
        };
    }
    if (userProvince.value == tr.Province) {
        final_show.push(tr);
    }
    console.log(final_show);
    for (var j = 0; j < final_show.length; j++) {
        const head_name = document.createElement('span');
        const output_result = document.createTextNode(final_show[j].name);
        // const title_place = document.createTextNode('name of place:');

        head_name.appendChild(output_result);
        name_of_place.appendChild(head_name);
        // document.getElementById('location').appendChild(result[j].name);
    }


});
