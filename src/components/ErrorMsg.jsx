import { AlertCircle, RefreshCw } from "lucide-react";
import React from "react";

function ErrorMsg() {
  return (
    <section className="mx-auto max-w-2xl">
      <div className="rounded-3xl border border-red-500/20 bg-red-500/60 p-8 shadow-2xl backdrop-blur-xs">
        {/* error message */}
        <div className="mb-4 flex items-center space-x-4">
          <div className="rounded-full bg-red-500/20 p-3">
            <AlertCircle className="h-6 w-6 text-red-200" />
          </div>
          <h3 className="text-xl font-semibold text-white/80">
            Something Went Wrong!!
          </h3>
        </div>
        <p className="mb-6 leading-relaxed text-white/80">Message</p>

        {/* button */}
        <button className="flex cursor-pointer items-center space-x-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-white transition-all duration-150 hover:scale-105 hover:bg-white/10 hover:shadow-lg">
          <RefreshCw className="h-5 w-5" />
          <span className="font-medium">Try Again</span>
        </button>
      </div>
    </section>
  );
}

export default ErrorMsg;
