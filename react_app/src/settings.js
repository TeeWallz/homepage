let API_SERVER_VAL = '';

switch (process.env.NODE_ENV) {
    // Prod
    case "production":
        API_SERVER_VAL = '/djangoApp/';
        break;

    // Local
    case "development":
        API_SERVER_VAL = 'http://localhost:' + process.env.REACT_APP_DJANGO_PORT;
        break;
    default:
        API_SERVER_VAL = '/djangoApp/';
        break;
}

export const API_SERVER = API_SERVER_VAL;

// Session / token expiration time
// 100 days
export const SESSION_DURATION = 1000*3600*24*100;