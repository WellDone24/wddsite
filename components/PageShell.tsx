import Header from "./Header";

export default function PageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="site-shell">
      <Header />
      <main>{children}</main>
    </div>
  );
}