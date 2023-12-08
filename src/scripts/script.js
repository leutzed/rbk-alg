fetch("oll.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const oll = data.olls;
    const categorizedOll = oll.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

    const mappedOll = Object.entries(categorizedOll).map(([category, items]) => {
      const sortedItems = items.sort((a, b) => a.id - b.id); // Sort items by id
      const mappedItems = sortedItems.map((item, index) => {
        console.log(`${item.index}`);
        console.log(`${index + 1}`);
        return `
          <div class="content align">
            <div class="flex justify">${item.index}</div>
            <div class="image-block flex justify">
              <img style="height: 4rem; width: 4rem;" src="${item.img}" alt="${item.name}">
            </div>
            <div class="alg flex justify">${item.alg}</div>
          </div>
        `;
      });
      return `
        <div class="category">
          <h2 class="flex justify">${category}</h2>
          ${mappedItems.join("")}
        </div>
      `;
    });

    document.querySelector("#olls").innerHTML = mappedOll.join("");
  });


  