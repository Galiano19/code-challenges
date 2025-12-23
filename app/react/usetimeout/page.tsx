"use client";

import ChallengePage from "@/app/components/pattern/ChallengePage/ChallengePage";
import { useState } from "react";
import { useTimeout } from "./useTimeout";
import { TypographyP } from "@/app/components/ui/typography/typography";

export default function Timeout() {
  const [count, setCount] = useState(0);

  const handleTimer = () => {
    setCount(count + 1);
  };

  //@ts-ignore -- useTimeout expects 2 arguments
  useTimeout(handleTimer, 1000);

  return (
    <ChallengePage
      title="useTimeout()"
      description="Create a hook to easily use setTimeout(callback, delay). reset the timer if delay changes. DO NOT reset the timer if only callback changes"
    >
      <TypographyP>Check code in repo</TypographyP>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(0)}>Reset Count</button>
      </div>
    </ChallengePage>
  );
}
