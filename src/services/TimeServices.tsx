
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

    static daysSinceTimestamp(timestamp: number) {
        return TimeServices.daysDifferenceBetweenTimestamp(timestamp, Date.now());
    }

    static daysDifferenceBetweenTimestamp(firstTimestamp: number, secondTimestamp: number) {
        const date1 = new Date(firstTimestamp);
        const date2 = new Date(secondTimestamp);

        return Math.floor((Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
}

export default TimeServices;
