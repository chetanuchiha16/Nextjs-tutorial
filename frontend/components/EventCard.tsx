import Image from "next/image";
import Link from "next/link";
interface Props {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}
function EventCard({ title, image, location, slug, date, time }: Props) {
    return (
        <Link href={`/events/${slug}`} id="event-card">
            <Image
                src={image}
                alt={title}
                width={410}
                height={300}
                className="poster"
            />
            <div className="flex flex-row gap-2">
                <Image
                    src={"/icons/pin.svg"}
                    alt="pin"
                    width={14}
                    height={14}
                ></Image>
                <p>{location}</p>
            </div>
            <p className="title">{title}</p>
            <div className="datetime">
                <div>
                    <Image
                        src={"/icons/calendar.svg"}
                        height={14}
                        width={14}
                        alt="calender"
                    />
                    <p>{date}</p>
                    <Image
                        src={"/icons/clock.svg"}
                        height={14}
                        width={14}
                        alt="calender"
                    />
                    <p>{time}</p>
                </div>
            </div>
        </Link>
    );
}

export default EventCard;
