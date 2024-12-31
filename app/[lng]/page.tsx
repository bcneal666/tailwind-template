import { getTranslation } from "@/app/i18n";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import cardImg from "@/public/card-complete.jpeg";

interface IProps {
  params: Promise<{
    lng: string;
  }>;
}

export default async function Home({ params }: IProps) {
  const lng = (await params).lng;
  const { t } = await getTranslation(lng, "common");
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="flex flex-col items-center gap-8 sm:items-start">
        <h1>{t("title")}</h1>
        <Button color="primary">Click me</Button>
        <Card className="bg-red-500 min-w-full">
          <CardHeader>
            <h2>Card Title</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <Image
              src={cardImg}
              alt="Card Image"
              width={300}
              height={300}
              priority
              className="h-auto w-auto"
            />
          </CardBody>
          <Divider />
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        <p>
          <Link href="/">Home</Link>
        </p>
      </footer>
    </div>
  );
}
