import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  toggleStatus1,
  toggleStatus2,
} from "./boxAction";

function App() {
  const dispatch = useDispatch();
  const box1 = useSelector((state) => state.boxReducer1);
  const box2 = useSelector((state) => state.boxReducer2);
  const [disable, setDisable] = useState(false);
  const [disable2, setDisable2] = useState(false);

  const disableBtn = () => {
    return setDisable(true);
  };
  const disableBtn2 = () => {
    return setDisable2(true);
  };

  return (
    <div className="container mx-auto flex justify-evenly items-center h-screen">
      <div className="flex flex-col gap-3 justify-between items-center w-[100px] text-center">
        <h1 className="px-5 py-2 rounded-lg text-white bg-slate-500 w-full">
          {box1.count}
        </h1>
        <button
          className={`px-5 py-2 rounded-lg text-white ${
            disable
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          } w-full`}
          disabled={disable}
          onClick={() => dispatch(increment())}
        >
          +
        </button>

        <button
          className={`px-5 py-2 rounded-lg text-white ${
            disable
              ? "bg-gray-400 cursor-not-allowed"
              : " bg-yellow-500 hover:bg-green-600"
          } w-full`}
          disabled={disable}
          onClick={() => dispatch(increment())}
        >
          -
        </button>

        <button
          className="px-5 py-2 rounded-lg text-white bg-red-500 w-full"
          onClick={() => dispatch(toggleStatus1(), disableBtn())}
        >
          Stop
        </button>
      </div>
      <div className="flex flex-col gap-3 justify-between items-center w-[100px] text-center">
        <h1 className="px-5 py-2 rounded-lg text-white bg-slate-500 w-full">
          {box2.count}
        </h1>
        <button
          className={`px-5 py-2 rounded-lg text-white ${
            disable2
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          } w-full`}
          disabled={disable2}
          onClick={() => dispatch(increment())}
        >
          +
        </button>

        <button
          className={`px-5 py-2 rounded-lg text-white ${
            disable2
              ? "bg-gray-400 cursor-not-allowed"
              : " bg-yellow-500 hover:bg-green-600"
          } w-full`}
          disabled={disable2}
          onClick={() => dispatch(increment())}
        >
          -
        </button>
        <button
          className="px-5 py-2 rounded-lg text-white bg-red-500 w-full"
          onClick={() => dispatch(toggleStatus2(), disableBtn2())}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default App;
