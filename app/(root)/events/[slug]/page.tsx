import { eventsApi } from "@/lib/api/events";
import { cacheLife } from "next/cache";
import React, { Suspense } from "react";
import EventDetails from "./EventDetails";

function Page({ params }: { params: Promise<{ slug: string }> }) {
    
    
    return <div>
        <Suspense fallback={<div>Loading...</div>}>
            <EventDetails params={params}/>
        </Suspense>
    </div>;
}

export default Page;
