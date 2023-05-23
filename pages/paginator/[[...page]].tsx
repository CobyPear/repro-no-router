import "@pantheon-systems/nextjs-kit/style.css";
import { Paginator } from "@pantheon-systems/nextjs-kit";
import Link from "next/link";
/** Add your relevant code here for the issue to reproduce */
export default function PaginatorPage() {
  return (
    <div
      style={{
        width: "1024px",
        display: "flex",
        flexDirection: "column",
        marginRight: "auto",
        marginLeft: "auto",
      }}
    >
      <Link style={{ marginBottom: "48px" }} href="/">
        Home
      </Link>
      <Paginator
        data={[{ title: "hi" }, { title: "hello" }, { title: "oy" }]}
        itemsPerPage={1}
        routing={false}
        breakpoints={{ start: 0, end: 3, add: 0 }}
        Component={({ currentItems }) =>
          currentItems.map(({ title }: { title: string }) => (
            <div key={title}>{title}</div>
          ))
        }
      />
    </div>
  );
}
