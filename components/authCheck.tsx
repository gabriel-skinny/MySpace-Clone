import { useSession } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export default function Authcheck({ children }: Props) {
  const { data: session, status } = useSession();

  console.log({ session, status });

  if (status === "authenticated") {
    return <>{children}</>;
  } else {
    return <></>;
  }
}
