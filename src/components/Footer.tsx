import { footerRoutes } from "@/config/FooterRoutes";
import { Text } from "@radix-ui/themes";
import { label } from "@/branding";
import Link from "next/link";

import Container from "./Container";


export const Footer = () => {
  return (
    <>
      <div className="gradientBg py-4">
        <Container>
          <div className="py-4 flex flex-col sm:flex-row items-center justify-center gap-10">
            {footerRoutes.map((item, index) => (
              <Link key={index} href={item.path}>
                <Text size={"3"} className="!text-white">
                  {item.name}
                </Text>
              </Link>
            ))}
          </div>
        </Container>
        <div className="py-2 flex flex-col items-center justify-center">
          <Text as="p" className="!text-gray-200 px-6" align={"center"}>
            {label.CopyRight}
          </Text>
        </div>
      </div>
    </>
  );
};

export default Footer;
