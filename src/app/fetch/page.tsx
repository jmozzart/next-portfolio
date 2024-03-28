import { Inter } from "next/font/google"


const sd = {
    "scope": "conversations/message.readonly conversations/message.write",
    "userType": "Location",
    "locationId": "l1C08ntBrFjLS0elLIYU",
    "companyId": "l1C08ntBrFjLS0elLIYU",
    "approvedLocations": [
      "l1C08ntBrFjLS0elLIYU"
    ],
    "userId": "l1C08ntBrFjLS0elLIYU",
    "planId": "l1C08ntBrFjLS0elLIYU"
  }

  interface SdProps {
    scope: string;
    userType: string;
    locationId: string;
    companyId: string;
    approvedLocations: string[];
    userId: string;
    planId: string;
  }


export default async function ProjectsSection() {

    const art = await fetch('https://eo5uj3jnhjq5lyv.m.pipedream.net')
    const data = await art.json()

    return (
        <div className="container mx-auto m-10 p-4">
        <h2>
          Test Fetch
        </h2>
        
        <div>
         {data.scope}
        </div>
      </div>
    )
}