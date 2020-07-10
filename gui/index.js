window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);

$.ajaxSetup({
    header: { "Content-Type": "application/json;charset=UTF-8" },
    beforeSend: function (request) {
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    },
});

const HOST = "http://localhost:3000";

$(document).ready(function () {
    getModulesData()
});

function addNewsModule() {
    const formElement = document.getElementById("newData");

    if (formElement.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }
    formElement.classList.add('was-validated');
    if ($(".form-control:invalid").length === 0) {
        const newItem = {
            "name": formElement.moduleID.value,
            "update": false,
            "apis": {
                "list": formElement.list.value,
                "detail": formElement.detail.value,
                "edit": formElement.edit.value,
                "delete": formElement.delete.value,
            }
        }
        this.data.push(newItem);
        $.post(HOST + "/rebuild", JSON.stringify(this.data), (data) => {
            this.data = typeof (data) === "string" ? JSON.parse(data) : data;
            renderAllNodes(this.data);
        }, "json")
    } else {
        alert("please check fields")
    }
}

function getModulesData() {
    $.get(HOST + "/getAllModules", (data) => {
        this.data = typeof (data) === "string" ? JSON.parse(data) : data;
        renderAllNodes(this.data);
    })
}

function renderAllNodes(data) {
    let allNodes = "";
    data.forEach(element => {
        allNodes += `<tr class="pure-table-odd">
                        <td>${element.name}</td>
                        <td>${element.name}</td>
                    </tr>`
    });
    $("#modulesTable>tbody").html(allNodes);
}
