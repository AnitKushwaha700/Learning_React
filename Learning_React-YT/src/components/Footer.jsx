import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" bg-(--color-neutral) text-white px-30 pb-10 text-center">
        <p className="p-8">
          --- Your favorite food delivery platform connecting customers with
          restaurants and riders. ---
        </p>
        <div>
          <div className="grid grid-cols-5 gap-6 text-start pb-10">
            <div>
              <img src="circleLogo.png" alt="logo" width="120px" />
            </div>

            <div>
              <h1 className="font-bold mb-2">Quick Links</h1>
              <ul className="space-y-1 py-2">
                <li className="text-gray-300 hover:text-(--color-primary)">Home</li>
                <li className="text-gray-300 hover:text-(--color-primary)">About</li>
                <li className="text-gray-300 hover:text-(--color-primary)">Order Now</li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold mb-2">For Restaurants</h1>
              <ul className="space-y-1 py-2">
                <li className="text-gray-300 hover:text-(--color-primary)">Partner With Us</li>
                <li className="text-gray-300 hover:text-(--color-primary)">Restaurant Dashboard</li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold mb-2">For Rider</h1>
              <ul className="space-y-1 py-2">
                <li className="text-gray-300 hover:text-(--color-primary)">Become a Rider</li>
                <li className="text-gray-300 hover:text-(--color-primary)">Rider Dashboard</li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold mb-2">Feedback & Support</h1>
              <ul className="space-y-1 py-2">
                <li className="text-gray-300 hover:text-(--color-primary)">Submit Feedback</li>
                <li className="text-gray-300 hover:text-(--color-primary)">Help Center</li>
                <li className="text-gray-300 hover:text-(--color-primary)">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="p-4 text-sm opacity-75" />
        <div className="flex justify-between">
          <p>© 2026 Cravings. All rights reserved.</p>
          <ul className="flex gap-7">
            <li className="text-gray-300 hover:text-(--color-primary)">Privacy Policy</li>
            <li className="text-gray-300 hover:text-(--color-primary)">Terms of service</li>
            <li className="text-gray-300 hover:text-(--color-primary)">Site Map</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
