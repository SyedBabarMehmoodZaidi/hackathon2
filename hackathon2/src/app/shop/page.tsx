import Image from "next/image";
import arrow from "/public/Images/vectorright.png";
import cat1 from "/public/Images/card-item.png";
import cat2 from "/public/Images/card-item (1).png";
import cat3 from "/public/Images/card-item (2).png";
import cat4 from "/public/Images/card-item (3).png";
import cat5 from "/public/Images/card-item (4).png";
import frame from "/public/Images/Frame 31.png";
import clients from "/public/Images/desktop-clients-1.png";
import fb from "/public/Images/facebook.png";
import instagram from "/public/Images/instagram.png";
import twitter from "/public/Images/twitter.png";

const ShopComponent = () => {
  return (
    <div>
      {/* Shop Section */}
      <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-full h-[92px] py-[24px] flex flex-col items-center">
        <div className="w-[1049px] h-[44px] flex gap-[1000px] items-center py-[40px]">
          {/* Shop Title */}
          <div className="w-full h-[32px] flex justify-center items-center mb-[8px]">
            <h2 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
              Shop
            </h2>
          </div>
          {/* Breadcrumb */}
          <div className="w-full h-[44px] flex justify-center items-center gap-[5px]">
            <div className="flex items-center gap-[15px]">
              <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                Home
              </div>
              <Image src={arrow} alt="arrow" width={8.26} height={6} />
              <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD]">
                Shop
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* category */}
      <div className="w-[1440px] h-[271px] bg-[#FAFAFA]">
        <div className="w-[1088px] h-[271px] absolute top-[200px] left-[176px] pb-[48px]">
          <div className="w-[1088px] h-[223px] flex gap-[15px]">
            <Image src={cat1} alt="1" />
            <Image src={cat2} alt="2" />
            <Image src={cat3} alt="3" />
            <Image src={cat4} alt="4" />
            <Image src={cat5} alt="5" />
          </div>
        </div>
      </div>
      {/* Popularity */}
      <div className="w-[1440px] h-[98px] absolute justify-center top-[500px]">
        <div className="w-[1050px] h-[98px] absolute left-[195px] py-[24px] flex gap-[80px]">
          <div className="w-[1040px] h-[50px] flex justify-between">
            <div className="font-montserrat font-bold text-[14px] leading-[24px] text-[#737373]">
              Showing all 12 results
            </div>
          </div>
          <div className="w-[177px] h-[46px]  px-[1px] flex gap-[15px] justify-center">
            <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#737373]">
              Views:
            </h6>
            <Image src={frame} alt="frame" className="flex justify-center" />
          </div>
          <div className="w-[252px] px-[1px] flex gap-[15px]">
            <button className="w-[141px] h-[50px] border border-[#DDDDDD]">
              <p className="font-Montserrat text-[14px] leading-[28px] text-[#737373]">
                Popularity
              </p>
            </button>
            <button className="w-[94px] h-[50px] px-[20px] py-[10px] flex gap-[10px] bg-[#23A6F0]">
              <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
                Filter
              </h6>
            </button>
          </div>
        </div>
      </div>
      {/* Clients */}
      <Image src={clients} alt="clients" className="absolute top-[600px]" />
      {/* Footer */}
      <footer className="bg-white absolute top-[800px] left-[100px]">
        <section className="bg-[#ffffff] py-10">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center">
            <div className="flex flex-col">
              <h1 className="text-[#252b42] text-2xl font-bold leading-loose tracking-tight">Bandage</h1>
            </div>
            <div className="flex gap-6">
              <Image src={fb} alt="fb" className="w-6 h-6" />
              <Image src={instagram} alt="instagram" className="w-6 h-6" />
              <Image src={twitter} alt="twitter" className="w-6 h-6" />
            </div>
          </div>
        </section>
        <div className="border-t border-[#e6e6e6]" />
        <section className="bg-white py-12">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
            <div>
              <h2 className="text-[#252b42] text-base font-bold">Company Info</h2>
              <nav className="flex flex-col gap-2.5 mt-3">
                <a href="#" className="text-[#727272] text-sm font-bold">About Us</a>
                <a href="#" className="text-[#727272] text-sm font-bold">Careers</a>
                <a href="#" className="text-[#727272] text-sm font-bold">We Are Hiring</a>
                <a href="#" className="text-[#727272] text-sm font-bold">Blog</a>
              </nav>
            </div>
            <div>
              <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
              <nav className="flex flex-col gap-2.5 mt-3">
                <a href="#" className="text-[#727272] text-sm font-bold">Terms of Service</a>
                <a href="#" className="text-[#727272] text-sm font-bold">Privacy Policy</a>
                <a href="#" className="text-[#727272] text-sm font-bold">Cookies</a>
                <a href="#" className="text-[#727272] text-sm font-bold">Refund Policy</a>
              </nav>
            </div>
            <div>
              <h2 className="text-[#252b42] text-base font-bold">Features</h2>
              <nav className="flex flex-col gap-2.5 mt-3">
                <a href="#" className="text-[#727272] text-sm font-bold">Business Marketing</a>
                <a href="#" className="text-[#727272] text-sm font-bold">User Analytics</a>
                <a href="#" className="text-[#727272] text-sm font-bold">Live Chat</a>
                <a href="#" className="text-[#727272] text-sm font-bold">Unlimited Support</a>
              </nav>
            </div>
            <div>
              <h2 className="text-[#252b42] text-base font-bold">Resources</h2>
              <nav className="flex flex-col gap-2.5 mt-3">
                <a href="#" className="text-[#727272] text-sm font-bold">iOS & Android</a>
                <a href="#" className="text-[#727272] text-sm font-bold">Watch a Demo</a>
                <a href="#" className="text-[#727272] text-sm font-bold">Customers</a>
                <a href="#" className="text-[#727272] text-sm font-bold">API</a>
              </nav>
            </div>
            <div>
              <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
              <div className="mt-3">
                <div className="relative mb-4">
                  <input
                    type="email"
                    className="w-full h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm font-normal"
                    placeholder="Your Email"
                  />
                  <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm font-bold rounded-lg">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

ShopComponent.displayName = "ShopComponent";  // Explicitly set the display name

export default ShopComponent;
