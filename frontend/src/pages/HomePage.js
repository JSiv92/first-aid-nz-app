//blank react component for home page
import React from "react";

//components
import Carousel from "../components/Home/Carousel.js";

const Home = () => {
  return (
    <>
      <Carousel />
      <div className="container-fluid">
        <h2 style={{ color: "white" }}>Home Page</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget
          rutrum leo. Etiam mi urna, tempor ut maximus at, accumsan eget sapien.
          Nulla sollicitudin massa id eros tempus tincidunt. Duis vel augue ut
          velit auctor cursus ut non risus. Nulla mollis lectus et mauris
          vestibulum pulvinar. In nisi arcu, vestibulum eu bibendum tempor,
          suscipit vel tortor. Donec nibh ante, malesuada non luctus at, dictum
          ut turpis. Mauris et est leo. Praesent vitae pulvinar magna, sed
          ornare felis. In non erat eget massa <br /> brfeugiat sagittis eget
          vitae lacus. In sagittis, risus in facilisis dapibus, felis sem dictum
          turpis, eget lacinia ipsum metus in nisl. Nullam fringilla, elit vel
          pretium ultrices, massa nibh euismod libero, ac interdum quam mi in
          nunc. Praesent id consequat purus. Vivamus malesuada luctus quam, nec
          aliquam nisi ultrices quis. Nulla id eros et libero pulvinar
          consequat. Nunc tempus rhoncus mauris consequat vestibulum. Etiam a
          euismod lorem. Phasellus pretium purus erat, quis gravida risus
          dapibus ac. Suspendisse potenti. Integer at finibus augue. Nulla
          eleifend libero in pretium laoreet. Aliquam faucibus diam sed
          <br /> neque ullamcorper, ut aliquam libero accumsan. Donec tristique
          urna ex, in bibendum dolor placerat tincidunt. Maecenas hendrerit
          vestibulum fermentum. Proin auctor dui a tincidunt dignissim. Donec
          sed aliquet arcu. Quisque malesuada luctus lobortis. Proin eu ante
          vitae lacus posuere fermentum ut sit amet purus. Phasellus egestas
          eleifend purus, <br />
        </p>
      </div>
    </>
  );
};

export default Home;
