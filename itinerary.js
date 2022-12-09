var formHandle = document.forms.form;
var province_selection = formHandle.province;
formHandle.onsubmit = validateForm;
var name_of_place = document.getElementById('name_of_place');


function validateForm() {
    if (province.value === "x") {
        var field = document.getElementById("province")
        field.style.background = "red";
        return false;
    }
    return false;
}
var city_list = [];
var userProvince = document.getElementById("province");
function userSelection() {
    if (userProvince.value == "ontario") {
        city_list = ["hamilton", "brampton", "toronto"]
    }
    else if (userProvince.value == "quebec") {
        city_list = ["montreal", "old quebec", "ottawa"]
    }
    var select = document.getElementById("city");
    console.log(city_list)
    for (var i = 0; i < city_list.length; i++) {
        var opt = document.createElement('option');
        opt.value = city_list[i];
        opt.innerHTML = city_list[i];
        select.appendChild(opt);
    }
    console.log(city_list)
}
userProvince.addEventListener("change", userSelection)


const toronto = [
    {
        name: "Fort York National Historic Site",
        Open_hours: "11am-4pm",
        Booking_information: "Not Needed",
        Admission_charge: "free",
        Address: "250 Fort York Blvd, Toronto, ON M5V 3K9",
        type: "historic"
    }, {
        name: "Historical Plaque - Queen's Park",
        Open_hours: "24 hour",
        Booking_information: "Not Needed",
        Admission_charge: "free",
        Address: "Unnamed Road, Toronto, ON",
        type: "historic"
    },
    {
        name: "Cherry Beach",
        Open_hours: "24 hour",
        Booking_information: "Not Needed",
        Admission_charge: "free",
        Address: "Unwin Avenue, Toronto, ON",
        type: "beaches"
    },
    {
        name: "Toronto Island Park",
        Open_hours: "7am-8pm",
        Booking_information: "https://secure.toronto.ca/FerryTicketOnline/tickets2/index.jsp",
        Admission_charge: "8.95$",
        Address: "Centre Island Ferry Dock, Toronto, ON",
        type: "beaches"
    }
];

const button = document.querySelector('#button');
button.addEventListener('click', (event) => {
    name_of_place.innerHTML = "";
    const checkboxes = document.querySelectorAll('input[name="categories"]:checked');
    var output = [];
    checkboxes.forEach((checkbox) => {
        output.push(checkbox.value);
    });
    console.log(output);

    var result = [];
    for (var tr of toronto) {
        for (var user_output of output) {
            console.log(user_output);
            if (tr.type == user_output) {
                result.push(tr);
            }
        };
    }
    console.log(result);
    for (var j = 0; j < result.length; j++) {
        const head_name = document.createElement('span');
        const output_result = document.createTextNode(result[j].name);
        // const title_place = document.createTextNode('name of place:');

        head_name.appendChild(output_result);
        name_of_place.appendChild(head_name);
        // document.getElementById('location').appendChild(result[j].name);
    }


});
