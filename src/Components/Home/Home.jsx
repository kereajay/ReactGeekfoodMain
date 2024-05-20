import "./Home.css";
// import Paradata from "../Paradata"
import { Paradata } from "../data/Homedata";

// import "./house.css";
let Home = () => {
  

  return (
    <>

      <div id="mbody" className="bg-[url('/img/hero-pattern.svg')]">
        <div id="mbody1">
          <br />
          <h1>
            Let us find your
            <br /> <span>Forever Food.</span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />    Nesciunt illo tenetur fuga ducimus numquam ea!</p>
          <br />
          <button id="search">Search Now</button>
          <button id="more">Know more</button>
          <br />
          <br />
        </div>
      </div>
      <br />
      <div id="houseinner">
        <div id="houseimg">
          <img
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            height={650}
            width={700}
          />
        </div>
        <div id="housepara">
          <h1>Lorem ipsum dolor sit amet,  consectetur adipisicing elit. Tempore, debitis.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
          <br />
          <button>Get in Touch</button>
        </div>
      </div>
      <br />
      <br />
      <div id="cardholder">
        {
          Paradata.map((item) => {
            return (
              <div id="card">
                <div id="card1">
                  <p>{item.para}</p>
                </div>
                <br />
                <div id="card2">
                  <img src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80" alt="" height={50} width={50} />

                  <div id="card2innner">
                    <b>Gladis Lennon</b>
                    <p>Head of SEO</p>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
export default Home;
