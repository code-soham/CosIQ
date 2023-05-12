export default function Anc(props) {
  return (
    <a
      className={`group ${
        props.alwaysOpen ? "text-zinc-500" : "text-white"
      } transition-all duration-300 text-sm relative hover:text-black hover:bg-white p-1 mx-3`}
      href={props.href}
    >
      {props.text}
      {props.dpdown ? (
        <div
          className={`min-w-[140px] w-full bg-black absolute top-7 left-0 ${
            props.alwaysOpen ? "block" : "hidden group-hover:block"
          } transition-[display] duration-300 pt-1`}
        >
          {props.dpData.map((item, index) => {
            return (
              <a
                className="block group-one text-white text-left text-sm relative hover:bg-white hover:bg-opacity-20 p-2 mb-1 hover:pl-3"
                href={item.href}
                key={index}
              >
                {item.text}
                <div className="hidden group-one-hover:block absolute h-full top-0 left-0 w-1 bg-blue-500"></div>
              </a>
            );
          })}
        </div>
      ) : null}
    </a>
  );
}
