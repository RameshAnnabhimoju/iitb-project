const chemicalSupplies = [{
        id: 1,
        chemicalName: "Ammonium Persulfate",
        vendor: "LG Chem",
        density: 3525.92,
        viscocity: 60.63,
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
        viscocity: 48.22,
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
        viscocity: 12.62,
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
        viscocity: 60.63,
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
        viscocity: 14.90,
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
        viscocity: 66.76,
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
        viscocity: 72.12,
        packaging: "Bag",
        packSize: 250.00,
        unit: "Kg",
        quantity: 8749.54
    }

];

localStorage.setItem("iitbProject", JSON.stringify(chemicalSupplies))