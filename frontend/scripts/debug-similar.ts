
import mongoose from 'mongoose';
import connectDB from '../lib/mongodb';
import Event from '../database/event.model';

async function getSimilarEventsBySlug(slug: string) {
    try {
        await connectDB();
        const event = await Event.findOne({ slug });
        if (!event) return { error: "Event not found" };

        console.log(`Debug: searching similar for event: ${event.title}, ID: ${event._id}`);
        console.log(`Debug: event tags:`, event.tags);

        if (!event.tags || event.tags.length === 0) {
            console.log("Debug: Event has no tags.");
            return [];
        }

        const query = { _id: { $ne: event._id }, tags: { $in: event.tags } };
        console.log(`Debug: Query:`, JSON.stringify(query, null, 2));

        const results = await Event.find(query).lean();
        return results;
    } catch (e) {
        console.error("Error in getSimilarEventsBySlug:", e);
        return [];
    }
}

async function main() {
    try {
        await connectDB();
        console.log("Connected to DB");

        const allEvents = await Event.find({});
        console.log(`Total events in DB: ${allEvents.length}`);

        for (const event of allEvents) {
            const similar = await getSimilarEventsBySlug(event.slug);
            if (Array.isArray(similar)) {
                if (similar.length === 0) {
                    console.log(`[EMPTY] Event '${event.title}' has 0 similar events. Tags: ${event.tags}`);
                } else {
                    console.log(`[OK]    Event '${event.title}' has ${similar.length} similar events.`);
                }
            }
        }

    } catch (e) {
        console.error(e);
    } finally {
        await mongoose.disconnect();
    }
}

main();
