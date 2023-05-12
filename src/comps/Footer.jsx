const sections = [
  {
    title: "FOR INVESTORS",
    links: ["Start Investing", "How it works"],
  },
  {
    title: "FOR STARTUPS",
    links: ["Start Raising Funds", "How it works", "Instruments"],
  },
  {
    title: "COMPANY",
    links: ["About Us", "Careers", "Blog", "Contact Us"],
  },
];
const eula = ["Terms of Use", "Privacy Policy", "Disclaimer", "FAQs"];
export default function Footer() {
  return (
    <div className="min-h-[300px] text-white p-3 bg-gradient-to-b from-blue-700 flex flex-col items-center justify-center to-black">
      <div
        id="section_1"
        className="w-full flex flex-col items-center lg:justify-between lg:flex-row"
      >
        <div id="lt" className="max-w-[250px] text-left">
          <div className="font-black">Pepcorns</div>
          <div className="font-thin">
            Enabling everyday people to built startups
          </div>
          <div id="social icons" className="flex flex-row">
            <i className="bx bxl-facebook-square text-2xl" />
            <i className="bx bxl-twitter text-2xl" />
            <i className="bx bxl-instagram-alt text-2xl" />
            <i className="bx bxl-linkedin-square text-2xl" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row max-w-3xl" id="mid">
          {sections.map((section) => (
            <div className="flex flex-col mx-2">
              <div className="font-bold">{section.title}</div>
              {section.links.map((link) => (
                <div className="font-thin">{link}</div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col font-light text-sm" id="rt">
          <div>Location_on Kanpur|Bengaluru|Delhi</div>
          <div>Call Us +91 1234567890</div>
        </div>
      </div>
      <div
        id="section_2"
        className="flex flex-col items-center justify-evenly my-4 w-5/6 lg:flex-row"
      >
        {eula.map((link) => (
          <div className="font-thin mx-2">{link}</div>
        ))}
      </div>
      <div id="section_3" className="text-[12px] text-gray-500">
        www.pepcorns.com (“Platform”) is a website owned and operated by
        Pepcorns Technologies Private Limited (“Pepcorns”), which is neither a
        registered stock exchange, an investment advisor nor a funding portal
        and is not registered with the Securities Exchange Board of India
        (“SEBI”). Nothing contained on this Platform shall be construed as an
        authorization by the SEBI to solicit investments nor should the Platform
        be construed as a SEBI authorized crowdfunding platform or a stock
        exchange, or their equivalent. The securities offered by any company
        registered on Platform are not traded on any stock exchange recognised
        by SEBI. Pepcorns does not allow any secondary market trading of
        securities on the Platform. By accessing this Platform and any pages
        thereof, you agree to be bound by the Terms of Use and Privacy Policy .
        Investing in start-ups and early-stage businesses involves risks,
        including illiquidity, lack of dividends, loss of investment and
        dilution, and it should be done only as part of a diversified portfolio.
        Pepcorns is targeted exclusively at investors who are sufficiently
        sophisticated to understand these risks and make their own investment
        decisions. Please read our RISK POLICY .
      </div>
    </div>
  );
}
