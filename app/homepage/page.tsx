import { Metadata } from "next"


export const metadata: Metadata = {
    title: "Dashboard",
    description: "Example dashboard app built using the components.",
}

export default function Page() {
    return (
      <>
      <div className="flex flex-col">
      This is homepage
      </div>

      </>
    );
}