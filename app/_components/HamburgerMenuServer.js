import { auth } from "../_lib/auth";
import HamburgerMenuClient from "./HamburgerMenuClient";

async function HamburgerMenuServer() {
  const session = await auth();

  return <HamburgerMenuClient session={session} />;
}

export default HamburgerMenuServer;
