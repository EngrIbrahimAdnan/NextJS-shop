import React from "react";
import objectArr from "./products.js";

function FirstComponent() {
  const Title = "Socks without Partners";
  const slogan =
    "A store that only sells single socks. Perfect for people who always lose one sock from the pair";

  const productsDisplayed = objectArr.map((object) => {
    return (
      <div class="flex flex-col items-center border p-4 rounded-lg shadow-lg w-48">
        <h2 class="text-lg font-semibold">{object.name}</h2>
        <img class="text-lg font-semibold" src={object.image}></img>
        <p class="text-gray-500">{object.price + "KD"}</p>
      </div>
    );
  });

  return (
    <div className="text-center p-4">
      <h1 className="font-bold p-4 text-3xl">{Title}</h1>
      <h2 className="font-bold p-4">{slogan}</h2>
      <img src="https://c7.alamy.com/comp/2JCFRRG/lonely-different-socks-without-partner-on-a-clothesline-symbol-image-lost-socks-memorial-day-2JCFRRG.jpg"></img>

      <div class="flex flex-wrap justify-center space-x-4 space-y-4">
        {productsDisplayed}
      </div>
    </div>
  );
}

export default FirstComponent;
