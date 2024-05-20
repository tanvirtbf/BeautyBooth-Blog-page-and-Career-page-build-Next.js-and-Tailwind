import { roleArr } from "@/app/Data"
import CurrentOpenRole from "@/components/CurrentOpenRole"


const page = ({params}) => {
  const id = Number(params.id)
  console.log(id)
  let data = roleArr.filter((item)=>item.id === id)
  console.log(data)
  return (
    <div>
      {params.id}
      <CurrentOpenRole />
    </div>
  )
}

export default page