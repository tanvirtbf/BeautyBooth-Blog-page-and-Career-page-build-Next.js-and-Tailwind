import { roleArr } from "@/app/Data";
import CurrentOpenRole from "@/components/CurrentOpenRole";

const page = ({ params }) => {
  const id = Number(params.id);
  const datas = roleArr.filter((item) => item.id === id);
  console.log(datas);
  return (
    <div className="container">
      {params.id}
      <CurrentOpenRole
        key={datas.id}
        id={datas.id}
        heading={datas.heading}
        remoteOrOffice={datas.remoteOrOffice}
        state={datas.state}
        positions={datas.positions}
        btnState={datas.btnState}
      />
    </div>
  );
};

export default page;
