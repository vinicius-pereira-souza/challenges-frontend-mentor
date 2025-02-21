class FetchElements {
  constructor(icons, values, titles) {
    this.icons = document.querySelectorAll(icons);
    this.values = document.querySelectorAll(values);
    this.titles = document.querySelectorAll(titles);
  }

  createImg(src) {
    const img = document.createElement("img");
    img.src = src;

    return img;
  }

  async makefet() {
    const fet = await fetch("data.json");
    const res = await fet.json();

    res.forEach((obj, i) => {
      this.titles[i].textContent = obj.category;
      this.values[i].textContent = obj.score;
      this.icons[i].appendChild(
        this.createImg(`./src${obj.icon.replace(".", "")}`),
      );
    });
  }
}

const myClass = new FetchElements(".icon", ".valueOf", ".title");
myClass.makefet();
