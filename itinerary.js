var formHandle = document.forms.form;
var province_selection = formHandle.province;
formHandle.onsubmit = validateForm;
var name_of_place = document.getElementById('name_of_place');
var userCity = document.getElementById("city");
var userProvince = document.getElementById("province");


// change function for province change city filter happen
userProvince.addEventListener("change", userSelection);
function userSelection() {
    if (userProvince.value == "ontario") {
        city_list = ["hamilton", "brampton", "toronto"]
    }

    //this is not going to effect cause of quebec is not selected
    else if (userProvince.value == "quebec") {
        city_list = ["montreal", "old quebec", "ottawa"]
    }

    //pushing the selected city in html with loop
    for (var i = 0; i < city_list.length; i++) {
        var opt = document.createElement('option');
        opt.value = city_list[i];
        opt.innerHTML = city_list[i];
        userCity.appendChild(opt);
    }
    console.log(city_list)
}

//onclick on submit function
function validateForm() {
    if (userProvince.value === "x") {
        var field = userProvince;
        field.style.background = "red";
        return false;
    }


    else {
        var city_list = [];

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
            },
            {
                name: "brampton",
                city: "brampton",
                Province: "ontario",
                type: "wildlife"
            },
            {
                name: "hamilton",
                city: "hamilton",
                Province: "ontario",
                type: "beaches"
            },
        ];


        //on the click of button show the result of selected element
        const button = document.querySelector('#button');
        var province_array = [];

        // on click get a result for selected province
        button.addEventListener('click', selected_province);

        function selected_province() {
            console.log('selected_province');
            for (var tr of toronto) {
                if (tr.Province == userProvince.value) {
                    province_array.push(tr);
                }
            };
        }
        //on click get a result for selected city
        if (userCity != x) {
            button.addEventListener('click', selected_city);
            function selected_city() {
                console.log(userCity.value);
                for (var carry_province of province_array) {
                    if (carry_province.city == userCity.value) {
                        province_city = [];
                        console.log(carry_province);
                        province_city.push(carry_province);
                    }
                };
            }
        } else {
            province_array = province_city;
        }
        //on click of button, selected categories value storing in array
        button.addEventListener('click', (event) => {
            const checkboxes = document.querySelectorAll('input[name="categories"]:checked');
            var selected_categories = [];
            checkboxes.forEach((checkbox) => {
                selected_categories.push(checkbox.value);
            });
            console.log(selected_categories);

            //take a value for categories and pulling the result of it
            for (var carry_city of province_city) {
                for (var each_categories of selected_categories) {
                    // console.log(each_categories);
                    if (carry_city.type == each_categories) {
                        selected_categories = [];
                        selected_categories.push(carry_city);
                    }
                };
            }
            name_of_place.innerHTML = "";
            for (var j = 0; j < selected_categories.length; j++) {
                const head_name = document.createElement('span');
                const output_result = document.createTextNode(selected_categories[j].name);

                head_name.appendChild(output_result);
                name_of_place.appendChild(head_name);
            }

            // if (userProvince.value == tr.Province) {
            //     final_show.push(tr);
            // }
            // console.log(final_show);
            // 

        });
    } return false;
}
