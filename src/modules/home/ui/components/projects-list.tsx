"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export const ProjectsList = () => {
  const trpc = useTRPC();
  const { data: projects } = useQuery(trpc.projects.getMany.queryOptions());
  return (
    <div className="w-full bg-white dark:bg-sidebar rounded-xl p-8 border flex flex-col gap-y-6 sm:gap-y-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Saved projects</h2>
        {projects && projects.length > 0 && (
          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
            {projects.length} project{projects.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects?.length === 0 && (
          <div className="col-span-full text-center py-12">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="LoCode"
                  width={24}
                  height={24}
                  className="opacity-50"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">
                  No projects yet
                </p>
                <p className="text-xs text-muted-foreground">
                  Create your first project above to get started
                </p>
              </div>
            </div>
          </div>
        )}
        {projects?.map((project) => (
          <Button
            key={project.id}
            variant="outline"
            className="font-normal h-auto justify-start w-full text-start p-0 overflow-hidden hover:shadow-md transition-all duration-200 group"
            asChild
          >
            <Link href={`/projects/${project.id}`}>
              <div className="p-6 w-full">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
                    <span>
                      {formatDistanceToNow(project.updatedAt, {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
