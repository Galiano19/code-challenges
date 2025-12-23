import Layout from "./components/pattern/Layout/Layout";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table/table";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
} from "./components/ui/typography/typography";

export default function Home() {
  return (
    <Layout>
      <TypographyH1>Code challenges</TypographyH1>
      <TypographyP>
        A collection of code challenges and their solution.
      </TypographyP>
      <TypographyH2>JavaScript</TypographyH2>
      <Table>
        <TableCaption>A list of JavaScript code challenges.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Link</TableHead>
            <TableHead className="text-right">Solution</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>implement curry()</TableCell>
            <TableCell>
              <a
                href="https://bigfrontend.dev/problem/implement-curry"
                target="_blank"
              >
                BigFrontEnd
              </a>
            </TableCell>
            <TableCell>
              <a href="/javascript/implementcurry">Go to Challenge</a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <TypographyH2>React</TypographyH2>
      <Table>
        <TableCaption>A list of React code challenges.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Link</TableHead>
            <TableHead className="text-right">Solution</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>implement curry()</TableCell>
            <TableCell>
              <a
                href="https://bigfrontend.dev/react/The-React-Counter"
                target="_blank"
              >
                BigFrontEnd
              </a>
            </TableCell>
            <TableCell>
              <a href="/react/counterapp">Go to Challenge</a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>useTiemout()</TableCell>
            <TableCell>
              <a
                href="https://bigfrontend.dev/react/usetimeout"
                target="_blank"
              >
                BigFrontEnd
              </a>
            </TableCell>
            <TableCell>
              <a href="/react/usetimeout">Go to Challenge</a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Layout>
  );
}
