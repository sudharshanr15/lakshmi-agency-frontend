import "../../globals.css";
import { Nav } from "@/components/";
import { Total, Example, Mobilenav } from "@/container/pvc";

const Page = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <Nav />
      </div>
      <div className="block lg:hidden xl:hidden">
        <Mobilenav />
      </div>
      <Total />
      <Example />
    </div>
  );
};

export default Page;
