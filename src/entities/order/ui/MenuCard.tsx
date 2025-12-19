"use client";

export default function MenuCards() {
  return (
    <section className="w-full grid grid-cols-3 lg:grid-cols-5 gap-4 pt-6">
      {Array.from({ length: 25 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col justify-between bg-background-default rounded-sm shadow-sm h-[90px] xl:h-[120px] p-4 text-body-3 font-semibold"
        >
          <h1 className="text-label-900">광어회</h1>
          <div className="flex items-center justify-between">
            <p className="text-caption-1 text-label-900">1,500,000</p>
            <p className="text-caption-2 text-background-default bg-label-700 rounded-l-full rounded-r-full px-3 py-1 text-center">
              품절
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
