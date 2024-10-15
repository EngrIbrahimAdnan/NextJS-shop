import DisplayEverything from "./components/ProductItem";
import Header from "./Header";

export default function Home() {
  const Title = "Socks without Partners";
  const slogan =
    "A store that only sells single socks. Perfect for people who always lose one sock from the pair";

  return (
    <div className="text-center p-4">
      <Header />
      <h1 className="font-bold p-4 text-3xl">{Title}</h1>
      <h2 className="font-bold p-4">{slogan}</h2>
      <img src="https://c7.alamy.com/comp/2JCFRRG/lonely-different-socks-without-partner-on-a-clothesline-symbol-image-lost-socks-memorial-day-2JCFRRG.jpg"></img>
      <DisplayEverything
        ProductNum={0}
        ProductName={"Second Hand Sock"}
        ProductPrice={5}
      />
      ;
      <DisplayEverything
        ProductNum={1}
        ProductName={"New Sock"}
        ProductPrice={28}
      />
      <DisplayEverything
        ProductNum={2}
        ProductName={"Trumps's missing Sock"}
        ProductPrice={60}
      />
    </div>
  );
}
