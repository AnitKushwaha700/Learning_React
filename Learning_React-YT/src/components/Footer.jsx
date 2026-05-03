import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" bg-[var(--color-neutral)] text-white ps-30 pe-20 pb-10 text-center">
        <p className="py-10">
          --- Your favorite food delivery platform connecting customers with
          restaurants and riders. ---
        </p>
        <div>
          <div className="grid grid-cols-5 gap-6">
            <div>
              <img src="circleLogo.png" alt="logo" width="120px" />
            </div>

            <div>
              <h1 className="font-semibold mb-2">Quick Links</h1>
              <ul className="space-y-1">
                <li>Home</li>
                <li>About</li>
                <li>Order Now</li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold mb-2">For Restaurants</h1>
              <ul className="space-y-1">
                <li>Partner With Us</li>
                <li>Restaurant Dashboard</li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold mb-2">For Rider</h1>
              <ul className="space-y-1">
                <li>Become a Rider</li>
                <li>Rider Dashboard</li>
              </ul>
            </div>

            <div>
              <h1 className="font-semibold mb-2">Feedback & Support</h1>
              <ul className="space-y-1">
                <li>Submit Feedback</li>
                <li>Help Center</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
