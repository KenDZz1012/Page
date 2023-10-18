"use client";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import LandingPage from "src/Pages/Home/page";
export default async function Home() {
  return <LandingPage />;
}
