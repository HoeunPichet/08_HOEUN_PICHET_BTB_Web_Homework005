import { navigation } from "@/data/navigation";
import Image from "next/image";

export default function SideBar() {
  return (
    <>
      {navigation.map((item) => {
        return (
          <div key={item.id}>
            <Image src={item.icon} width={20} height={20} alt={item.title} />
            <p>{item.title}</p>
          </div>
        );
      })}
    </>
  );
}
