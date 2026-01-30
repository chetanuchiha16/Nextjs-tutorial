import { eventsApi } from "@/lib/api/events";
import { cacheLife } from "next/cache";
import React, { Suspense } from "react";
import EventDetails from "./EventDetails";
// "use cache"
async function Page({ params }: { params: Promise<{ slug: string }> }) {
    'use cache'
    cacheLife("hours")
    
    return <div>
        <Suspense fallback={<div>Loading...</div>}>
            <EventDetails params={params}/>
        </Suspense>
    </div>;
}

export default Page;
