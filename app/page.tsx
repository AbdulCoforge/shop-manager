import {
  BsBoxSeam,
  CiCalendar,
  FaPlus,
  HiArrowTrendingUp,
  IoIosMic,
  LuCircleCheckBig,
  RiUser3Line,
  RxSpeakerLoud,
} from "@/app/icons";

const statCardBase =
  "flex items-center gap-4 rounded-2xl border px-5 py-4 shadow-[0_8px_20px_rgba(15,23,42,0.08)]";
const sectionCard =
  "rounded-3xl border border-blue-200/60 bg-white/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)]";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f6ff] text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12">
        <section className="space-y-6">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                <BsBoxSeam className="text-xl" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold">Shop Tracker</h1>
                <p className="text-sm text-slate-500">Track lending by person</p>
              </div>
            </div>
            <button className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30">
              <FaPlus />
              Add New
            </button>
          </header>

          <div className="flex flex-wrap gap-4">
            <div className={`${statCardBase} flex-1 basis-[220px] border-blue-200 bg-blue-100/70`}>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-200 text-blue-700">
                <RiUser3Line className="text-xl" />
              </div>
              <div>
                <p className="text-lg font-semibold">3</p>
                <p className="text-xs text-blue-700">People</p>
              </div>
            </div>
            <div className={`${statCardBase} flex-1 basis-[220px] border-orange-200 bg-orange-100/70`}>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-200 text-orange-700">
                <HiArrowTrendingUp className="text-xl" />
              </div>
              <div>
                <p className="text-lg font-semibold">3</p>
                <p className="text-xs text-orange-700">Active</p>
              </div>
            </div>
            <div className={`${statCardBase} flex-1 basis-[220px] border-emerald-200 bg-emerald-100/70`}>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-200 text-emerald-700">
                <LuCircleCheckBig className="text-xl" />
              </div>
              <div>
                <p className="text-lg font-semibold">1</p>
                <p className="text-xs text-emerald-700">Returned</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-blue-200/70 bg-white px-4 py-3 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <RiUser3Line className="text-xl" />
            </div>
            <input
              className="min-w-[220px] flex-1 bg-transparent text-sm text-slate-600 outline-none"
              placeholder="Search by person name or number..."
            />
            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
              <IoIosMic />
              Speak
            </button>
          </div>

          <div className="space-y-6">
            <article className="rounded-3xl border border-orange-200 bg-orange-50/70 p-6 shadow-[0_12px_30px_rgba(249,115,22,0.12)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <RiUser3Line className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">test</h3>
                    <p className="text-xs text-slate-500">Total: 2 items borrowed</p>
                  </div>
                </div>
                <span className="text-sm text-slate-400">#1</span>
              </div>
              <div className="mt-4 flex flex-wrap items-stretch gap-3">
                <div className="flex-1 basis-[220px] rounded-2xl bg-orange-100/70 px-4 py-3">
                  <div className="flex items-center gap-2 text-xs text-orange-700">
                    <HiArrowTrendingUp />
                    Active
                  </div>
                  <p className="text-sm font-semibold">1</p>
                </div>
                <div className="flex-1 basis-[220px] rounded-2xl bg-emerald-100/80 px-4 py-3">
                  <div className="flex items-center gap-2 text-xs text-emerald-700">
                    <LuCircleCheckBig />
                    Returned
                  </div>
                  <p className="text-sm font-semibold">1</p>
                </div>
                <div className="flex h-full min-h-[56px] w-7 items-center justify-center text-slate-300">›</div>
              </div>
              <div className="mt-4 rounded-2xl border border-yellow-200 bg-yellow-50 px-4 py-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Remaining</span>
                  <span>
                    Paid: <span className="font-semibold text-emerald-600">$40.00</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-red-500">$30.00</p>
                  <span>
                    Total: <span className="font-semibold">$70.00</span>
                  </span>
                </div>
              </div>
            </article>

            <article className="rounded-3xl border border-orange-200 bg-orange-50/70 p-6 shadow-[0_12px_30px_rgba(249,115,22,0.12)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                    <RiUser3Line className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">test1</h3>
                    <p className="text-xs text-slate-500">Total: 1 items borrowed</p>
                  </div>
                </div>
                <span className="text-sm text-slate-400">#2</span>
              </div>
              <div className="mt-4 flex flex-wrap items-stretch gap-3">
                <div className="flex-1 basis-[220px] rounded-2xl bg-orange-100/70 px-4 py-3">
                  <div className="flex items-center gap-2 text-xs text-orange-700">
                    <HiArrowTrendingUp />
                    Active
                  </div>
                  <p className="text-sm font-semibold">1</p>
                </div>
                <div className="flex-1 basis-[220px] rounded-2xl bg-emerald-100/80 px-4 py-3">
                  <div className="flex items-center gap-2 text-xs text-emerald-700">
                    <LuCircleCheckBig />
                    Returned
                  </div>
                  <p className="text-sm font-semibold">0</p>
                </div>
                <div className="flex h-full min-h-[56px] w-7 items-center justify-center text-slate-300">›</div>
              </div>
              <div className="mt-4 rounded-2xl border border-yellow-200 bg-yellow-50 px-4 py-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Remaining</span>
                  <span>
                    Paid: <span className="font-semibold text-emerald-600">$0.00</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-red-500">$12.00</p>
                  <span>
                    Total: <span className="font-semibold">$12.00</span>
                  </span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="space-y-6">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                <BsBoxSeam className="text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Shop Tracker</h2>
                <p className="text-sm text-slate-500">Track your lendings</p>
              </div>
            </div>
            <button className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30">
              <FaPlus />
              Add New
            </button>
          </header>

          <div className="flex flex-wrap gap-4">
            <div className={`${statCardBase} flex-1 basis-[280px] border-orange-200 bg-orange-100/70`}>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-200 text-orange-700">
                <HiArrowTrendingUp className="text-xl" />
              </div>
              <div>
                <p className="text-lg font-semibold">0</p>
                <p className="text-xs text-orange-700">Active Lendings</p>
              </div>
            </div>
            <div className={`${statCardBase} flex-1 basis-[280px] border-emerald-200 bg-emerald-100/70`}>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-200 text-emerald-700">
                <LuCircleCheckBig className="text-xl" />
              </div>
              <div>
                <p className="text-lg font-semibold">0</p>
                <p className="text-xs text-emerald-700">Returned</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-200/60 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="flex rounded-2xl bg-slate-100 p-1 text-sm font-medium text-slate-600">
              <button className="flex-1 rounded-2xl bg-white py-2 shadow">Active (0)</button>
              <button className="flex-1 rounded-2xl py-2">Returned (0)</button>
            </div>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-100 bg-white py-16 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <BsBoxSeam className="text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-slate-500">No Active Lendings</h3>
              <p className="text-sm text-slate-400">Click "Add New" to start tracking</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <button className="text-sm text-slate-500">← Back to All People</button>
            <button className="flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30">
              <FaPlus />
              Add Item
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <RiUser3Line className="text-xl" />
              <span className="absolute -right-2 -top-2 rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                #1
              </span>
            </div>
            <div>
              <h2 className="text-xl font-semibold">test</h2>
              <p className="text-sm text-slate-500">Borrowing &amp; Payment History</p>
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-300 bg-yellow-100/70 p-6 shadow-[0_12px_30px_rgba(250,204,21,0.2)]">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 basis-[220px] rounded-2xl bg-white px-4 py-3 text-center">
                <p className="text-xs text-slate-500">Total Amount</p>
                <p className="text-xl font-semibold">$70.00</p>
              </div>
              <div className="flex-1 basis-[220px] rounded-2xl bg-white px-4 py-3 text-center">
                <p className="text-xs text-slate-500">Total Paid</p>
                <p className="text-xl font-semibold text-emerald-600">$40.00</p>
              </div>
              <div className="flex-1 basis-[220px] rounded-2xl bg-white px-4 py-3 text-center">
                <p className="text-xs text-slate-500">Remaining</p>
                <p className="text-xl font-semibold text-red-500">$30.00</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className={`${statCardBase} flex-1 basis-[260px] border-orange-200 bg-orange-100/70`}>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-200 text-orange-700">
                <BsBoxSeam className="text-xl" />
              </div>
              <div>
                <p className="text-lg font-semibold">1</p>
                <p className="text-xs text-orange-700">Active Items</p>
              </div>
            </div>
            <div className={`${statCardBase} flex-1 basis-[260px] border-emerald-200 bg-emerald-100/70`}>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-200 text-emerald-700">
                <LuCircleCheckBig className="text-xl" />
              </div>
              <div>
                <p className="text-lg font-semibold">1</p>
                <p className="text-xs text-emerald-700">Returned</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-200/60 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="flex rounded-2xl bg-slate-100 p-1 text-sm font-medium text-slate-600">
              <button className="flex-1 rounded-2xl bg-white py-2 shadow">Active (1)</button>
              <button className="flex-1 rounded-2xl py-2">Returned (1)</button>
            </div>

            <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-50/80 p-6">
              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white">
                <RxSpeakerLoud className="text-base" />
                Hear Details
              </button>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <BsBoxSeam />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Item</p>
                  <p className="text-base font-semibold">test</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3 rounded-2xl border border-yellow-200 bg-yellow-50 px-4 py-3 text-center">
                <div className="flex-1 basis-[140px]">
                  <p className="text-xs text-slate-500">Total</p>
                  <p className="font-semibold">$30.00</p>
                </div>
                <div className="flex-1 basis-[140px]">
                  <p className="text-xs text-slate-500">Paid</p>
                  <p className="font-semibold text-emerald-600">$10.00</p>
                </div>
                <div className="flex-1 basis-[140px]">
                  <p className="text-xs text-slate-500">Remaining</p>
                  <p className="font-semibold text-red-500">$20.00</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <p className="text-sm font-semibold">Payment History:</p>
                <div className="mt-3 flex items-center justify-between border-b border-slate-100 pb-2 text-sm text-slate-500">
                  <span>26/01/2026</span>
                  <span className="font-semibold text-emerald-600">+$10.00</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="font-semibold">Total Paid:</span>
                  <span className="font-semibold text-emerald-600">$10.00</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-sm">
                  <span className="font-semibold text-red-500">Still Owes:</span>
                  <span className="font-semibold text-red-500">$20.00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="rounded-3xl bg-black/40 p-8">
            <div className="mx-auto max-w-xl rounded-3xl bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.2)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <FaPlus className="text-blue-600" />
                  Add New Lending
                </div>
                <span className="text-slate-400">✕</span>
              </div>

              <div className="mt-5 rounded-2xl bg-blue-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600">
                    <RiUser3Line />
                  </div>
                  <input
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none"
                    placeholder="Person's Name"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button className="flex flex-1 basis-[180px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white">
                    <IoIosMic />
                    Speak Name
                  </button>
                  <button className="flex flex-1 basis-[180px] items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white">
                    <RxSpeakerLoud />
                    Hear Name
                  </button>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-emerald-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-600">
                    <BsBoxSeam />
                  </div>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none"
                    placeholder="Item Name"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button className="flex flex-1 basis-[180px] items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white">
                    <IoIosMic />
                    Speak Item
                  </button>
                  <button className="flex flex-1 basis-[180px] items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white">
                    <RxSpeakerLoud />
                    Hear Item
                  </button>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-2xl bg-purple-50 px-4 py-3 text-sm font-medium text-slate-600">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-purple-600">
                  <CiCalendar />
                </div>
                Today: 25/01/2026
              </div>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white">
                <FaPlus />
                Add Record
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className={sectionCard + " p-6"}>
            <div className="flex rounded-2xl bg-slate-100 p-1 text-sm font-medium text-slate-600">
              <button className="flex-1 rounded-2xl py-2">Active (1)</button>
              <button className="flex-1 rounded-2xl bg-white py-2 shadow">Returned (1)</button>
            </div>

            <div className="mt-6 rounded-3xl border border-emerald-300 bg-emerald-50/80 p-6">
              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white">
                <RxSpeakerLoud className="text-base" />
                Hear Details
              </button>

              <div className="mt-5 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <BsBoxSeam />
                </div>
                <div>
                  <p className="text-xs text-slate-500">Item</p>
                  <p className="text-base font-semibold">test</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3 rounded-2xl border border-yellow-200 bg-yellow-50 px-4 py-3 text-center">
                <div className="flex-1 basis-[140px]">
                  <p className="text-xs text-slate-500">Total</p>
                  <p className="font-semibold">$40.00</p>
                </div>
                <div className="flex-1 basis-[140px]">
                  <p className="text-xs text-slate-500">Paid</p>
                  <p className="font-semibold text-emerald-600">$30.00</p>
                </div>
                <div className="flex-1 basis-[140px]">
                  <p className="text-xs text-slate-500">Remaining</p>
                  <p className="font-semibold text-red-500">$10.00</p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <p className="text-sm font-semibold">Payment History:</p>
                <div className="mt-3 flex items-center justify-between border-b border-slate-100 pb-2 text-sm text-slate-500">
                  <span>26/01/2026</span>
                  <span className="font-semibold text-emerald-600">+$30.00</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="font-semibold">Total Paid:</span>
                  <span className="font-semibold text-emerald-600">$30.00</span>
                </div>
                <div className="mt-1 flex items-center justify-between text-sm">
                  <span className="font-semibold text-red-500">Still Owes:</span>
                  <span className="font-semibold text-red-500">$10.00</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 text-sm text-slate-600">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CiCalendar />
                </div>
                Returned on 26/01/2026
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <button className="flex flex-1 basis-[180px] items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-3 text-sm font-semibold text-white">
                  <span>$</span>
                  Pay
                </button>
                <button className="flex flex-1 basis-[180px] items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white">
                   <span>$</span>
                  All Paid
                </button>
              </div>

              <div className="mt-4 rounded-2xl bg-emerald-200/70 px-4 py-3 text-center text-sm font-semibold text-emerald-700">
                RETURNED
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
