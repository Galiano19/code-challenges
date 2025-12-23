"use client";

import ChallengePage from "@/app/components/pattern/ChallengePage/ChallengePage";
import { TypographyP } from "@/app/components/ui/typography/typography";

export default function FirstRender() {
  return (
    <ChallengePage
      title="useIsFirstRender()"
      description="Create a hook to tell if it is the first render."
    >
      <TypographyP>Check code in repo</TypographyP>
    </ChallengePage>
  );
}
