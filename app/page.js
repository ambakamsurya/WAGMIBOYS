import Ticker from "@/components/Ticker";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WarCry from "@/components/WarCry";
import Tribe from "@/components/Tribe";
import HowItWorks from "@/components/HowItWorks";
import Season1 from "@/components/Season1";
import Utility from "@/components/Utility";
import Mint from "@/components/Mint";
import Roadmap from "@/components/Roadmap";
import Security from "@/components/Security";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#tribe" className="skip-link">
        Skip to content
      </a>

      <Ticker />
      <Nav />

      <main id="main">
        <Hero />

        <WarCry intensity={1}>
          Nobody believes us. We believe us. WAGMI.
        </WarCry>

        <Tribe />

        <WarCry intensity={2}>
          Floss wants to ape. Nugget says it&apos;s a rug. We&apos;re going in
          together.
        </WarCry>

        <HowItWorks />
        <Season1 />
        <Utility />
        <Mint />
        <Roadmap />
        <Security />

        <WarCry intensity={3}>So early. So dumb. So early. WAGMI.</WarCry>
      </main>

      <Footer />
    </>
  );
}
