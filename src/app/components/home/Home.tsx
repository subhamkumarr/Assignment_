import Image from "next/image";
import ChartArea from "../chartArea/ChartArea";

export default function HomeComponent() {
  type Props = { id: number; name: string; desc: string; url: string; }
  const profiles: Props[] = [
    { id: 1, name: 'Olivia', desc: 'The data entry agent', url: '/agent_1.png' },
    { id: 2, name: 'Astrid', desc: 'The data scientist agent', url: '/agent_2.png' },
    { id: 3, name: 'Rio', desc: 'Procurement Analyst', url: '/agent_3.png' },
  ]

  type Random = { id: number; name: string; }
  const random: Random[] = [
    { id: 1, name: 'Sales Forecast' },
    { id: 2, name: 'Active Agents' },
    { id: 3, name: 'Workflows' },
  ]
  return (
    <div className="border rounded-sm flex flex-col border-gray-light">
      <div className="flex gap-3 flex-col">
        <div className="flex justify-between px-8 pt-5 items-center">
          <p className="font-semibold">Overview</p>
          <div className="flex gap-1">
            <p className="text-sm">Today</p>
            <Image src='/date_icon.svg' alt="" width={13} height={8} className="cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-between px-8 py-5 items-center gap-10">
          <div className="flex gap-5 flex-col">
            <ChartArea name="Costs Optimized" value="$7,265" percentage={11.02} />
            <ChartArea name="Workflows Automated" value="1,321" percentage={18.04} />
          </div>
          <div className="bg-gradient-to-r border rounded-lg p-3 cursor-pointer min-w-[26rem] border-gray-light min-h-42 font-semibold from-white-shade">
            <div className="flex gap-3 text-sm mb-3 items-center">
              {random.map((rand =>
                <p key={rand.id} className="text-gray-dark hover:text-black">{rand.name}</p>
              ))} |
              <div className="flex gap-5 pl-5 items-center">
                <li>This year</li>
                <li className="text-gray-dark hover:text-black">Last year</li>
              </div>
            </div>
            <div>
              <Image src='/data_chart.png' alt="" width={700} height={512} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 items-center justify-between p-8">
        {profiles.map((profile =>
          <div className="border rounded-lg bg-gradient-to-br from-white-shade flex min-h-72 items-center justify-center border-gray-light flex-col font-semibold min-w-64" key={profile.id}>
            <div><Image className="rounded-full bg-white m-4 drop-shadow-4xl" src={profile.url} alt="" width={70} height={70} /></div>
            <div><p className="text-3xl">{profile.name}</p></div>
            <div className="text-sm">{profile.desc}</div>
            <button className="bg-btn-col rounded-md my-8 text-sm p-3 text-gray-light">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
}
