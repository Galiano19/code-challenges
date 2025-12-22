import ChallengePage from "@/app/components/pattern/ChallengePage/ChallengePage";
import {
  TypographyInlineCode,
  TypographyP,
} from "@/app/components/ui/typography/typography";

export default function ImplementCurry() {
  return (
    <ChallengePage
      title="Implement Curry()"
      description="implement a curry() function, which accepts a function and return a curried one."
    >
      <TypographyP>
        Currying is a transformation of functions that translates a function
        from callable as <TypographyInlineCode>f(a, b, c)</TypographyInlineCode>{" "}
        into callable as <TypographyInlineCode>f(a)(b)(c)</TypographyInlineCode>
        .
      </TypographyP>

      <TypographyP>
        <strong>Example:</strong>
      </TypographyP>

      <TypographyInlineCode>
        {`const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
curriedAdd(1)(2)(3); // 6
curriedAdd(1, 2)(3); // 6
curriedAdd(1)(2, 3); // 6`}
      </TypographyInlineCode>
    </ChallengePage>
  );
}
