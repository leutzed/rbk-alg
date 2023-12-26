fetch("../../oll.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const oll = data.olls;

    // order by oll.order
    const sortedOll = oll.sort((a, b) => a.order - b.order);

    const categorizedOll = sortedOll.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

    const mappedOll = Object.entries(categorizedOll).map(
      ([category, items]) => {
        const sortedItems = items.sort((a, b) => a.id - b.id); // Sort items by id
        const mappedItems = sortedItems.map((item, index) => {
          console.log(`${item.index}`);
          console.log(`${index + 1}`);

          return `
          <div class="content align">
            <div id="number-name" class="flex justify align column">
              <p class="number">${item.index}</p>
              <p class="name">${item.name}</p>
            </div>
            <div class="image-block flex justify">
              <img class="img-case" style="rotate: ${item.rotate}deg;" src="${item.img}" alt="${item.name}">
            </div>
            <div class="flex justify align column">
              <p class="alg">${item.alg}</p>
              <p class="altAlg">${item.alternativeAlg}</p>
            </div>
          </div>
        `;
        });
        return `
        <div class="category">
          <h2 class="flex justify">${category}</h2>
          ${mappedItems.join("")}
        </div>
      `;
      }
    );

    document.querySelector("#olls").innerHTML = mappedOll.join("");
  });

  fetch("../../pll.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const pll = data.plls;

    // order by pll.order
    const sortedPll = pll.sort((a, b) => a.order - b.order);

    const categorizedPll = sortedPll.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {});

    const mappedPll = Object.entries(categorizedPll).map(
      ([category, items]) => {
        const sortedItems = items.sort((a, b) => a.id - b.id); // Sort items by id
        const mappedItems = sortedItems.map((item, index) => {
          console.log(`${item.index}`);
          console.log(`${index + 1}`);

          return `
          <div class="content align">
            <div id="number-name" class="flex justify align column">
              <p class="number">${item.index}</p>
              <p class="name">${item.name}</p>
            </div>
            <div class="image-block flex justify">
            <a href="${item.video}">
              <img class="img-case" style="rotate: ${item.rotate}deg;" src="${item.img}" alt="${item.name}">
            </a>
            </div>
            <div class="flex justify align column">
              <p class="alg">${item.alg}</p>
              <p class="altAlg">${item.alternativeAlg}</p>
            </div>
          </div>
        `;
        });
        return `
        <div class="category">
          <h2 class="flex justify">${category}</h2>
          ${mappedItems.join("")}
        </div>
      `;
      }
    );

    document.querySelector("#plls").innerHTML = mappedPll.join("");
  });
