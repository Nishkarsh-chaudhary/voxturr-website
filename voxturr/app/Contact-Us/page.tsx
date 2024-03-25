import dynamic from "next/dynamic";

const ContactUs = dynamic(()=> import('@/src/screens/ContactUs'))

const contactus = () => {
    return <ContactUs />
  };
  
  export default contactus;