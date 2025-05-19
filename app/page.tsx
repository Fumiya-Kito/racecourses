import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main>
ï        <div className="space-y-6">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="p-4 bg-gray-100 rounded">
                スクロール用のダミーコンテンツ {i + 1}
              </div>
            ))}
          </div>
      </main>
    </div>
  );
}
