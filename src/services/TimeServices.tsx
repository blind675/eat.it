
class TimeServices {

    // @ts-ignore
    static get nextMealIndex() {
        const dateNow = new Date();
        const hourNow = dateNow.getHours();

        if ( hourNow < 9 ) {
            return 0;
        }

        if (hourNow < 12) {
            return 1;
        }

        if (hourNow < 15) {
            return 2;
        }

        if (hourNow < 19) {
            return 3;
        }

        return 4;
    }

    static getDaysSinceTimestamp(timestamp: number) {
        const dateNow = new Date();
        const dateTimestamp = new Date(timestamp);

        return Math.floor((Date.UTC(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate()) - Date.UTC(dateTimestamp.getFullYear(), dateTimestamp.getMonth(), dateTimestamp.getDate()) ) /(1000 * 60 * 60 * 24));
    }
}

export default TimeServices;
