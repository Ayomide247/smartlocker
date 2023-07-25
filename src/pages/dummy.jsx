<div className="w-full m-auto lg:w-1/2">
  <section
    // style={sectionStyle}
    className="w-full p-5 mt-20 text-center bg-fixed bg-gray-100 bg-no-repeat bg-cover shadow-lg opacity-100 h-fit md:bg-left "
  >
    <form className="flex px-2 py-4 my-16 text-black border rounded-full shadow-md border-slate-200 md:py-2 md:mx-10">
      <PiBinocularsBold className="md:hidden text-slate-500 m-auto font-bold text-[20px] ml-7" />
      <input
        className="w-full px-2 font-medium text-center border-none outline-none bg-inherit"
        placeholder="Enter your tracking Number"
      ></input>

      <button className="hidden gap-2 px-5 py-1 mx-5 font-bold bg-green-700 rounded-md cursor-pointer md:flex text-slate-50 hover:bg-green-600 md:py-2 ">
        <PiBinocularsBold className="m-auto font-bold text-[20px]" />
        Track <span className="hidden md:flex">Parcel</span>
      </button>
    </form>
  </section>

  <section className="px-5 py-5 bg-gray-100 shadow-lg md:px-20">
    <h2 className=" font-bold text-center text-[35px] my-5 ">Book a Locker.</h2>

    <div className="my-10">
      <div className="font-bold text-[20px] w-fit">From</div>
      <Select className="rounded bg-slate-300" />
      <div>
        <label class="flex items-center space-x-2 my-1">
          <input
            type="checkbox"
            class="form-checkbox text-green-700 h-5 w-5 outline-none"
          />
          <span class="text-gray-700 font-semibold">Pick Up</span>
        </label>
        <form className="w-full py-2 my-5 rounded ">
          <div className="flex justify-between w-full gap-5">
            <input
              className="w-full outline-none bg-inherit text-[16px] text-slate-600 font-semibold px-1 border border-slate-500 py-2 rounded-md "
              placeholder="Enter full address"
            ></input>
            <input
              className="w-full outline-none bg-inherit text-[16px] text-slate-600 font-semibold px-1 border border-slate-500 py-2 rounded-md "
              placeholder="Enter your Number"
            ></input>
          </div>
          <div className="flex w-full my-2 space-x-2">
            <p className="py-2 font-bold">Available Lockers: </p>
            <div className="grid p-2 bg-gray-200 rounded shadow-inner cursor-pointer">
              <span>7 Adeola Street Ikoyi</span>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div className="my-20">
      <div className="font-bold text-[20px] w-fit">To</div>
      <Select className="rounded bg-slate-300" />
      <div>
        <label class="flex items-center space-x-2 my-1">
          <input
            type="checkbox"
            class="form-checkbox text-green-700 h-5 w-5 outline-none"
          />
          <span class="text-gray-700 font-semibold">Drop Off</span>
        </label>
        <form className="w-full py-2 my-5 rounded ">
          <div className="flex justify-between w-full gap-5">
            <input
              className="w-full outline-none bg-inherit text-[16px] text-slate-600 font-semibold px-1 border border-slate-500 py-2 rounded-md "
              placeholder="Enter full address"
            ></input>
            <input
              className="w-full outline-none bg-inherit text-[16px] text-slate-600 font-semibold px-1 border border-slate-500 py-2 rounded-md "
              placeholder="Enter your Number"
            ></input>
          </div>
          <div className="flex w-full my-2 space-x-2">
            <p className="py-2 font-bold">Available Lockers: </p>
            <div className="grid p-2 bg-gray-200 rounded shadow-inner cursor-pointer">
              <span>24 Charles Street Ikeja</span>
            </div>
          </div>
        </form>
      </div>
    </div>

    <button className="flex justify-center  bg-[#FF6000] px-5 py-2 my-5 rounded-md font-medium text-slate-50 cursor-pointer ">
      Find Locker
    </button>
  </section>
</div>;
