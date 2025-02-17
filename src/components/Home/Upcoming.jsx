import React from "react";

const Upcoming = () => {
  return (
    <div>
      <div className="w-full relative min-h-[70vh] bg-[url(../../public/upcoming/upcoming.png)] bg-cover bg-center bg-no-repeat px-4">
        <div
          style={{
            background:
              "linear-gradient(to top, rgba(161, 91, 249, 1) 0%, rgba(161, 91, 249, 0) 100%)",
          }}
          className="   absolute inset-0 flex items-center justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 stanWidth justify-items-center place-items-center">
            <div>
              <div>
                <span className=" flex items-center gap-2 text-white bg-[#3b3b3b] rounded-3xl px-4 py-2 w-fit font-thin mb-5 ">
                  <img src="./upcoming/img-one.png" alt="" />
                  Shroomie
                </span>
              </div>

              <h2 className=" mb-5 font-bold">Magic Mashrooms</h2>

              <button className=" w-full md:w-fit bg-white px-20 py-4 rounded-xl flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.33931 6.74556C4.8292 5.25567 7.16714 3.75 10.5 3.75C13.8329 3.75 16.1708 5.25567 17.6607 6.74556C18.4038 7.4887 18.9397 8.23076 19.2906 8.78809C19.4664 9.06724 19.5966 9.30146 19.684 9.4683C19.7277 9.55176 19.7608 9.61849 19.7835 9.66569C19.7949 9.6893 19.8037 9.70804 19.8099 9.72157L19.8174 9.7379L19.8197 9.74306L19.8206 9.74487L19.8209 9.74558C19.821 9.74588 19.8211 9.74616 19.25 10C19.8211 10.2538 19.821 10.2541 19.8209 10.2544L19.8206 10.2551L19.8197 10.2569L19.8174 10.2621L19.8099 10.2784C19.8037 10.292 19.7949 10.3107 19.7835 10.3343C19.7608 10.3815 19.7277 10.4482 19.684 10.5317C19.5966 10.6985 19.4664 10.9328 19.2906 11.2119C18.9397 11.7692 18.4038 12.5113 17.6607 13.2544C16.1708 14.7443 13.8329 16.25 10.5 16.25C7.16714 16.25 4.8292 14.7443 3.33931 13.2544C2.59617 12.5113 2.0603 11.7692 1.70939 11.2119C1.53362 10.9328 1.40337 10.6985 1.31598 10.5317C1.27227 10.4482 1.23921 10.3815 1.21648 10.3343C1.20511 10.3107 1.19632 10.292 1.19007 10.2784L1.18258 10.2621L1.18026 10.2569L1.17944 10.2551L1.17913 10.2544C1.17899 10.2541 1.17887 10.2538 1.75 10C1.17887 9.74616 1.17899 9.74588 1.17913 9.74558L1.17944 9.74487L1.18026 9.74306L1.18258 9.7379L1.19007 9.72157C1.19632 9.70804 1.20511 9.6893 1.21648 9.66569C1.23921 9.61849 1.27227 9.55176 1.31598 9.4683C1.40337 9.30146 1.53362 9.06724 1.70939 8.78809C2.0603 8.23076 2.59617 7.4887 3.33931 6.74556ZM1.75 10L1.17887 9.74616C1.10704 9.90777 1.10704 10.0922 1.17887 10.2538L1.75 10ZM2.44882 10C2.52235 10.1377 2.62794 10.3248 2.76718 10.5459C3.08033 11.0433 3.56008 11.7074 4.22319 12.3706C5.5458 13.6932 7.58286 15 10.5 15C13.4171 15 15.4542 13.6932 16.7768 12.3706C17.4399 11.7074 17.9197 11.0433 18.2328 10.5459C18.3721 10.3248 18.4777 10.1377 18.5512 10C18.4777 9.86227 18.3721 9.67524 18.2328 9.4541C17.9197 8.95674 17.4399 8.29255 16.7768 7.62944C15.4542 6.30683 13.4171 5 10.5 5C7.58286 5 5.5458 6.30683 4.22319 7.62944C3.56008 8.29255 3.08033 8.95674 2.76718 9.4541C2.62794 9.67524 2.52235 9.86227 2.44882 10ZM19.25 10L19.8211 10.2538C19.893 10.0922 19.893 9.90777 19.8211 9.74616L19.25 10Z"
                    fill="#A259FF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 7.5C9.11929 7.5 8 8.61929 8 10C8 11.3807 9.11929 12.5 10.5 12.5C11.8807 12.5 13 11.3807 13 10C13 8.61929 11.8807 7.5 10.5 7.5ZM6.75 10C6.75 7.92893 8.42893 6.25 10.5 6.25C12.5711 6.25 14.25 7.92893 14.25 10C14.25 12.0711 12.5711 13.75 10.5 13.75C8.42893 13.75 6.75 12.0711 6.75 10Z"
                    fill="#A259FF"
                  />
                </svg>
                See NFT
              </button>
            </div>

            <div>
              <div className=" backdrop-blur-sm w-fit bg-black/40 px-10 py-10 text-white rounded-3xl">
                <p className="mb-2">Auction ends in:</p>
                <div className="flex items-center gap-4 ">
                  <div>
                    <h2 className="space-mono font-semibold">59:</h2>
                    <span>Hours</span>
                  </div>
                  <div>
                    <h2 className="space-mono font-semibold">59:</h2>
                    <span>Minutes</span>
                  </div>
                  <div>
                    <h2 className="space-mono font-semibold">59</h2>
                    <span>Seconds</span>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
