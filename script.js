const chemicalSuppliesArray = [
  {
    id: 1,
    chemicalName: "Ammonium Persulfate",
    vendor: "LG Chem",
    density: 3525.92,
    viscosity: 60.63,
    packaging: "Bag",
    packSize: 100.0,
    unit: "kg",
    quantity: 6495.18,
  },
  {
    id: 2,
    chemicalName: "Caustic Potash",
    vendor: "Formosa",
    density: 3172.15,
    viscosity: 48.22,
    packaging: "Bag",
    packSize: 100.0,
    unit: "kg",
    quantity: 8751.9,
  },
  {
    id: 3,
    chemicalName: "Dimethylaminopropylamion",
    vendor: "LG Chem",
    density: 8435.37,
    viscosity: 12.62,
    packaging: "Barrel",
    packSize: 75.0,
    unit: "L",
    quantity: 5964.61,
  },
  {
    id: 4,
    chemicalName: "Mono Ammonium Phosphate",
    vendor: "LG Chem",
    density: 3525.92,
    viscosity: 60.63,
    packaging: "bag",
    packSize: 100.0,
    unit: "kg",
    quantity: 6495.18,
  },
  {
    id: 5,
    chemicalName: "Ferric Nitrate",
    vendor: "DowDuPont",
    density: 364.04,
    viscosity: 14.9,
    packaging: "Bag",
    packSize: 105.0,
    unit: "kg",
    quantity: 4154.33,
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
    quantity: 6272.34,
  },
  {
    id: 7,
    chemicalName: "Glycol Ether PM",
    vendor: "LG Chem",
    density: 6495.18,
    viscosity: 72.12,
    packaging: "Bag",
    packSize: 250.0,
    unit: "Kg",
    quantity: 8749.54,
  },
];

// localStorage.setItem("iitbProject", JSON.stringify(chemicalSuppliesArray));

const addButton = document.getElementById("add");
const editButton = document.getElementById("edit");
const moveButton = document.getElementById("move-up");
const moveDownButton = document.getElementById("move-down");
const deleteButton = document.getElementById("delete");
const refreshButton = document.getElementById("refresh");
const saveButton = document.getElementById("save");
const tableBody = document.getElementById("table-body");

addButton.addEventListener("click", add);
saveButton.addEventListener("click", save);
refreshButton.addEventListener("click", refresh);

const selectall = document.getElementById("chkbox");

function firstRender() {
  const chemicalSupplies = JSON.parse(localStorage.getItem("iitbProject"));
  if (chemicalSupplies === null) {
    localStorage.setItem("iitbProject", JSON.stringify(chemicalSuppliesArray));
    render();
  }
}
firstRender();
function render() {
  tableBody.innerHTML = "";
  const chemicalSupplies = JSON.parse(localStorage.getItem("iitbProject"));
  chemicalSupplies.map((row) => {
    return (tableBody.innerHTML += `<tr class="data">
        <td>
            <div class="content" >
                <input class="checkbox"  type="checkbox" name="rowSelect" value="${row.id}"/>
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
    </tr>`);
  });
}
render();
function add() {
  const chemicalSupplies = JSON.parse(localStorage.getItem("iitbProject"));
  tableBody.innerHTML += `
  <tr>
  <td>
            <div class="content">
                <input class="checkbox" checked disabled type="checkbox"/>
            </div>
        </td>
        <td>
        <div class="content">
            ${chemicalSupplies.length + 1}
        </div>
    </td>
    <td>
        <input type="text" id = "new-chemicalName"/>
    </td>
    <td>
        <input type="text" id = "new-vendor"/>
    </td>
    <td>
        <input type="number" id = "new-density"/>
    </td>
    <td>
        <input type="number" id = "new-viscosity"/>
    </td>
    <td>
        <select  id = "new-packaging">
        <option>Select</option>
        <option>Bag</option>
        <option>Bottle</option>
        <option>Barrel</option>
        <option>N/A</option>
        </select>
    </td>
    <td>
        <input type="number" id = "new-packSize"/>
    </td>
    <td>
        <select  id = "new-unit">
        <option>Select</option>
        <option value="kg">kg</option>
        <option value="gm">gm</option>
        <option value="L">L</option>
        <option value="ml">ml</option>
        <option value="t">t</option>
        </select>
    </td>
    <td>
        <input type="number" id = "new-quantity"/>
    </td>
  </tr>
  `;
}

function edit() {}

function moveUp() {}

function moveDown() {}

function deleter() {
  const chemicalSupplies = JSON.parse(localStorage.getItem("iitbProject"));
}

function refresh() {
  render();
}

function save() {
  const chemicalSupplies = JSON.parse(localStorage.getItem("iitbProject"));
  const newChemicalName = document.getElementById("new-chemicalName");
  const newVendor = document.getElementById("new-vendor");
  const newDensity = document.getElementById("new-density");
  const newViscosity = document.getElementById("new-viscosity");
  const newPackaging = document.getElementById("new-packaging");
  const newPackSize = document.getElementById("new-packSize");
  const newUnit = document.getElementById("new-unit");
  const newQuantity = document.getElementById("new-quantity");
  // chemicalSuppliesArray.push();
  localStorage.setItem(
    "iitbProject",
    JSON.stringify([
      ...chemicalSupplies,
      {
        id: chemicalSupplies.length + 1,
        chemicalName: newChemicalName.value,
        vendor: newVendor.value,
        density: newDensity.value,
        viscosity: newViscosity.value,
        packaging: newPackaging.value,
        packSize: newPackSize.value,
        unit: newUnit.value,
        quantity: newQuantity.value,
      },
    ])
  );
  tableBody.innerHTML = "";
  render();
}

function sortAscending() {}

function sortDescending() {}

/*-----------------------------
code for select all button
------------------------------*/
function rowSelect() {}
