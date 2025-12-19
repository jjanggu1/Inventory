"use client";

export default function MenuOptions() {
  return (
    <section className="flex-[2] border-r-2 border-l-2 border-line-200 bg-background-default p-6 overflow-y-auto">
      <div className="flex items-center text-body-2 text-label-900 font-semibold">
        <h1>옵션</h1>
        <h2 className="text-caption-1 text-white bg-label-700 rounded-sm ml-2 px-3 py-1 text-center">
          광어회
        </h2>
      </div>
      <div className="mt-6">
        <h3 className="text-caption-1 text-label-900 font-semibold mb-4">
          사이즈
          <span className="text-caption-1 text-status-error"> *</span>
        </h3>
        <div className="flex flex-col gap-4">
          <button className="text-body-3 text-label-900 font-semibold py-6 border-1 border-line-200 rounded-sm bg-background-default cursor-pointer">
            소
          </button>
          <button className="text-body-3 text-white font-semibold py-6 rounded-sm shadow-sm bg-primary cursor-pointer">
            중(10,000)
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-caption-1 text-label-900 font-semibold mb-4">
          기타
        </h3>
        <div className="flex flex-col gap-4">
          <button className="text-body-3 text-label-900 font-semibold py-6 border-1 border-line-200 rounded-sm bg-background-default cursor-pointer">
            무순많이(500)
          </button>
          <button className="text-body-3 text-white font-semibold py-6 rounded-sm shadow-sm bg-primary cursor-pointer">
            레몬많이(1,000)
          </button>
          <button className="text-body-3 text-white font-semibold py-6 rounded-sm shadow-sm bg-primary cursor-pointer">
            와사비많이
          </button>
        </div>
      </div>
    </section>
  );
}
