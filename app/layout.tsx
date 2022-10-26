import '../styles/globals.scss';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <body className="overflow-y-scrol">
        <div className="grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8">
          <div className="col-start-2">
            <b>Navbar</b>
          </div>

          <div className="col-start-3 space-y-6">
            <b>Address bar</b>

            <div className="rounded-xl border border-zinc-800">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
