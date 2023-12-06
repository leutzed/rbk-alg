fetch("oll.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const oll = data.olls;
    const mappedOll = oll.map((item, index) => {
      console.log(`${item.index}`);
      console.log(`${index + 1}`);
      return `
        <div class="content">
          <div>${item.index}</div>
          <div class="image-block">
            <img src="${item.img}" alt="${item.name}">
          </div>
          <div class="alg">${item.alg}</div>
        </div>
      `;
    });
    document.querySelector("#olls").innerHTML = mappedOll.join("");
  });


