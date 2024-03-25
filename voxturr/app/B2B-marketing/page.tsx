import dynamic from "next/dynamic";
const B2BMarketing = dynamic(() => import("@/src/screens/B2BMarketing"));

const B2Bmarketing = () => {
  return <B2BMarketing />
};

export default B2Bmarketing;
