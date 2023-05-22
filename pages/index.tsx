import "@pantheon-systems/nextjs-kit/style.css";
import { ContentWithImage } from "@pantheon-systems/nextjs-kit";
import Link from "next/link";
/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <Link href="/paginator">to paginator page</Link>
      <ContentWithImage content="My Content" title="test" />
    </>
  );
}
