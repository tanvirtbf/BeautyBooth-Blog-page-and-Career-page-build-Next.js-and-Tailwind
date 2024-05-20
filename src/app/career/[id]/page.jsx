import { roleArr } from "@/app/Data";
import CurrentOpenRole from "@/components/CurrentOpenRole";

const page = ({ params }) => {
  const id = Number(params.id);
  const [data] = roleArr.filter((item) => item.id === id);
  console.log(data);
  return (
    <div className="container">
      {params.id}
      <CurrentOpenRole
        key={data.id}
        id={data.id}
        heading={data.heading}
        remoteOrOffice={data.remoteOrOffice}
        state={data.state}
        positions={data.positions}
        btnState={data.btnState}
        isTwoBtn={true}
      />
    </div>
  );
};

export default page;
