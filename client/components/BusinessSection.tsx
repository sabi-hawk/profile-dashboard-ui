export function BusinessSection() {
  return (
    <div className="mt-[30px]">
      {/* Logo Upload */}
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="h-[100px] w-[100px] rounded-lg flex items-center justify-center">
          <img src="/assets/logo.svg" alt="LOGO" className="w-16 h-16" />
        </div>
        <div className="flex-1">
          <div className="mb-4 flex flex-wrap gap-4">
            <button className="rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 shadow">
              Upload Your Logo
            </button>
            <button className="rounded border border-red-500 bg-white px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-50">
              Reset
            </button>
          </div>
          <p className="text-sm text-gray-muted">
            Allowed JPG, GIF or PNG. Max size of 800K
          </p>
        </div>
      </div>

      {/* Business Card Preview */}
      <div className="mb-6 w-[400px]">
        <div className="p-5">
          <h4 className="text-lg font-medium text-blue-600 mb-1">Flowers Store</h4>
          <p className="text-sm text-green-600 mb-2">Storename.name.com</p>
          <p className="text-sm text-gray-muted">
            A store specializing in the sales of natural roses and fast delivery within hours
          </p>
        </div>
      </div>

      {/* Business Details Form */}
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Ex : Flowers Store"
          className="w-full rounded-lg border border-gray-border-light px-4 py-3 text-sm focus:border-primary focus:outline-none"
        />
        <textarea
          placeholder="Ex : A store specializing in the sale of natural roses and fast delivery within hours"
          rows={3}
          className="w-full rounded-lg border border-gray-border-light px-4 py-3 text-sm focus:border-primary focus:outline-none resize-none"
        />
      </div>
    </div>
  );
}
