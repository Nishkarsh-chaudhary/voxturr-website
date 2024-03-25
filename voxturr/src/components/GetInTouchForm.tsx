import { ChangeEvent, useState } from "react";

const GetInTouchForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const validationAndSetPhoneNumber = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    if (/^[0-9]*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  return (
    <div className="glassEffectBackground rounded-3xl px-6 py-8 md:px-10 md:py-12 md:w-[90%] relative">
      <span className="glassEffectBackgroundtop"></span>
      <span className="glassEffectBackgroundright"></span>
      <span className="glassEffectBackgroundbottom"></span>
      <span className="glassEffectBackgroundleft"></span>
      <h4 className="text-white text-[28px] font-bold capitalize">
        Get a project to Discuss
      </h4>
      <p className="text-white/50 text-sm font-medium mt-2 mb-6">
        Our Growth Expert Will Get In Touch Within 12-Hours
      </p>
      <form>
        <div className="mt-6">
          <label className="text-themePrimary-low text-lg font-medium">
            Full Name*
          </label>
          <input
            type="text"
            placeholder="Enter Full Name"
            name="fullName"
            required
            minLength={3}
            className="text-white w-full mt-2 placeholder:text-white/50 p-4 border border-borderPrimary/20 focus:border-colorPrimary rounded-lg bg-transparent outline-none"
          />
        </div>
        <div className="mt-6">
          <label className="text-themePrimary-low text-lg font-medium">
            Email Address*
          </label>
          <input
            type="email"
            placeholder="Enter Email Address"
            name="emailAddress"
            required
            className="text-white w-full mt-2 placeholder:text-white/50 p-4 border border-borderPrimary/20 focus:border-colorPrimary rounded-lg bg-transparent outline-none"
          />
        </div>
        <div className="mt-6">
          <label className="text-themePrimary-low text-lg font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter Phone Number"
            name="phoneNumber"
            minLength={10}
            maxLength={10}
            value={phoneNumber}
            onChange={validationAndSetPhoneNumber}
            className="text-white w-full mt-2 placeholder:text-white/50 p-4 border border-borderPrimary/20 focus:border-colorPrimary rounded-lg bg-transparent outline-none"
          />
        </div>
        <div className="mt-6">
          <label className="text-themePrimary-low text-lg font-medium">
            Your Requirements*
          </label>
          <input
            type="text"
            placeholder="Enter Your Requirements"
            name="requirement"
            required
            className="text-white w-full mt-2 placeholder:text-white/50 p-4 border border-borderPrimary/20 focus:border-colorPrimary rounded-lg bg-transparent outline-none"
          />
        </div>
        <button className="uppercase w-full border border-colorPrimary text-xl font-semibold text-white p-4 rounded-lg mt-12 hover:bg-colorPrimary hover:shadow-boxShadowSecondary ">
          Request a consulation
        </button>
      </form>
    </div>
  );
};

export default GetInTouchForm;
