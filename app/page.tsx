import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <div className="bg-white px-4 py-2 flex items-center border-b border-slate-200">
        <h1 className="text-xl font-semibold">m8bit</h1>
        <div className="flex items-center ml-auto space-x-3">
          <p className="px-3 py-1 bg-slate-100 rounded-full">About Me</p>
          <p className="px-3 py-1 bg-slate-100 rounded-full">Products</p>
          <p className="px-3 py-1 bg-slate-100 rounded-full">Articles</p>
          <p className="px-3 py-1 bg-slate-900 text-white font-semibold rounded-md">Contact</p>
        </div>
      </div>
      {/* Main */}
      <div className="md:container mx-auto my-8">
        <h2 className="text-4xl font-semibold">About Me</h2>
        <div className="mt-4 flex">
          <Image src="/icon.png" alt="Icon" width={100} height={100} className="w-48 rounded-full border-2 border-slate-200" />
          <div className="ml-3">
            <h3 className="text-2xl font-semibold">m8bit</h3>
            <p className="text-sm text-slate-400">Front-end Engineer / Designer</p>
          </div>
        </div>
      </div>
    </div>
  )
}