import { roleArr } from "@/app/Data";
import { skills } from "@/app/Skills";
import CurrentOpenRole from "@/components/CurrentOpenRole";
import SkillLists from "@/components/SkillLists";

const page = ({ params }) => {
  const id = Number(params.id);
  const [data] = roleArr.filter((item) => item.id === id);
  return (
    <div className="container">
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
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="grid col-span-12 sm:col-span-8 p-6 gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="singlePostHeading">Company Overview</h2>
            <p className="singlePostPara">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              eos sapiente culpa beatae aperiam at quod! Facilis tenetur, ipsa
              magni tempore quia veniam cupiditate nesciunt dolore harum dolor
              expedita perferendis officiis vero ab porro cumque eum error
              consectetur mollitia? Enim doloribus, odio explicabo cum in quasi,
              molestiae illum molestias asperiores architecto, labore tenetur?
              Officia nihil natus explicabo quisquam quod, reprehenderit
              eligendi aperiam obcaecati optio magni corporis exercitationem,
              corrupti cum deleniti cumque eveniet quasi eos magnam maxime eius
              itaque ratione ducimus soluta ea. Expedita natus totam quaerat
              architecto, beatae nemo, quo ad voluptate adipisci quibusdam qui
              quasi maxime eum, perferendis voluptas. Inventore, eligendi
              blanditiis iste reprehenderit libero autem minus id quae rem
              maxime. Atque placeat natus, consectetur labore modi ratione
              dolore sequi, fugiat sunt omnis odio possimus voluptates optio
              beatae voluptatem nostrum repellat. Nam sunt quis numquam
              voluptatibus dolorum. Cupiditate velit nostrum ipsam earum
              inventore placeat, maxime illo quos quasi. Non cupiditate quidem
              vel nisi ratione quas, eaque quod molestias maiores repellendus
              veritatis fugit natus sit possimus. Doloribus nulla, minus
              recusandae a aliquam sed ullam! Minima vitae similique at porro
              quibusdam? Illum reprehenderit atque quidem perspiciatis id,
              quaerat dignissimos excepturi et obcaecati debitis hic quia alias
              aut soluta modi tempora dolores! Libero officiis aspernatur illum
              dicta minima consequuntur saepe quibusdam perspiciatis placeat
              fuga tempora doloremque, id nihil at assumenda perferendis
              reiciendis sapiente rerum alias nostrum fugit officia soluta. Nemo
              dolorum quod, accusamus molestiae doloribus ad aliquid dicta aut,
              quisquam earum officiis atque, illum expedita! Dolor accusamus
              numquam sit sapiente impedit et facilis, similique ut! Sequi iure
              neque omnis, sint unde, officiis facere iusto tempora, distinctio
              aliquid nemo quod molestiae eligendi inventore provident tenetur
              natus! Quam ipsum recusandae facere molestiae voluptates omnis
              perspiciatis delectus repellendus a impedit doloribus veritatis
              pariatur deleniti magni quasi fugit, vitae, facilis officia quo
              placeat laborum, inventore illo quod nobis. Quasi laudantium
              itaque veniam voluptas consequuntur! Labore, laudantium id quaerat
              inventore reprehenderit voluptatibus praesentium eum animi dolore
              deleniti, ad totam asperiores facilis, nam ullam error dolorem
              illum. Rerum, dolores assumenda. Incidunt doloribus omnis at fugit
              cupiditate. Expedita soluta inventore id debitis doloremque
              asperiores explicabo repellat quam quibusdam earum quidem, tempore
              corporis deserunt ipsum deleniti nostrum numquam illum animi
              tempora. Distinctio sit possimus modi iure veniam temporibus sunt
              blanditiis quisquam odit, tempora quae excepturi necessitatibus ea
              magnam fuga nemo quibusdam odio! Repudiandae mollitia possimus
              inventore saepe dicta ipsa modi. Suscipit dicta ipsam molestiae
              laboriosam exercitationem mollitia aliquam, totam minima.
            </p>
          </div>
        </div>
        <div className="grid col-span-12 sm:col-span-4 p-6">
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="singlePostHeading">Employment Type</h3>
              <p className="singlePostPara text-sm sm:text-sm">Full-Time</p>
            </div>
            <div>
              <h3 className="singlePostHeading">Experience Level</h3>
              <p className="singlePostPara text-sm sm:text-sm">Mid-Senior-Level</p>
            </div>
            <div>
              <h3 className="singlePostHeading">Annual Compensation</h3>
              <p className="singlePostPara text-sm sm:text-sm">Negotiable</p>
            </div>
            <div>
              <h3 className="singlePostHeading">Work Experience (years)</h3>
              <p className="singlePostPara text-sm sm:text-sm">3 - 5 years</p>
            </div>
            <div>
              <h3 className="singlePostHeading">Education</h3>
              <p className="singlePostPara text-sm sm:text-sm">CSE</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="singlePostHeading">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((item) => (
                  <SkillLists key={item.id} skill={item.skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
