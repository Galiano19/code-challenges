"use client";

import ChallengePage from "@/app/components/pattern/ChallengePage/ChallengePage";
import { Button } from "@/app/components/ui/button/button";
import { TypographyBlockquote } from "@/app/components/ui/typography/typography";
import { useReducer } from "react";

function counterReducer(
  count: number,
  action: { type: "increment" | "decrement" | "reset" }
) {
  if (action.type === "increment") {
    return count + 1;
  }
  if (action.type === "decrement") {
    return count - 1;
  }
  if (action.type === "reset") {
    return 0;
  }
  return count;
}

export default function CounterApp() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const handleDecrease = () => {
    dispatch({ type: "decrement" });
  };

  const handleIncrease = () => {
    dispatch({ type: "increment" });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <ChallengePage
      title="The React Counter app"
      description="create the famous Counter app. Counter starts from 0. click the '+' button to increment. click the '-' button to decrement."
    >
      <div className="flex items-center gap-4 mt-4">
        <Button variant={"outline"} onClick={handleDecrease}>
          -
        </Button>
        <span>{count}</span>
        <Button variant={"outline"} onClick={handleIncrease}>
          +
        </Button>
        <Button variant={"secondary"} onClick={handleReset}>
          Reset
        </Button>
      </div>
      <TypographyBlockquote className="mb-4 text-sm text-gray-600">
        Using useReducer instead of useState for better state management with
        multiple actions and clearer action dispatching.
      </TypographyBlockquote>
    </ChallengePage>
  );
}
