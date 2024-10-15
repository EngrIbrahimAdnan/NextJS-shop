import objectArr from "../products";

function DisplayEverything({ ProductNum, ProductName }) {
  const productsDisplayed = (
    <div class="flex flex-col items-center border p-4 rounded-lg shadow-lg w-48">
      <h2 class="text-lg font-semibold">{ProductName}</h2>
      <img
        class="text-lg font-semibold"
        src={objectArr[ProductNum].image}
      ></img>
      <p class="text-gray-500">{objectArr[ProductNum].price + "KD"}</p>
    </div>
  );

  return (
    <div className="text-center p-4">
      <div class="flex flex-wrap justify-center space-x-4 space-y-4">
        {productsDisplayed}
      </div>
    </div>
  );
}

export default DisplayEverything;
