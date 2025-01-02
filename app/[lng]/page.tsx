import { getTranslation } from "@/app/i18n";
import cardImg from "@/public/card-complete.jpeg";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/layout/navbar/NavBar";

interface IProps {
  params: Promise<{
    lng: string;
  }>;
}

export default async function Home({ params }: IProps) {
  const lng = (await params).lng;
  const { t } = await getTranslation(lng, "common");
  return (
    <div className="flex min-h-screen flex-col items-center gap-16 pb-20 font-mono sm:px-20">
      <NavBar />
      <main className="flex flex-col items-center gap-8 sm:items-start">
        <Card className="min-w-full bg-gradient-to-tr from-indigo-800 to-yellow-500">
          <CardHeader>
            <h2>{t("title")}</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <Image
              src={cardImg}
              alt="Card Image"
              width={300}
              priority
              className="rounded-2xl object-cover"
            />
          </CardBody>
          <Divider />
          <CardFooter className="flex items-center justify-end">
            <Button
              className="bg-gradient-to-tr from-blue-500 to-yellow-500 text-white shadow-lg"
              radius="full"
            >
              Click me
            </Button>
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
