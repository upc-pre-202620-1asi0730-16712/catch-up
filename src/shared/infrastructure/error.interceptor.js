export const errorInterceptor = {

    onResponse: (response) => response,

    onError: (error) => {
        let message;

        if (error.response) {
            console.error("Data:", error.response.data);
            console.error("Status:", error.response.status);
            console.error("Headers:", error.response.headers);
            message = error.response.data["message"] || `Error: ${error.response.status}: ${error.response.statusText}`;
        } else if (error.request) {
            console.error("Request:", error.request);
            message = "No response returned.";
        } else {
            console.error("Error Message:", error.message);
            message = error.message;
        }

        return Promise.reject(message);
    }

}