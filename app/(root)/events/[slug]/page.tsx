import { eventsApi } from "@/lib/api/events";
import { cacheLife } from "next/cache";
import React, { Suspense } from "react";

function EventDetails({ params }: { params: Promise<{ slug: string }> }) {
    
    
    return <div>
        <Suspense fallback={<div>Loading...</div>}>
            <EventDetails params={params}/>
        </Suspense>
    </div>;
}

export default EventDetails;
