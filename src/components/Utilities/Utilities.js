// UTILITIES.JS //

export function fxnUtilDateShort(itmdate){
    const txtDate = new Date(parseInt(itmdate, 10));
    let txtDateFormat = (txtDate.getMonth() + 1) + "/" + txtDate.getDate() + "/" + txtDate.getFullYear()
    
    return txtDateFormat;
}


export function fxnTxtlimit (string = "", limit = 0) {  
    if (string.length > limit) {
        return string.substring(0, limit) + "..."
    }

    return string
}