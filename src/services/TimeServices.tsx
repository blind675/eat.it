
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
}

export default TimeServices;
