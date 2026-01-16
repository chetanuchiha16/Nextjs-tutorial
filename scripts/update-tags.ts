
import mongoose from 'mongoose';
import connectDB from '../lib/mongodb';
import Event from '../database/event.model';

async function updateTags() {
    try {
        await connectDB();
        console.log("Connected to DB");

        // 1. Full Stack Meetup -> Add 'react', 'javascript'
        const fullStack = await Event.findOne({ title: 'Full Stack Meetup' });
        if (fullStack) {
            console.log(`Updating '${fullStack.title}'...`);
            const newTags = [...new Set([...fullStack.tags, 'react', 'javascript'])];
            fullStack.tags = newTags;
            await fullStack.save();
            console.log(`Updated tags: ${fullStack.tags}`);
        } else {
            console.log("Event 'Full Stack Meetup' not found.");
        }

        // 2. Design Systems Workshop -> Add 'frontend', 'web'
        const designSys = await Event.findOne({ title: 'Design Systems Workshop' });
        if (designSys) {
             console.log(`Updating '${designSys.title}'...`);
             const newTags = [...new Set([...designSys.tags, 'frontend', 'web'])];
             designSys.tags = newTags;
             await designSys.save();
             console.log(`Updated tags: ${designSys.tags}`);
        } else {
            console.log("Event 'Design Systems Workshop' not found.");
        }

    } catch (e) {
        console.error(e);
    } finally {
        await mongoose.disconnect();
    }
}

updateTags();
