import {api} from "@/lib/api/api";
import {IEvent} from "@/database";

export const eventsApi = {
    list: (): Promise<{ message: string, events: IEvent[] }> => api.get<{
        message: string,
        events: IEvent[]
    }>("/api/events"),
    create: (body: unknown): Promise<IEvent> => api.post<IEvent>("/api/events", body)
}