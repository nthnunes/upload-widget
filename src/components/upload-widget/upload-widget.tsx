import * as Collapsible from "@radix-ui/react-collapsible";
import { useState } from "react";
import { Dropzone } from "./dropzone";
import { UploadWidgetHeader } from "./header";
import { UploadList } from "./upload-list";
import { MinimizedButton } from "./minimized-button";

export function UploadWidget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  return (  
    <Collapsible.Root onOpenChange={setIsWidgetOpen}>
      <div className="bg-zinc-900 overflow-hidden w-[360px] rounded-xl shadow-shape">
        {!isWidgetOpen && <MinimizedButton />}

        <Collapsible.Content>
          <UploadWidgetHeader />

          <div className="flex flex-col gap-4 py-3">
            <Dropzone />
            <div className="h-px bg-zinc-800 border-t border-black/50 box-content" />
            <UploadList />
          </div>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
}
