import { api } from "@/lib/api/api";
import { IEvent } from "@/database";

export const eventsApi = {
    list: (): Promise<{ message: string; events: IEvent[] }> =>
        api.get<{
            message: string;
            events: IEvent[];
        }>("/api/events"),

    create: (body: unknown): Promise<IEvent> =>
        api.post<IEvent>("/api/events", body),

    get: (slug: string): Promise<{ message: string; event: IEvent }> =>
        api.get<{ message: string; event: IEvent }>(`/api/events/${slug}`),
};
