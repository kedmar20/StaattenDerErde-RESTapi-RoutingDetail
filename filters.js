import { renderAllElements } from "./functions.js";

const filterRestCountriesByName = (list) => {
  const inputFilter = document.querySelector(".input-filter");
  const inputFilterRegions = document.querySelector("#region");
  const ulTag = document.querySelector("#ul");
  let inputValue = "";
  let chosenRegion = "";
  let theList = list;

  renderAllElements(theList);
  //   inputFilter.addEventListener("input", (e) => {
  //     inputValue = e.target.value.toLowerCase().trim();
  //     console.log(inputValue);
  //     ulTag.innerHTML = "";
  //     theList = list.filter((el) => {
  //       //list is still the original list of countries from app.js
  //       return el.name.toLowerCase().includes(inputValue);
  //     });
  //     renderAllElements(theList);
  //   });

  //   inputFilterRegions.addEventListener("change", (ele) => {
  //     console.log(ele.target.value);
  //     ulTag.innerHTML = "";
  //     theList = list.filter((e) => {
  //       //list is still the original list of countries from app.js
  //       return e.region.includes(ele.target.value);
  //     });

  //     renderAllElements(theList);
  //   });
  // };
  const allFilterFunction = () => {
    ulTag.innerHTML = "";
    theList = list.filter((e) => {
      return (
        e.region.includes(chosenRegion) &&
        (e.name.toLowerCase().includes(inputValue) ||
          e.capital.toLowerCase().includes(inputValue))
      );
    });
    renderAllElements(theList);
  };

  inputFilter.addEventListener("input", (e) => {
    inputValue = e.target.value.toLowerCase().trim();
    // ulTag.innerHTML = "";
    allFilterFunction();
  });

  //fcn change the placeholders text depending on the screen view:
  // function testMedia(media) {
  //   if (media.matches) {
  //     inputFilter.placeholder = "search for a country or capital...";
  //   } else {
  //     inputFilter.placeholder = "search...";
  //   }
  // }
  // const media = window.matchMedia("(min-width: 900px)");
  // //after loading:
  // testMedia(media);
  // //change listening:
  // media.addEventListener("change", testMedia);

  inputFilterRegions.addEventListener("change", (ele) => {
    chosenRegion = ele.target.value;
    allFilterFunction();
  });
};

export { filterRestCountriesByName };
