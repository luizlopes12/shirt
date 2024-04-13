import Image from "next/image";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
    className={opensans.className}
    >
      teste
    </main>
  );
}
