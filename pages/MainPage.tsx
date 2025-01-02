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
interface IProps {
  lng: string;
}

const MainPage = async ({ lng }: IProps) => {
  const { t } = await getTranslation(lng, "common");
  return (
    <main className="flex flex-auto flex-col items-center gap-8 sm:items-start">
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
            className="rounded-2xl object-cover w-auto h-auto"
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
  );
};

export default MainPage;
