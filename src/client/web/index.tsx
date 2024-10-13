import { CV, RequestOptions } from "@types";

const apiPath = "/api"

export function getCvInfo(cvId: number | string) {
    return requestJson<CV>({
        method: 'GET',
        url: `${apiPath}/fetchCvInfo/${cvId}`
    })
}

export async function requestJson<T>(request: RequestOptions): Promise<T> {
    try {
        const response = await fetch(request.url, {
            method: request.method || 'POST', // Default to POST
            headers: {
                'Content-Type': 'application/json',
                ...request.headers,
            },
            body: JSON.stringify(request.body),
        });

        const text = await response.text();

        // Parse JSON response or throw a parse error
        try {
            return JSON.parse(text) as T;
        } catch (parseError) {
            throw new Error(`Failed to parse JSON: ${parseError}`);
        }

    } catch (error) {
        // Handle error
        throw error;
    }
}