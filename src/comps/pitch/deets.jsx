const founders = [
  {
    name: "John Doe",
    desg: "CEO",
    img: "https://www.picsum.photos/200/200",
    fb: "https://facebook.com",
    tw: "https://twitter.com",
    li: "https://linkedin.com",
  },
  {
    name: "John Doe",
    desg: "CEO",
    img: "https://www.picsum.photos/200/200",
    fb: "https://facebook.com",
    tw: "https://twitter.com",
    li: "https://linkedin.com",
  },
];
const faq = [
  {
    q: "What is the minimum investment?",
    a: "₹ 1000",
  },
  {
    q: "What is the minimum investment?",
    a: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    q: "What is the minimum investment?",
    a: "₹ 1000",
  },
  {
    q: "What is the minimum investment?",
    a: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    q: "What is the minimum investment?",
    a: "₹ 1000",
  },
  {
    q: "What is the minimum investment?",
    a: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];
export default function Details() {
  return (
    <div className="deets w-[80vw] max-w-2xl min-w-[400px] border border-gray-500">
      <div id="deetHead" className="flex justify-between m-3">
        <span className="text-2xl font-mono font-bold">Details</span>
      </div>
      <div id="founders" className="flex flex-wrap justify-evenly">
        {founders.map((fn) => {
          return (
            <div className="w-44 flex flex-col items-center justify-center">
              <img src={fn.img} alt={fn.name} className="h-32 w-32" />
              <div className="text-sm font-bold">{fn.name}</div>
              <div className="text-[10px] font-thin">{fn.desg}</div>
              <div className="flex justify-between w-1/3 text-lg">
                <a href={fn.fb} target="_blank" rel="noreferrer">
                  <i className="bx bxl-facebook-square text-black" />
                </a>
                <a href={fn.li} target="_blank" rel="noreferrer">
                  <i className="bx bxl-linkedin-square text-black" />
                </a>
                <a href={fn.tw} target="_blank" rel="noreferrer">
                  <i className="bx bxl-twitter text-black" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div
        id="stats"
        className="flex flex-col md:flex-row items-center justify-center"
      >
        <div className="m-3 border border-gray-500 min-w-[300px] p-3 font-sm">
          <div className="flex justify-between">
            <div className="flex flex-col items-start justify-center">
              <span>START DATE</span>
              <span>01/01/2021</span>
            </div>
            <i className="bx bx-calendar bg-pink-600 rounded-full p-3 text-lg text-white " />
          </div>
          <span className="text-sm w-full">
            <span className="text-green-500">Ends In</span> 14 Days
          </span>
        </div>{" "}
        <div className="m-3 border border-gray-500 min-w-[300px] p-3 font-sm">
          <div className="flex justify-between">
            <div className="flex flex-col items-start justify-center">
              <span>START DATE</span>
              <span>01/01/2021</span>
            </div>
            <i className="bx bx-trophy bg-pink-600 rounded-full p-3 text-lg text-white " />
          </div>
          <span className="text-sm w-full">
            <span className="text-green-500">Ends In</span> 14 Days
          </span>
        </div>
      </div>
      <hr />
      <div id="faq" className="flex flex-col justify-between m-3">
        <span className="text-2xl font-mono m-auto font-bold">FAQ</span>
        <div className="flex flex-col text-left">
        {faq.map((f) => {
          return (
            <div>
              <div className="text-lg my-3 font-bold">{f.q}</div>
              <div className="text-sm my-4 font-light">{f.a}</div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
