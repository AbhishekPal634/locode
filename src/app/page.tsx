"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

// ==========================TEMPORARY===========================

const MaintenancePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-4xl font-bold mb-4">We'll be back soon!</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Sorry for the inconvenience. I'm currently working on fixing a bug and
          will be back online shortly. Please check back in a few days.
        </p>
        <p className="text-sm text-muted-foreground">— Abhishek Pal</p>
      </div>
    </div>
  );
};

// ==========================TEMPORARY===========================

const page = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const trpc = useTRPC();
  const createProject = useMutation(
    trpc.projects.create.mutationOptions({
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: (data) => {
        router.push(`/projects/${data.id}`);
      },
    })
  );
  return (
    // <div className="h-screen w-screen flex items-center justify-center">
    //   <div className="max-w-7xl mx-auto flex items-center flex-col gap-y-4 justify-center">
    //     <Input value={value} onChange={(e) => setValue(e.target.value)} />
    //     <Button
    //       disabled={createProject.isPending}
    //       onClick={() => createProject.mutate({ value: value })}
    //     >
    //       Submit
    //     </Button>
    //   </div>
    // </div>

    <MaintenancePage />
  );
};

export default page;
