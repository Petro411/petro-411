import { footerRoutes } from "@/config/FooterRoutes";
import { homeRoutes } from "@/config/HomeRoutes";
import { Text } from "@radix-ui/themes";
import { label } from "@/branding";
import Link from "next/link";

import Container from "./Container";
import Logo from "./Logo";


export const Footer = () => {
  return (
    <>
      <footer className="border-t border-gray-200 pb-8">
        <Container className="grid gap-8 lg:gap-0 grid-cols-1 lg:grid-cols-2 border-b py-8">
          <div className="space-y-4">
            <Logo />
            <Text as={"p"} size={"3"} className="w-full lg:w-10/12">
              {label.SimplifiesLandAcquisition}
            </Text>
            <div className="flex flex-row items-center gap-3">
              <Link
                href="https://www.linkedin.com/in/devhasnain"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-blue hover:text-blue-600 hover:bg-gray-500/20 rounded-lg transition-colors"
                title="LinkedIn Profile"
              >
                <svg
                  xlinkTitle="LinkedIn Profile"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid gap-8 sm:gap-0 grid-cols-1 sm:grid-cols-2 text-sm">
            <ul className="space-y-2">
              <li className="mb-2">
                <h4 className="text-lg font-medium">Company</h4>
              </li>
              {homeRoutes.map((item, i) => (
                <li key={i}>
                  <Link href={item.path} className="hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              <li className="mb-2">
                <h4 className="text-lg font-medium">Quick Links</h4>
              </li>
              {footerRoutes.map((item, i) => (
                <li key={i}>
                  <Link href={item.path} className="hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
        <div className="pt-8 flex flex-col items-center justify-center">
          <Text as="p" className="px-6 text-sm" align={"center"}>
            {label.CopyRight}
          </Text>
          <Text as="p" className="px-6 text-xs mt-1" align={"center"}>
            Developed by{" "}
            <Link
              href="https://hasnainalam.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Web Developer Portfolio"
              className="underline hover:opacity-80 hover:text-primary"
            >
              Hasnain Alam
            </Link>
          </Text>
        </div>
      </footer>
    </>
  );
};

export default Footer;
