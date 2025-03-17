export default function ContentHeader({ title, type = null }) {
  return (
    <>
      <div className="flex justify-between w-full gap-5 pb-2 border-b border-primary">
        <h3 className="bg-slate-100 py-2.5 px-5 rounded-xl font-medium text-primary">
          {title}
        </h3>
        {type && (
          <div className="max-w-64 w-full">
            <select
              name="select-type"
              id="select-type"
              className="bg-slate-100 text-slate-500 w-full px-5 py-2 rounded-xl border border-gray-300 outline-primary"
            >
              <option value="">Filter by Categories</option>
            </select>
          </div>
        )}
      </div>
    </>
  );
}
