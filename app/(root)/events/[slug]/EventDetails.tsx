import { IEvent } from "@/database";
import { eventsApi } from "@/lib/api/events";
import React from "react";

export default async function EventDetails({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const { event } : {event:IEvent} = await eventsApi.get(slug);
    return <div>
        {event.title}
    </div>;
}
