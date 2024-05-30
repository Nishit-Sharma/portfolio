import Image from "next/image";
import Summary from "./components/summary";
import RootLayout from "./layout";

export default function Home() {
  return (
    <RootLayout>
      <div>
        <Summary />
      </div>
    </RootLayout>
  );
}
