const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function request<T>(
    url: string,
    method: string,
    body?: unknown,
): Promise<T> {
    const response = await fetch(`${BASE_URL}/${url}`, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            'content-type': 'application/json',
        }
    })

    return response.json()
}

export const api = {
    get: <T>(url: string) => {
        return request<T>(url, "GET",)
    },

    post: <T>(url: string, body: unknown) => {
        return request<T>(url, "POST", body)
    }

    
}