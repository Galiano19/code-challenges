"use client";

import { useState } from "react";
import { TypographyH1, TypographyP } from "../../ui/typography/typography";
import Layout from "../Layout/Layout";
import { Button } from "../../ui/button/button";

interface ChallengePageProps extends React.PropsWithChildren {
  title: string;
  description: string;
}

export default function ChallengePage({
  title,
  description,
  children,
}: ChallengePageProps) {
  const [result, setResult] = useState(false);

  const handleClick = () => {
    setResult(true);
  };
  return (
    <Layout>
      <TypographyH1>{title}</TypographyH1>
      <TypographyP>{description}</TypographyP>
      {result ? (
        <div>{children}</div>
      ) : (
        <Button variant={"outline"} onClick={handleClick}>
          Show solution
        </Button>
      )}
    </Layout>
  );
}
