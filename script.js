const chemicalSuppliesArray = [{
        id: 1,
        chemicalName: "Ammonium Persulfate",
        vendor: "LG Chem",
        density: 3525.92,
        viscosity: 60.63,
        packaging: "Bag",
        packSize: 100.00,
        unit: "kg",
        quantity: 6495.18
    },
    {
        id: 2,
        chemicalName: "Caustic Potash",
        vendor: "Formosa",
        density: 3172.15,
        viscosity: 48.22,
        packaging: "Bag",
        packSize: 100.00,
        unit: "kg",
        quantity: 8751.90
    },
    {
        id: 3,
        chemicalName: "Dimethylaminopropylamion",
        vendor: "LG Chem",
        density: 8435.37,
        viscosity: 12.62,
        packaging: "Barrel",
        packSize: 75.00,
        unit: "L",
        quantity: 5964.61
    },
    {
        id: 4,
        chemicalName: "Mono Ammonium Phosphate",
        vendor: "LG Chem",
        density: 3525.92,
        viscosity: 60.63,
        packaging: "bag",
        packSize: 100.00,
        unit: "kg",
        quantity: 6495.18
    },
    {
        id: 5,
        chemicalName: "Ferric Nitrate",
        vendor: "DowDuPont",
        density: 364.04,
        viscosity: 14.90,
        packaging: "Bag",
        packSize: 105.00,
        unit: "kg",
        quantity: 4154.33
    },
    {
        id: 6,
        chemicalName: "n-Pentane",
        vendor: "Sinopec",
        density: 4535.26,
        viscosity: 66.76,
        packaging: "N/A",
        packSize: "N/A",
        unit: "t",
        quantity: 6272.34
    },
    {
        id: 7,
        chemicalName: "Glycol Ether PM",
        vendor: "LG Chem",
        density: 6495.18,
        viscosity: 72.12,
        packaging: "Bag",
        packSize: 250.00,
        unit: "Kg",
        quantity: 8749.54
    }

];

localStorage.setItem("iitbProject", JSON.stringify(chemicalSuppliesArray))

const chemicalSupplies = JSON.parse(localStorage.getItem("iitbProject"))
const addButton = document.getElementById("add");
const editButton = document.getElementById("edit");
const moveButton = document.getElementById("move-up");
const moveDownButton = document.getElementById("move-down");
const deleteButton = document.getElementById("delete");
const refreshButton = document.getElementById("refresh");
const saveButton = document.getElementById("save");
const tableBody = document.getElementById("table-body")
    // checkbox variable
    // addButton.addEventListener("click", add)

const selectall = document.getElementById("chkbox");
console.log(chemicalSupplies)

function render() {
    chemicalSupplies.map((row) => {

        return tableBody.innerHTML +=
            `<tr class="data">
        <td>
            <div class="content" id="select-all">
                <input id="chkbox"  type="checkbox" />
            </div>
        </td>
        <td>
            <div class="content">
                ${row.id}
            </div>
        </td>
        <td>
            <div class="content">
               ${row.chemicalName}
            </div>
        </td>
        <td>
            <div class="content">
            ${row.vendor}
            </div>
        </td>
        <td>
            <div class="content">
            ${row.density}
            </div>
        </td>
        <td>
            <div class="content">
            ${row.viscosity}
            </div>
        </td>
        <td>
            <div class="content">
            ${row.packaging}
            </div>
        </td>
        <td>
            <div class="content">
            ${row.packSize}
            </div>
        </td>
        <td>
            <div class="content">
            ${row.unit}
            </div>
        </td>
        <td>
            <div class="content">
            ${row.quantity}
            </div>
        </td>
    </tr>`
    })
}
render();

function add() {}

function edit() {}

function moveUp() {}

function moveDown() {}

function deleter() {}

function refresh() {}

function save() {}

function sortAscending() {}

function sortDescending() {}

function generateId() {}



/*-----------------------------
code for select all button
------------------------------*/

selectall.addEventListener('click', function() {
    console.log("Clicked!");
});