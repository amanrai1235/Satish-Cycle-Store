const data = [
    {
        section: "22 inch Cycle",
        items: [
            { name: "Leader", rt: 5500, wp: 3550 },
            { name: "Atlas", rt: 5500, wp: 3550 },
            { name: "Hero", rt: 6000, wp: 4100 },
            { name: "Avon", rt: 6000, wp: 4000 },
            { name: "Gold", rt: 5800, wp: 3600 }
        ]
    },
    {
        section: "20 inch Cycle",
        items: [
            { name: "Leader Prince", rt: 5200, wp: 3550 },
            { name: "Atlas", rt: 5000, wp: 3550 },
            { name: "Gold IPC", rt: 5500, wp: 3800 },
            { name: "Gold Plane", rt: 5800, wp: 3550 }
        ]
    },
    {
        section: "20 x 1 x 75",
        items: [
            { name: "Panda", rt: 3800, wp: 2500 },
            { name: "Ranger", rt: 3500, wp: 2500 }
        ]
    },
    {
        section: "14 x 1 x 75",
        items: [
            { name: "Foxman", rt: 2800, wp: 1600 },
            { name: "Gold", rt: 2800, wp: 1800 }
        ]
    },
    {
        section: "Tricycle",
        items: [
            { name: "Bullet (Model)", rt: 1600, wp: 1100 },
            { name: "Chief", rt: 850, wp: 625 },
            { name: "Medium", rt: 1100, wp: 680 },
            { name: "Walker 1st", rt: 750, wp: 550 },
            { name: "Waker 2nd", rt: 650, wp: 480 }
        ]
    }
];

function displayItems(filter = "") {
    let container = document.getElementById("container");
    container.innerHTML = "";

    data.forEach(section => {
        let filteredItems = section.items.filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase())
        );

        if (filteredItems.length > 0) {
            let sectionHTML = `<div class="card">
                <h2>${section.section}</h2>
                <table>
                    <tr>
                        <th>Item</th>
                        <th>R.T (₹)</th>
                        <th>W.P (₹)</th>
                    </tr>`;

            filteredItems.forEach(item => {
                sectionHTML += `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.rt}</td>
                        <td>${item.wp}</td>
                    </tr>`;
            });

            sectionHTML += `</table></div>`;
            container.innerHTML += sectionHTML;
        }
    });
}

function searchItem() {
    let input = document.getElementById("searchBox").value;
    displayItems(input);
}

// Initial load
displayItems();
