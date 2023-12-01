import Image from "next/image";
import BtnMain from "../components/BtnMain";
import SearchBar from "../components/SearchBar";
import Card1 from "../components/Card1";
export default function Home() {
  return (
    <main>
      <section className="text-sm mt-8 mx-4 mb-20 flex gap-y-10 text-center md:text-left flex-wrap items-center md:gap-0 md:gap-x-3 md:mx-10 md:flex-nowrap lg:grid lg:grid-cols-12 lg:grid-rows-[10] lg:gap-x-3 lg:mx-0 lg:mt-0">
        <div className="flex md:hidden justify-center w-full">
          <SearchBar />
        </div>
        <div className="hidden lg:block row-start-[8] xl:row-start-[7] row-end-[11] col-start-[1] col-end-[3] w-4/5">
          <Image
            className="w-full"
            src={"/assets/plane.png"}
            width="100"
            height="100"
          />
        </div>
        <div className="md:basis-1/2 w-full md:l-5 lg:pl-20 xl:pl-28 row-start-[2] row-end-[10] col-start-[1] col-end-[7] flex flex-col gap-6">
          <h1 className=" text-3xl xl:text-5xl  xl:leading-[3.5rem] font-extrabold">
            Find Your <span className="text-tert">Travel Buddy</span> And Make
            Lifelong <span className="text-tert">Memories</span> 🏝️
          </h1>
          <h2 className="text-sm md:text-lg">
            Discover and connect with fellow travelers and create timeless
            journeys together
          </h2>
          <div className="flex items-center gap-x-8 md:gap-x-8 justify-center md:justify-start">
            <BtnMain url={"/"}>
              Get Started
              <svg
                className="rotate-180 stroke-white inline ml-2"
                width="15"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.57 5.92969L3.5 11.9997L9.57 18.0697"
                  stroke=""
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.4999 12H3.66992"
                  stroke=""
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </BtnMain>
            <div className="flex items-center space-x-3">
              <div className="shadow-xl rounded-full w-10 h-10 p-2 flex justify-center items-center border-[1px] border-[#FBB040]">
                <svg
                  className="ml-1"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1729 7.14401L0.841121 14.2637L0.841122 0.0242767L13.1729 7.14401Z"
                    fill="#FBB040"
                  />
                </svg>
              </div>
              <span>Play Demo</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block row-start-[2] row-end-[10] col-start-[7] col-end-[10]">
          <div>
            <Image
              className="h-full w-full"
              src={"/assets/heroA.png"}
              width="500"
              height="500"
            />
          </div>
        </div>

        <div className="hidden lg:block row-start-[1] row-end-[3] col-start-[10] col-end-[13] lg:-mb-6 xl:-mb-3 mx-auto">
          <Image
            className=""
            src={"/assets/kite.png"}
            width="100"
            height="100"
          />
        </div>
        <div className="md:basis-1/2 w-full row-start-[3] row-end-[11] col-start-[10] col-end-[13]">
          <div className="inline-block md:hidden mx-auto -mb-10">
            <Image
              className=""
              src={"/assets/kite.png"}
              width="100"
              height="100"
            />
          </div>
          <div className="rounded-3xl overflow-clip">
            <Image
              className="w-full h-full"
              src={"/assets/heroBi.png"}
              width="1000"
              height="1000"
            />
          </div>
        </div>
      </section>
      <div className="hidden md:flex justify-center mb-20">
        <SearchBar />
      </div>
      <section className="text-sm mx-4 md:px-5 lg:px-20 xl:px-28 flex">
        <div className="basis-1/2 w-full">
          <div className="mb-6">
            <h2 className="text-tert text-lg font-semibold">QUICK GUIDE</h2>
            <h3 className="text-3xl xl:text-5xl xl:leading-[3.5rem] font-extrabold text-[#14183E]">
              How to get Started 🤙🏻
            </h3>
          </div>
          <div className="space-y-6">
            <Card1
              svgIcon={
                <svg
              width="24"
              height="28"
              viewBox="0 0 24 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path d="M0 26.68H24V2.68H0V26.68Z" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_334_1638"
                    transform="scale(0.015625)"
                  />
                </pattern>
                <image
                  id="image0_334_1638"
                  width="64"
                  height="64"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
              }
              title="Search for Destination"
              content=" for your destination at the top bar and you will be
              prompted to signup if you don&#39;t have an account"
            />
            <Card1
              svgIcon={
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path d="M0 24.68H24V0.68H0V24.68Z" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_334_1656"
                        transform="scale(0.015625)"
                      />
                    </pattern>
                    <image
                      id="image0_334_1656"
                      width="64"
                      height="64"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAASZ0lEQVR4nOWbeXCcd3nHP++xx7v3ru7DlhQ7lm3ZSohjyyEQ4pCLlKF0ChbD2aYUhiMehrT5AygDQ0kCBKYJ5WqhQ5t0GodJIYESKHGOCSGJYyWxLku2ZOu+tffu++579o/dtVaKcxhiy9Bn5p0draR53+fzfr/P8/x++y78Pw4HZOFs/uGn995bpS0vX700NHStvrwcrt66tTeyYcN//fnHPjZ+ri7yXMfrAvDrhx6KjB058vH88PCHIobR4ZckJEkip2lkXa6xxre97a5333LLd871xZ6LeE0AP/nhD687+ZvffLVOVXd31NfTEIshyjKqoZNRC8wn4kxns+Tr6++56Morb73pgx80z8eFv1Ehv9ovf/ClL9124oEHvtAZjQZ37dxJbTSKKMs4polWKBDwFPB7PQSSSfpHRg7MejwBVVU/oSiKfr4S+EPjjACGhoelR37wg28tPf74gb2trVza2kosGgW/HyQJwTBQZBlJEpEEAUEQEEWRwRMnbv6fO+9gfnHhc+m8pl3csjF1vhM62zijBb73+c/fPX/o0IF9HR10NDdTFY1COAyKAoIAug75PKgqBVUlrWmk8nlm5mY4Lrjx/MWHhx2hMFzvdbpvuPEd2vlO6mziZQr4yXe/e2vfvfceuGb7muSDQfB4in8kSTiOU+wjjkPAtrDyNkbbVhINHUwMjrTH5Hzs0huvigEz5zmnswqx8odnDh265ujBg7d3tbWxfUNzUfaRCIRCRfkrCni9OIqCoyhYihfcbgTBYaSqmd/WbedUMo0syIQ37KhaVLk7n00r65Tb64rTCjh18mT1fbfdds+mQMDd0dJCLBRCqEzc4wFZxnEcHEHAtm2wTLScwwv+Oh731LKYSiGaFt5wjKxqi/0T2fd45LFCYnnxo9GqmgvSCqcV0PPzn3+CmZmO9pYWIn4/kuIFlwtkGUQRBAFHEHBEEVuWweVCtUxe8FTzbGQjuUIBDxKKz4+m5dHyOQq6Rd+0+oGe45M/eunFI4H1TPSVQgQYGRhoPXHo0C0tdXWEgsHinbYdME0wDDAMHMPAsSwcwMEhq6r0u6oYDNVh6ioBj0Ig4MOxTFwuF6LgEF+OE0/kGJ7X3z+e1O890nfs+sMvDmxZ55xXhQwwevjwdXI+XxNra8ORJFTTxFMo4C3feYpJ246DI0lkczlG5CijIljpBJFwFQXdIJvLEQyFMQydXC6DRwmQyyQxdRWP0vruk72T71LUiXuBv1rXrCtCHO3rExPDw38WUhRkjwfdtlENg5ymoakqTi4HuRx2Lo+Ty5KNJxiXw4w5OmZ6iurqevz+AH6fn2g4hMcl4tgWPn8AQ8uRTycQJYXJ0eMUem4TY7N3vnnwhSfb1zvxcohOOi27C4UmxefDEUU00ySn62R1nYymoebzWLkcQiZDPp5kwqUwnF8iNz9EbXUtHq+PUDBAyCfjkmW8Hi+hUAjHKGAWcvgjjRTSU9ROfYGu6pdo8Y1cPP/MgQf6nn/igoAg1l10kbFx27bnXLKMJUnogkDOMMhoBbKaRkbTKORy5NNp+kyLp6ZHmT7xIjVV1UheP0G/B4+TQ5TdhEJhQn4F0TGxjQKBWBuKPc/W9Fd4U3SASAS8fgjoRzvjzx94oO/5J7auO4BgQ4Oz+Zpr/j1WV1ewbRvT7UYTRTJ6gYymkdM0kvk8j8WTPHisn/6jL+D1+BBlhbAX7NwCjigTDvrxSBYIAoZu4I+1scE3wx7zy+yIniAYLjYUSQJfAPx6b2f8yIGDfYfXF4IIENm8+fn2ffu+6nG5sGUZS1HQZJmsYZBVNQ7NL3L/8SGGR06gFyxyqoGWibM8P40gikS8Dk4hhSO4yGsGSmgD2xoSXFt3F3uaTxEJg0sGlwRSsa7iC0BA7+1M9KwvhNNzwIa3vvWO1s7O/5RMC9vlwvb7KYgiT8fj/HRynPnEEo5pU1B1pienODE6Tiar4jbT5FILOIJEOqfiUWK0B4e4RPkOLTtqiFzcRHUEFBlEqThSiFIJgr8CwvNPrguE0wCkSMSs6+j4ZG1N9c9Ey8IRBI7l8zyysMBCJo2MiIRAKpVmKZFmYSHB/OQpJianMQ2DVCaLy+WjTfgdLfmvUOc5CaYfu3EvgdZmqsLglYsKkIQiCARQyko4csu6KOFlq0Ftejoy+dhjP3z2SM+7f7OwKM2kkvhdLvRCAcM0UdwuFNmNJInUN9bR1NhAsL4FpWoztfoz1Kn/xIZGHX+wCsntRow2IQV9MPMs+bEp4mnQLbAdcJziKw7kc5B1dfZGd93TvXPP1UPnC4C49g1vU1PStevyvx+wrGyioNLW3ExNbS2BUAiPx4OAQDKfx7AslmcXmJiYYylhIk4/RFX6GzTV5lCUAKJjIFgFhNQ0TjYPjXvxtTYTC4GnNF2LYqkmiCU7GOe/JrwMAAChoJaRXaMhvz+lKF4CgQDVVVX4fD4MwOWS0VSVXE4lq7ux5h/jIulHtDWp+Hx+JEwELATHAlOH5AxOToWmIoRoEDwSiEKxFggCIKwPhDNuiCSTCfHRQ483WpZVOzQ09I35+flrbNsCBBLxOOl0Gkc3UbzVNFQleP/eZ9m5qYDsDiBKEpIkIogyoiiBKCGIMsgehEgTBBSYLtohkYGCtWIF2wYcUHOQcXX2Ri//dvfO3W87p3Z4zU3R3r6+mkcfPfTjY0NDN/kUhVQqRSKRQM1BfTjJx68+wq72PI4ULCYtSQiihCCKCIIEgoQglSBIHog2gt/3mhBO14TL7+neufvc1YQzW6AiOnfuXPybm2/+cHt7+6/i8TiiKGI5Ltwuna4NvWxvyOAWQRZMJMFCxC7J30ZwLAQssC2wTbAKkJiBCjvESnYQhKIlxEo76L2diSPntkW+JgCAcDi0/L7u/R9pam56YmE5RTjo4cotaRprqumbUEilLGQ0RAwEzGLijgVUQHAscMoQpiGbh6a9KGtqgihWQKhskedobH5dAACam5oW3nrVvrv9XpFW5Rhb67J4fTUsF9rpG/eRTpmIjobgGKuSB7uUfEkJZQjJacjlVxVGd1kJ4kqB9AVKhfHIgXMC4XUDAFC8vpE9l3Xcf3m7/7hgxnFsDZ8/SNLYSu8pP5mkieBoCBjFRE/f+VeAcFoJXau6QxmCUB6W/JUQ3lg7nNVng+XILAx29P7i1vuXZ/p2eIMNiJIPVcsSkY5xSVueYFQG0QuiCwS5mIkgVbxKpXlYKhXGJvCXu8M0iczKsLSqMGYh635ju8PvBQAgvzyy/cWffeqB5PyxDm+wAUHykVczRKRjdLblihAED4ju1weh3CKnniU/vgaCXewSzjnoDmdlgcrwVW0evPRd394fre8YKGTnwFYJ+MOk7I6iHeImOAVwSnZwXskOFljFYWmlOzQRK9WEcmEU1nSH+Btkh99bAeXILZ3Y3v/I3/1HYqZ3lzdYjyD7yeezBIUBdmzMEI7JIHlBcK3c+VVKEIsKESuU4Fdg9jDq2OTpOcG2S0dJCWrJDpE33fXhzr3XH103AABqcnxT3y8+czAxc3SXN9iAIPvJ5bP4nT46N2YIV0nFmiC4V2R/Onmxwg4ySO6SHfwwcxh1fIJEGgrmih3KCyg1B2mx/Xjk8nu6L9l7w0vrBgBATYxt6v/lZ09DEF1+crkcitVLZ0t6BYLoPoMSymqoUEK4sQhh7jDa2ATxSgjllaQN2gqE/ZfsveGslfCGAQDIJ8Y2Dfzy1oPJ2d5dnmA9UgmC1zpK58YSBKmkBMp3fU1xFOWVwhhuhGBRCdp4CYK1UhStirVDSmw/Htl1z/5Lrzg7CL93ETxT+KKtox03fbM70tjZo2fnsa08gUAATb6UvokQyWULLA1svaIw2qtf7dL7VgFSM5DNQeMevK0bikvpilVkeXtN8UPIHt6SOHLggf7Dj12ybgBOQ7jxm92Rhs6eQmYe28wTDATRXG+ivwzB1krdYW1nqIRQnhhLEOr34G0pQvDKKxDEimEpbA9vWX7+0wd7fvvIznUDAOCLtY52vOOuIoTsPLaZIxAIUnBfthqCrb8KBGtFCcmZ4tjcUIQQLUMojcynlRCAoDnYvnz4lvuHep97XS3ynAAAUKKtox03fKM7Ut/Zo2Xnccw8wWAQ3bOL/onwagh25ZzwCkpIzVZAaCYaXg1BrIAQE0a2Tz35sftOnhhoWDcAAEqsdXTbDV/vjtTt7NGyc9hGCYK3BGGpwg6vCKH0s1mGoEJDF96Nq7fXpIrtNX8QvNmju8af/uK31hUAFO2w7Yavd4frdvZomTksI08oGMTw7qJ/cg2EVQAqjrISzFJhzKnQsAfPhqZVNeH0KlL2EYoFMWYfes+xnl9fua4AyhC2X/+17nD9jp5CpqiEUCiMqVy+GoKtr9zxl43Na+yQ16ChC8+GxmJNcJUgOCCHr8Ld8kmkyJXy9PEnPrruAKBkh+u/1h2q21FSQq4Iwbeb/skwiSUL7AI4JQjlYy0E2yy20tQsqAWo342nub6oBFepK0g+bFcdSvXlGIZ91fjYyci6A4BiYdx2/Z3dwdqOFQjBEJZvNwNTayCsrQf2GghmCYJmQPWluOtiRILFj99sS8exVNyygFWIt85NDF5zQQCAIoSt193ZHart6NHSc9hmUQmWb88ZIJgVSrBergRTLSlBB38T3pCAzwOCpCAIApIs4xItcX78xe5Xup7zDgCKNWHrdXd0B2u396jpohLCoTC2r4uBtXZwzDXL6dKOkm2CZYCehdQYpKfAdPD7JHyhZiQJJFHA71Nw9Pju/t4XYme6lnUBAEUltF93R3ewZnuPlpnDNHKEwmHsQNeKEqw1djhdG+zi74w4aLOQnymulFwteBrfQ7j6IrwuG1kWURQFwUy3JBbGrj7Tdbzqs8LnOnzR1lE1PtY9/OjnDmaWju1Swg2EwxFSdDEw+RwdTopodQEkAFfpv5yiAgQX+LaBux7EGnA1gxwDOYBPy6MX3JimiW07eGRbjM8O7gf+e+01rJsCyqHEWkfbr7u9O1izrUdLz2LpWcLhKE6gi4GpEPGl0t229dJhgJkE70Zo+gTUvB9C+8DTBqIPLB1BFgj4vfgVDy5ZJhT0gx7fPTTYH117/nUHACU7XHt7d6B6W4+ansM2soQjMZzgXgamQiwv2it2sAtgmSA3gK2AmoRCEoxscVCybUDA5XET9HvxKW4CgQCilW5dnhvdt/bcFwQAKELY8vbbuwPVW3vU1CyWkSUSqYLgXgamwiwuOsVnFq0CWIBQA4VC8b3KXZLyIYooiqeoBJ+C34O4OHV0/9rzXjAAoNgdtrz99u5AzfYjWna5CCFahRDson8ywtScg5530A0PFrXYuo5tWdiWjVPeK7MdsAEcBFki4PMQ8HmoioaQzGTXQN+Lq7rBBQUAihAuvvqL+93eyHNqeg5LzxMIhsnarfyuH3oGYSYRJGcEKRQ0dMPGNC1My8Yqgyg9yY4AsttF0O8lGo3gEdWW5OKpayvPd8EBAPBVbzlV07rvvUpw46F0fIaltITlaiVhbeGluVaOLuxhZFJlYWmZXL5AQTcxDAvTKoI4rQYAUcTrdRMJ+qkKuYTswuD7Ks/1hu4JvtGx0P9weGrwwS/PLGa6VbGlXi/o6JaALbhxiybRoEhtlUJVxEfA58HjlpFlCZckIssSYvmBJMDWDRYWlnj46bmpt7zzs7s6tm9ZgHWeA14rane8KwV8ZvSZe7+/nMp+IJlM3phOLe/IZdNeTXOYLcjEMxaxoEpNzEtV2EfA78XrkXHbDm6XhETx2Twx4iM/4+Kf7/tdsx3efRPwY7jAAZRj0xUfGgL+YWzwqTuNgnrZ8vx499L8xFvS6dSObC4vTakC8ZROLKxRE1WoiiqE/F4UxY3HcXDJbpBEHn56jsGxFI8eevS9lABc0BZ4tTjZ93gol1nuSi7N7l9anO1KpTI7NC0veN0iVVEf9VU+qqN+IiGFSG2QI71xvvpvfQwOn8LnlWe/d/edu6+44s3Tf7QAKmPkpf+NZlJLVySWF7uXlxf3ZFLxrRIG0bCbrW3VzC1l+fp9g9hyBEm06RsY5rOf/tuPH7jlU//yJwGgMiaOP1ezOH3yqvnZyfflsonLMunkRf968CmO9E2wbetmNm3ewvjULJvaWn515z9+8aY/ihpwNrFxS9ci8CDw4NjAU03P9Y5ft7lT+EvJN3TpyZETzYlEnGhVLcvLy7tOnjzV+CengFeKnz38i9ZTY2M3Pvnkk+88OTKyPRaLeW7+64/cIJS+Qv5H9X3fPzS++73vN4WCgVhnZ+eJ/wOCYpXuoewAaQAAAABJRU5ErkJggg=="
                    />
                  </defs>
                </svg>
              }
              title="Login/Sign up "
              content="Login/SIgn up to be able to explore our beautiful destinations and meet amazing travelers"
            />
            <Card1
              svgIcon={
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <path d="M0 24.68H24V0.68H0V24.68Z" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0_334_1648"
                        transform="scale(0.015625)"
                      />
                    </pattern>
                    <image
                      id="image0_334_1648"
                      width="64"
                      height="64"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAavklEQVR4nO2beZBlV33fP2e799239TLdsy/SaCS0jwCBQBgkYYiBYAwVQlJxUhYmDjixie3CSbyVTezEMSZbOeBAQRwnlRjsGOxgwOxmMy5EMFoBLWgZzaLp9b1+793lbPnj3tfds4mRUMp/OKfq1Ntu3z6/7+/7W8+5IsbIX+ch/6oX8Fc9/toDoLd/GLy99YzcVMQAMWJJyNU8qagulSruIm1dqRJxpTbi0mj0rBRhVohoQpST4OUa1q6EKjwYy/Je69UjyuYnCNUTIYBWgSglKvpnZI0zv1wAZwHwvQ4RAyEKPAlC6WtElr2k19U/mHX8DarDvGzHVKQOjAPlQTX+JwIecBoqTSgMcexHbpydysfdL8ZR8Ufeur+MIRxTWIQQRMQzsuZnBABBIASBF2k3Jumtppv8WGvWv1jPhDnZW4e2hVaEVECagemD7oJMAAnRQyjBbkA1RJYFlHRVLo+k4/RI2FBvrNaTRycD9SE/kf8TX31NCYcQfM9AfE8ACCIxgouJiab16rQv39aa9zfruQn0Suh46MxA9zJo7YX0CkiuAr0fxDzQAgHECEwgLIM7BuV9UDwI+QkYP4YcDWjNm0OtQfrT1Zr6h5P17h+6cfUu4auvaWGJ4um7sqcNgCDgg8Kr7GbTUb/Y2eFeqXeU0M+hp2HmUujfAL2XQ3K0FljMACk156cTNpUoZb2iVg79QQ1I+TUYfhoGd0H3MZIevWS2fXu5rF83Xmu/tyqqf6djeUqK+LTYILbnARftBGPERZPGJPup3rz7+XTR9pkpoC9g/nJY+JvQewXoQ0AbogNCo+mpxNO5edP6mk1QBAgFKGAD7EOw/sew9ClYfQyGkriaMlpO7yyG/JwOk48rES4ahKkTfEoATClvaR3Umf4PvcXqdWqhgn4F87th9w/B/OtAH2zkqRqhFAhJHXXVBQCYCh8asPzWeyFBpCA8VA/C0gfh5MdhbQDrKeVSWoxW9duFLX5TSee5CBCechQQREIUVGTXZx1+t7srv0HsqGAW2HUz7H0jtG+AEMAvN8KpRmgJsXkvZPPb9PUsAGKgDgnbXmOAOKwvM3th31uh9zx4/L+BvpNUuZZW6a8PVloHbVW9LRHlJF5kinNRAAhq+yrp3Jh1wwd6u/LL2FHBXAsOvB52vwFUD9xyLcR2wcX0ffMavwsAU61vCu/P/M6PahD7N8LhQ5D+d5AfQ4mcGRl/fLjU6tsyvsVIO7oYc7hoBhQxuzZr+w/2d04OM29hfhYO/QgsvKxemDvNlobPFnjb583fz15cI3ycgnAWCzaThVCzLAxBt2Df7aDngA+iYs5MCD+8ttS2lRNvSURVfjcQvisAgkgRWnvTVvgf/YX8MLMWZufg4Bth7oUQ1kB6Nm37ggJPTeHJANjOgG3zDBZsY0oYQzSw8Ir6vv73kCFnxonbB6vpuvXmp42wT+oYnxQAQcTGREstf3tmbnw9sw5murD/70LvOnBLdTY3FVJMqX22wFPHp5prLhQFpj7gu8wpS2KAMIEgYe5FcCAH/4doW9Kz/NT6ILtf4n9bceHocEEABBEfJU4kPzM/M36NmHPQM7D7ldC7GvwK6NgIKWoQNu17mwM8AxTROMOzhd8GwDks2A6KP/OaOP3d10DM3QT5CpSfIrEVnVL961Ge3pGJ/GsXkvOCAEQEVUyf12kVv2xmPLQFLNwIM0fBr9eLCQ3Fp0KKswCYfo7bnV7zek72FrcE2k5zAVt+YPp9c20MEJr3IUDQsOMFMD4J5d20Z8vZwupfr1zy2kRU4/Ox4LwACCJVTLSQ4l91+lWbtoP+AZi7EZjUiU2UDQCNwGobCIlp7rTNN4QSbGyiAg0o58K+KXgyNZ1tTtFX4Fz9XYjg47kgyBQWboKNk4h8me64eNn6oHV7FPJdm0nWdwMgIrBRv6rfzl8uOgGyNszdAFKDH9ZCToXfbtNaQZJQPHKC4Z/ej310hOqntF9ymN4LDiPSBMqCLfqf7QOarxKNG64x/PwDlHeeQGhBduNeerccRqYaJlXtB8J0bgPBTSDpw/y1sPFF0o5Fj81bC5d+KJP5ybNZcA4AjfbbUvhfaHdcnbp3D0C2qxEe8A2NpaiBgBqU1LD6kbsYvfdR2jtvpHPkSuLyEwx+/rOcvvwODvza95PunoPCNbJPF7NNM4lh8MX7WH7HHbTtLtLLriMKQf6le8k/8gBzP/ts0r2zMKq2AbANhBBqpnQOQn8/jB+lk5VXrG9kPxKQ/0acxYLzMEBgo76l08qfL1oBsi70LoFYQvCgNKQSVMOAECEIaGsGn7if8l0r7PnRX8P8wG31QpaXmb3uKI/9x//EI2/93xx+z6sw/QxsaACIW68tzeDP7+eRN3+GfUduZeFH/w486wjMzcO4YPKe9zP81U8x+y+PYroZuAAigqG2FufBN1OYWnGtk6SZQ03C7VVI/ksmitNhGwv0maJHbDQqEH88bTlIBGQ7QGfABDKNXR3iV8YgJWohwxzoQ5pgn1hj/P6HWbztLZijl8OXPwdLSzCZIBLD/te+igd+532sf+oeFt9wLVTuTBNQEHLP8X//FdryIHO33Eh84hicPg7dLuLgQdp/728j/u0j5B/+FubHrgYjiBsF1bEBYVQhtKS1uw8tDcMS0lloLyLSk6SmetYkb70mKvG+J2WAj/JIIsuX6iSCaUG60HRvHKd//5uMPjZgZvEyTKdFrFaIlx6j9YZdjO9cxqzvwCz2iJ/+BHFlBYq8tnnnUO02C5c8i+FHH2buFXvQaVr7tukwguEdx7H3luy+7nLiyeMEZ0EniMQQH/kOcs8+0oNHGHzmbvRLT+CPlYw/vIJam0EkGZOlk4SZe9n5piO0D81CEWsQkiWS1DMpeaVDv09jzw9ARGLRt7ZN2RFGQNKBJCMy4cR7H6D6sz67//Fv0D56HQzW4NsPMPnMJ1n+yb9gI19nz95b4bEHCSvLUBaIsgRbIZyDJKHbbTG4vyL/zhK9axZr85maUYTB/zmFKttkBsTJE+AdSEU0GkxCWFlGtDrY44pH3/JVZvUhZq57FdnfehHi0EG8MAz/4Pc59SvvY/Gf7qH3rAUwHUjaqGSIEP5lVUyuM8LefV4ALEbbwOu0dkRtam+aRgZfeYzys4ZD/+JXUc+9Bh56EE6dBL9B++hVyG94zL13ksxvEB/4FlQVIvjaJp0Fa0FJ9CRg8oBbGRFdB+FFnRb4SJwEyqUJIoAcrkOwTViTzVRErRBZRjdqzOohFm+7FXXVJWCHsHICdfgy5n7l51C/FFh5/7vJfkGjlaoVqUcoWfVtJW+JWp4fgBjiPh2LZ6Mj0SRgMkKeM/izFWYvfwWqp4mf+DhxdRkGA+LGACYT0iSweNkBwmRCLAukbPKB4MA6hLVAQG5YhHOEsiKWBQJZA+AiwTt84XB5QVhfBVU3PoVSIAWicZRhOKTX6zKzfwYxPE34xgZ0+4heH/HAt+HI5fRvexGrX/4Ia186zuJL9hKFJCiJ1J5QxSurqM5vAiGyV0g/h5JEoQCHXXVMHnO0L1HE++4lLp0iDgewsQGTMRQFsSrAWtS0F6EUQogtBrham2GU49oelCdWVaNZQXSB6B2qD2WZY9cHmE4LoRQiKJCqdpexjvVSqloBRUHM2jAcQqdLHKwhBwPYtx9aC4zuf4TFm8s68CmFUA6HeraKZEB+DgAV5nIhrUE0+Zez+DLirKVcOo1/Yh6xfBo2hpDn4GytXe8Q3iOmIS1O47HbCkvOUWzkVPtB9YGyhETXGWEIYC2tvZqy5Zisj8i0QCZJnWLFuJlwCSA29xaVQMRIrErIxzDaIOY5+IAfD5ExEooagChUzbborvKklwL3nesDvLg6kfUGRBSRYC1SKfROweThY/hLdqI3hjDagKpqko+ACGErr5l2eUPY1BgxQuVZr0rikQTToWaHoc4hQiRaT7ZXExYlg8dyZnsJSgqEnGaczSKFqNkVAeeIwSMqSZQSURQIAXZc4ienyPYn+KJmXxR14hainwuRy6cAnFGRRO8viU3pGCME7yAEOlenDAePM370OFRlQ/vGw3uHCNPKbIrCNjCEhAjVpGJVOczlBiWnFZyH4BDBI7wn7QvkHsXquKIsLdH5GsgpszZTb+q/dbaONHmOmIwRkzEUOaN7vkWcWSM71CKUlhgdkUgUAhEshTd7pjKfAUAV5SwxNDVXABxYT/dwC3VlxbE772GyskYsS0RVIWzV2LffDGV1wSdq+1ZN/e8968OSyQ7IDhhkqJMufKhnwxbTksxe32JkAhvjEl81kaDRHlJsMawxK6xFVCWiKsFZ/LFTrJ9+iOSoRremmy6WGCMxCiIeF+icF4AQ40yIU+bW5adQkaSlWbyly2h2le/c+x1G6wN8nhOKsjYF72oGbKMpUtUgxIgvLCtlRfrchM7eejdICFnTvynxpZAIJAvPbsFByfKwpCxtbSrT8nlqDtOqMTQgNKE2rm3wxMOPYK+v6F7brutQGYkEYgx1UR0FKtrsvAAQow40yow1EtKA0pLOzhZ7fqjH+sIG33zoCZZWhhTjCVVeEIuyjvU+bC12qinrGG2UDLNA/4YWpiWRsnZedR1BXfYLkELQ2WnoPCthvXSMiwpfVE1uP71vY1uhYZBzUFrKlTHHjp9mcLSk85IOSWpQiazbDjFuuaRaTnleAHyUk+1FVYwBIUFlCtMy9A+1OfD6PtW1nvuW1nn4iQ0GGxPGowl2lMMkh6IA2yy6coS8YGlYEK9Q9A+nSKGRetoo2VKmEAKpFbpl2PnCNm5esj6qKPIC8qK+32YfwNf/oyiohhNOnBzw7WLA8MWB7ku7ZDMtkpZGJgIhAiGEqb+uJ2ozFz6rGGIYgqhNOkSirx2VMpD0DCHWFealr5Wc3Dvh2FcKVk5V7OokzLUN3byglSToxIDWYC2DwYTTwjL7wi7ZQorUaov+Yro7XNuO1BKpFHPPyjh+2YjVOxzznYpsNEEqBWlSa7woqcYFa4OcU3nJ5ICn9+KE2SvbtDsJaTdBtwVSeYL1RH8mAFabyXkB0DIuO98A4AXBB2JwiOhRaUJrtoVQdZZ38FZN75KCpa8XPHxPyfKSZaFtmG2VdIzGSIkNgcfXC4r9kpkrM5TSKNMkSVGc2aCJAiEkUmvSXsL88zNO3T1kvXCkqqQLCK0oK8f6sGQpLxkveMzNisXrO3R3piRpQmsmwbQVStYhMnpf+1kPwUdc1GSy2jg/AEreXzqJ9xHva4cRo4doERhMq4VQGTJRyA3NwhWK/j7D2jUVq3dXPHZPxeqqYDbTZImkcIET1rL4wg79fSlSaaTUDe3P7QoJAcoIlPHsfE6b058dc/pbFq0FG5WjqCJrlaNciKQ3KeavyujtSzBpQtJOSLoGk2mkrMNrDJYQImErF8MHbVPpHz4vAIn0906CxDtP8JHgIsEHlHZ1cSINOk0RRqJSTTXWSGPYeV3CzKWWtatK1u+xHPumRa+DtQG3T7J4QxudaJSRdS4XtjdCthkgsQ4eWtFeSJh/bovHv7VBNSjrduKCpPc8xY7rUnoHEpLUoNOEpGdI2hqVGKTw4B0x1Flo8LFJSCPORhD6RKLi/ecFIBXu0ejixFrarslig4foPUI1ICiFNgapFCrR6CzBTipUYkmfbZg9YhlcX7FyV8nKnY6DN3XoH8wQyiB1U4Rs7wOcMQQCiTIalSTsfn6Xx78wYW3g2fX8FvNXJfQPGEzLoFND0k0wmUGnCqUVgkD0FrwlekvwgSaXw9cpA1LKv5QynjwvAErJ4xFzypb5YWcjzoF2ELRHBts0Ret2t1QGoSQy0ehMY7oOO7LIpCLtG2aPpOx6YWDmUAudGFSiEaLJ/WOzn3CenihxygJNtpByxRtmid7T329QqUKnCaabkLQNKlEoLZFC1nmIt432LdE7vG/o78DbiK0gU+4+LTbT1jMBMDosmyT9XFWVh10VcDbgnER5gXQeKS1CKKKvkxahDcoIZGMSOjOY3FCNLSZz9PcJVMug0qTRkGi0/2T7dQIpJTrRmE7K7ucKfO6JQWDaBtMx6JZGaYWcpsU+NFpvWBpcbcKN8M5GbOmxTjPTUncnotz8b2c6QRw9oz68VMo32TJgqohLI9qBVxHhbB3ChCQKWTc0MAipUDoildw0C195IrHWUqbrun675xfb1d58se2jNJqkC1IqYja9t2qiSJ031IXUlsMjVBAqovPbMuWIqyJlEVEyeTBLxGe2n4k4sycYI5kJXxPo42VR7DNVRFcRZxpaioAU1ZlFCRFEWtfsIqAEiJZCp7HeMVMglEDEJu2dlo1ntMWnWGzlBRKBSA1SaQgR0VSBYnvZGV1N+9BMXxGdw/m46fRcFbBloCqhrePH2qpaCuECXeEQoaXDE+1W+nvjsnqbLQI6CWgjUSrilED4gBLVFK9GkQFiAqkBJJKmoNiUcUr9uA24bQKLqV+YCrZ1qdJxG2ua352r+wnRQfDEUNTCe9sIz5bwVaQqPN4nIeuoPxFUXLAtHhEoHLMt/V/HE/0TZW5bKlUoE5BabkvFAwqLaEmKDc9HP7WOc5HnXNNj974e3dkWoq3B1O2sbUhceJwdETfZQG3jhaMYVqwu5dz7rQEPPDrhlhfMcM31GcKWRGcJLjbePtaCl5GqCJSTSKr1n/bS8Ll4VgQ6py0eArS1u6+Vph8ocnu7Tn3t6HSoi5imPSViQIUS5xRf+MaIYycq7rhnwHw/YXY2Ye/OlH17UhZ2pPR6hjTTmFQ1bJIIJc4gQV0dR7z12CpQFY7J2LK2VnHyiZLjpwqWVivWhxWnVh0rQ7jiipRrlCQ6h3ex7sC5mvq18J5q4rBWM9eX70tF7txZe5LnABARKOHifMf85vHV5A12UrVVIpEqIJVEiMB0h1fkge6c5pYXdfn8l9Zp9yRrueX4asmd929glKCdSrJUkqaSxEi0lmglUFoghSCE2o5CqJMV6wLWBqoqUJSBSREoXK22NBV0O5JdC4rDlyQcvTaD0uFcxHtR/20VqcpQC18EqkmgZdof7bf8n4Rz90bPvzkaAnSNva+Tpb81zqt/riYeqWoQhKiLGEGEKEhd4JYXdHn4kQkyOA7u1lQ2UlSRvIKijOSlZzh0dSrqI9Oew/aIMPWrSgq0Aq0FSQLzHUGWalqpIDH1NaeXPC9+QY/FnQq/ZhuPX3v7qgq14EXAThzeJZPFWd6Risq6cK4ZXnB3WEXHYke9Iy+zV1eTyTXKSColtvxA46zEhmPHrObm58/yxS8vo1WknYn66Oy2CsyHuLWJu81HTofYBkLdUBKopgeitvVCllY8Bw51eO71bcKopLK1x5+yphbe43JHORF0svRdMy37BX+B7POCByR8FGSqWl3sZ289tZZ83I5tImSzkbHpyRUxgtwouelom1PLMzx0/zp7FjVa1zffElRsvr/QMxrT254RKTe/gPWBRxjD998yT8d48jWHC+CmwpeeqvDY3FOOPVq1/2Jn1/+GjA5/ASf8pIfpQojMpcVnZ7vpL+a5wE4sduKp8vofVWXAukg+8TAp+BvfN8PeA32eWHZYGzeFmvZHp5s8Sp1/Tn/fbCg1wsdYC587xctuW2T/jkixWuA8tcOc2vzEY3NHNXIEl57c1Zf/JFN2xZ/3MMZFABAREAO7uvadnVbn3ZORwE0cNneUhacqHFXpsS4yGla0Q84Pvmye/ZfOcnrFk+dhs+iLbFH/oiab/VRWVhxeJPzAy3dz9SFJsTKhtI2zK309c48tHHbkKEszWugnb55Jyq+7CxZe9fiux+RCFChc3Dcjf+ZYbPcmG5N/0BGO7eeUYoCgBYO1kt4MvOalc/z5nSn33LXCZOLo9xVGiwbUJx/TnChGmEwCw1FgcU+fF9+8g0PzlsnSiNKGphcasJXHFh5XeKqRo8hVudhPfmIhqz7iw9kl99MAAGp/kKiqPLhg3vLYcseNBuM3drytd2ViJIZISCTBSNZXC7odz23P6bF/917uum/IiWMbKBzttiRJBFJuLWqT6tRCOxvJi0BeRLJ+xnNvmuU5V2Z0RM7g1AQ7zfSqgLMeWwZ84Sk2LHmZjHb2k5/c2a5+N4SLOzh90SdFfRCkqpocmufNx9ezlcFG+ba2t7Saw0rBK4KLKCMY+JIktxyZ73Dw1nkePN7j4cdzTh4fMVqvmpohbnr2zUgRBUIrFhb7XL2vzWUHU3b3A8X6OqtjWxd9TaLjrceV9RwPPd6lx3bPmrcuZPaPgr/4U+NP6XkBHwWayu6fMT+bmNZDS0P7dmvLnZ1uQLcCIVFoLwm67itWpzZI0wlX7sy4Yn+PpfUOp1ccoyKwMXaMR5YQIE0V/b6h3ZLM9yV7Fg0d7aiGG6w+XjLdIPIu4F3EVx5fBsrcMR4LlMw+v3+H/GezaflV75/acwNP+YEJHyUiOPb2wn9uJ8nXTw70L62tFa9utyytbiA4hTISpSNKC5yL5JMhxmwwlyXs3JsgkgQvUqwHECgZ0SIivMUXBcXqkOWibmbWW3SR4EKd8VUBWzgmo4B1ybjXTn9rz4x/ZybKFeun2+gXP57WEyMBAT4wlxRfzRbM65fH2ZvWR+4fTZbt0SyraLUVOpFoI5FKIJXAOUFRFIj1YivRaeqBGOMZGWKMghhq3+Jd3Zv0NmBLz2QSKStNO03/164d8j1zLftpER3ny/L+nwEAdYi0AYyw5YEZ9+65tvnQykb69wd5/OHxcnVDmlhaLYFJZd22aoCQzf6e2L7jW99w06HWZx5rwZ31VGWs91u88e1E//GeOfmBHR3/B4lozOMpav0ZAWA6QhRYH2nL6lRnTrxzMmt+Z3WUvXach1uHo/iKOKwWjHZoDcbUOb5UAiHFGa2BWuhQHydwEWubjo5XaJPe003jJ/uZ+ORsFj6RiKKOBOLsU39PfTxjzw36KMBHMl2t7J1T748z4v3D0lw9GovvK128svTy6MY4XOmD3y3xUmHPbAhFgceAkKVS6rHUyLt6mb83SdTdWTv93KyZrOhQ4pzANn/49PW+NZ7RByehBiJ4UNExl7r75hPucyg8mIlVl+SluSwPev+40m0ZfBuiiohKaTlua7vRMvHh1PCdRHMilR4RKvJY71K5KL4nup9viP//9Phf8/F/AciOBNLoTxnFAAAAAElFTkSuQmCC"
                    />
                  </defs>
                </svg>
              }
              title="Explore & Connect With Like-Minded"
              content="You can join communities and connect with like minded travelers going towards your destination"
            />
          </div>
        </div>
        <div className="basis-1/2 w-full"></div>
      </section>
      <section>
        <div></div>
        <div></div>
      </section>
    </main>
  );
}
