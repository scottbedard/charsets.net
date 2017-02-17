/**
 * Convert a value to a boolean.
 *
 * @param   {String|Number|Boolean} value   The value being converted
 * @return  {Boolean}
 */
export const convertToBoolean = function (value) {
    return [
        '1',
        'on',
        'true',
        'yes',
    ].indexOf(String(value).toLowerCase().trim()) > -1;
};
