import { useRef } from "react";

function Home({ text, dispatch }) {
  const Textref = useRef(null);
  const copyToClip = () => {
    Textref.current?.select();
    Textref.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(text);
  };

  return (
    <div className="w-full ">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl text-center mt-32 font-semibold mb-8">TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
        <div>
          <p className="text-xl font-semibold py-2">Enter Your Text Here:</p>
          <textarea
            className='rounded-xl'
            name=""
            id=""
            cols="170"
            rows="10"
            value={text}
            ref={Textref}
            onChange={(e) =>dispatch({type:"text", payload : e.target.value}) }
          ></textarea>
        </div>
        <div className="flex gap-3 mt-4 ">
          <button
            className="bg-blue-500 py-1 px-4 ml-1 rounded-md"
            onClick={() => {
              dispatch({ type: "upper" });
            }}
          >
            Convert Uppercase
          </button>
          <button
            className="bg-blue-500 py-1 px-4 ml-1  rounded-md"
            onClick={() => {
              dispatch({ type: "lower" });
            }}
          >
            Convert Lowercase
          </button>
          <button
            className="bg-red-500 py-1 px-4 ml-1  rounded-md"
            onClick={() => {
              dispatch({ type: "clear" });
            }}
          >
            Clear Text
          </button>
          <button className="bg-green-500 py-1 px-4 ml-1  rounded-md" onClick={copyToClip}>
            Copy To Clipboard
          </button>
          <button
            className="bg-blue-500 py-1 px-4 ml-1  rounded-md"
            onClick={() => {
              dispatch({ type: "trim" });
            }}
          >
            Remove Extra Spaces
          </button>
        </div>
        <div className="mt-20 text-4xl font-semibold mb-2">Summery Of Your Text</div>
        <div className="flex flex-col gap-6 mt-6 mb-5">
          <p>
            Nummber of words :{" "}
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </p>
          <p>Number of charecters : {text.length}</p>
          <p>
            Reading Time:
            {0.008 *
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length}
          </p>
        </div>
        <div className="mb-10 mt-4">
        <h1 className="text-center text-4xl font-semibold py-2">Preview Document</h1>
        <textarea
          className=" rounded-md"
          name=""
          id=""
          cols="170"
          rows="5"
          value={text}
          readOnly
        ></textarea>
      </div>
      </div>
     
    </div>
  );
}

export default Home;
