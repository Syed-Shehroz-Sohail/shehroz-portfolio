import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

export default function Home() {
  return <><Header /><main id="main"><Hero /><div className="stack-strip"><div className="shell"><span>THE BUILDING BLOCKS</span><p>React.js <i>✳</i> React Native <i>✳</i> Laravel <i>✳</i> MySQL <i>✳</i> Solution architecture</p></div></div><Work /><About /><Services /><Skills /><Contact /></main></>;
}
