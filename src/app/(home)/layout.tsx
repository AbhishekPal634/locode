// interface Props {
//   children: React.ReactNode;
// }

// const Layout = ({ children }: Props) => {
//   return (
//     <main className="flex flex-col min-h-screen max-h-screen">
//       <div className="flex-1 flex flex-col px-4 pb-4">
//         <div className="absolute inset-0 -z-10 f-full w-full bg-background dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] bg-[radial-gradient(#dadde2_1px,transparent_1px)] [background-size:16px_16px]" />
//         {children}
//       </div>
//     </main>
//   );
// };

// export default Layout;

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1 flex flex-col px-4 pb-4 relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 dark:from-neutral-900 dark:via-orange-950/50 dark:to-amber-950/50" />

        {/* Floating orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-300/20 dark:bg-orange-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-amber-200/15 dark:bg-amber-300/8 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-orange-400/15 dark:bg-orange-500/8 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(251,146,60,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(251,146,60,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(251,146,60,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {children}
      </div>
    </main>
  );
};

export default Layout;
