window.onload = function () {
    var formHandle = document.forms.form;
    formHandle.onchange = userSelection;
    function userSelection() {


        var userProvince = document.getElementById("province").value;
        {
            if (userProvince == "ontario") {
                var city = ["hamilton", "brampton", "toronto"];
            }
            else if (userProvince = "Quebec") {
                var city = ["montreal", "old quebec", "ottawa"]
            }
            else {
                var city = [];
            }
            var string = "";
            for (i = 0; i < city.length; i++) {
                string = string + "<option>" + city[i] + "</option>";
            }
            document.getElementById("city").innerHTML = "<select>" + string + "</select>";
        }


    }


}
