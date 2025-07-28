import { ProjectForm } from "@/modules/home/ui/components/project-form";
import { ProjectsList } from "@/modules/home/ui/components/projects-list";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto w-full">
      <section className="space-y-6 py-[16vh] 2xl:py-48">
        {/* <div className="flex flex-col items-center">
          <div className="relative">
            <Image
              src="/logo.svg"
              alt="LoCode"
              width={50}
              height={50}
              className="hidden md:block drop-shadow-sm"
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 to-amber-400/20 rounded-full blur-xl opacity-60 animate-pulse" />
          </div>
        </div> */}

        <h1 className="text-4xl md:text-6xl font-bold text-center">
          <span className="text-slate-900 dark:text-white">
            Dream It. Build It. With{" "}
          </span>
          <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            LoCode
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto">
          Turn your wildest app ideas into reality. Just describe what you want,
          and watch it come to life in minutes, not months.
        </p>

        <div className="max-w-3xl mx-auto w-full">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg blur opacity-20" />
            <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 rounded-lg shadow-2xl shadow-orange-500/10">
              <ProjectForm />
            </div>
          </div>
        </div>
      </section>

      <ProjectsList />
    </div>
  );
};

export default Page;
