import React from "react";
import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
// import {events} from "@/lib/constants";
import {IEvent} from "@/database";
import {Suspense} from "react";
import {eventsApi} from "@/lib/api/events";

async function Root() {
    "use cache";
    const {events}: { message: string, events: Array<IEvent> } = await eventsApi.list()
    console.log(events)
    return (
        <section>
            <h1 className={"text-center mb-5"}>The Hub for every dev</h1>
            <p className={"text-center "}> DO whatever you want</p>
            <ExploreBtn/>
            <div className="mt-20 space-y-7">
                <h3>Featured events</h3>
                <ul className="events">
                    {events && events.length > 0 && events.map((event: IEvent, index: number) => (
                        <li key={index}>
                            <Suspense fallback={<div>Loading</div>}>
                                <EventCard {...event} />
                            </Suspense>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Root;
