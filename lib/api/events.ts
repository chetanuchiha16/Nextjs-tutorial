import {api} from "@/lib/api/api";
import {IEvent} from "@/database";

export const eventsApi = {
    list: (): Promise<IEvent[]> => api.get<IEvent[]>("/events"),
    create: (body: unknown): Promise<IEvent> => api.post<IEvent>("/events", body)
}