import axios from "axios";
import {errorInterceptor} from "@/shared/infrastructure/error.interceptor.js";

const newsApi = import.meta.env.VITE_NEWS_API_URL;
const apiKey = import.meta.env.VITE_NEWS_API_KEY;
const sourcesEndpoint = import.meta.env.VITE_SOURCES_ENDPOINT_PATH;
const topHeadlinesEndpoint = import.meta.end.VITE_TOP_HEADLINES_ENDPOINT_PATH;

const http = axios.create({
    baseURL: newsApi,
    params: {
        apiKey: apiKey,
    }
});

http.interceptors.response.use(errorInterceptor.onResponse, errorInterceptor.onError);

export class NewsApi {
    getSources = () => http.get(`${sourcesEndpoint}`);

    getArticlesForSourceId = sourceId => http.get(`${topHeadlinesEndpoint}`, {
        params: {
            sources: sourceId
        }
    });
}

